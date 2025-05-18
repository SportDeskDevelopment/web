import {
  type Context,
  createContext,
  useContext,
  startTransition,
  useEffect,
  useState,
  type ReactNode,
  Children,
  isValidElement,
  createElement,
  useMemo,
  useRef,
  type RefObject,
  type RefCallback,
  useCallback,
} from "react";

export function useStrictContext<T>(context: Context<T | null>) {
  const value = useContext(context);
  if (value === null) throw new Error("Strict context not passed");
  return value as T;
}

export function createStrictContext<T>(defaultValue?: T) {
  return createContext<T | null>(defaultValue ?? null);
}

export function useAppearanceDelay(
  show?: boolean,
  options = {} as {
    defaultValue?: boolean;
    appearenceDelay?: number;
    minDisplay?: number;
  },
) {
  const {
    minDisplay = 500,
    defaultValue = false,
    appearenceDelay = 500,
  } = options;

  const [delayedShow, setDelayedShow] = useState(defaultValue);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(true));
      }, appearenceDelay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(false));
      }, minDisplay);
      return () => clearTimeout(timer);
    }
  }, [appearenceDelay, show, minDisplay]);

  return delayedShow;
}

export function ComposeChildren({ children }: { children: ReactNode }) {
  const array = Children.toArray(children);
  const last = array.pop();
  return (
    <>
      {array.reduceRight(
        (child, element) =>
          isValidElement(element)
            ? createElement(element.type, element.props, child)
            : child,
        last,
      )}
    </>
  );
}

type Fn<ARGS extends any[], R> = (...args: ARGS) => R;

export function useEventCallback<A extends any[], R>(fn: Fn<A, R>): Fn<A, R> {
  const ref = useRef<Fn<A, R>>(fn);
  useEffect(() => {
    ref.current = fn;
  });
  return useMemo(
    () =>
      (...args: A): R => {
        const { current } = ref;
        return current(...args);
      },
    [],
  );
}

export function useDeferUndefinedUntilAnimationEnd<T>(
  value: T | undefined,
  ref?: RefObject<HTMLElement>,
) {
  const [deferredValue, setDeferredValue] = useState(value);

  useEffect(() => {
    if (deferredValue && !value) {
      const listener = () => {
        setDeferredValue(value);
      };
      const domElement = ref?.current ?? window;

      domElement.addEventListener("animationend", listener);
      return () => domElement.removeEventListener("animationend", listener);
    }

    if (value) {
      setDeferredValue(value);
    }
  }, [value, deferredValue, ref]);

  return deferredValue;
}

export function useMergeCallbackRefs<A>(
  ...refs: RefCallback<A>[]
): RefCallback<A> {
  return useCallback(
    (value) => {
      const clearRefs = refs.map((ref) => ref(value));

      return () => {
        clearRefs.forEach((clearRef) => clearRef?.());
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...refs],
  );
}
