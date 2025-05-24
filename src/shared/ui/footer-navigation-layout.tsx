export function FooterNavigationLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <nav className="bg-sidebar border-border fixed right-0 bottom-0 left-0 z-50 border-t shadow-md">
      <div className="relative flex h-16 items-center justify-around">
        {children}
      </div>
    </nav>
  );
}
