import { LangSwitchCarousel } from "@/features/lang-switch/ui/carousel";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";

export function SmallScreenLangSwitchView() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Continue onboarding</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <LangSwitchCarousel />
      </DialogContent>
    </Dialog>
    // <Drawer shouldScaleBackground>
    //   <DrawerTrigger asChild>
    //     <Button variant="outline">Continue onboarding</Button>
    //   </DrawerTrigger>
    //   <DrawerContent className="h-full">
    //     <DrawerHeader className="text-left">
    //       <DrawerTitle>Edit profile</DrawerTitle>
    //       <DrawerDescription>
    //         Make changes to your profile here. Click save when you're done.
    //       </DrawerDescription>
    //     </DrawerHeader>
    //     <LangSwitchCarousel />
    //   </DrawerContent>
    // </Drawer>
  );
}
