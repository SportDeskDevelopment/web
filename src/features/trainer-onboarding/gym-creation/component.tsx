import { Clock, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useCreateGym } from "./model/use-create-gym";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

export function GymCreationComponent() {
  const { t } = useTranslation("onboarding");
  //TODO: split into smaller components
  const {
    gyms,
    form,
    editIndex,
    setEditIndex,
    onGymAdd,
    handleEdit,
    handleDelete,
    onEditSubmit,
    onSubmit,
  } = useCreateGym();

  return (
    <div className="p-4">
      <h1 className="animate-fade-in-scale text-center text-3xl font-bold">
        {t("gym-creation.title")}
      </h1>
      <h2 className="animate-fade-in-scale text-muted-foreground mb-7 text-center text-xl [animation-duration:0.7s]">
        {t("gym-creation.subtitle")}
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onGymAdd)}
          className="animate-fade-in-scale space-y-4 [animation-duration:1s]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <FormLabel>{t("gym-creation.form.name")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("gym-creation.form.namePlaceholder")}
                  />
                </FormControl>
                <FormMessage />
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <FormLabel>{t("gym-creation.form.location")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("gym-creation.form.locationPlaceholder")}
                  />
                </FormControl>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <FormLabel>{t("gym-creation.form.description")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("gym-creation.form.descriptionPlaceholder")}
                  />
                </FormControl>
              </div>
            )}
          />

          <FormField
            control={form.control}
            name="workHours"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <FormLabel>{t("gym-creation.form.workHours")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("gym-creation.form.workHoursPlaceholder")}
                  />
                </FormControl>
              </div>
            )}
          />

          <Button
            type="submit"
            variant="secondary"
            className="animate-fade-in-scale w-full [animation-duration:0.7s]"
          >
            {t("gym-creation.add")}
          </Button>

          {gyms.length > 0 && (
            <p className="animate-fade-in-scale text-muted-foreground mt-2 text-sm [animation-duration:0.7s]">
              {t("gym-creation.hintAfterAdd")}
            </p>
          )}
        </form>
      </Form>

      {gyms.length > 0 && (
        <>
          <h3 className="animate-fade-in-scale mt-6 text-lg font-semibold [animation-duration:0.7s]">
            {t("gym-creation.subtitle")}
          </h3>
          <div className="mt-4 flex justify-center">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl">
              {gyms.map((_, index, arr) => {
                const reversedIndex = arr.length - 1 - index;
                const gymItem = arr[reversedIndex];
                return (
                  <Card
                    key={reversedIndex}
                    onClick={() => handleEdit(reversedIndex)}
                    className="animate-fade-in-scale hover:bg-muted w-full cursor-pointer p-4 transition-colors [animation-duration:0.7s]"
                  >
                    <div className="space-y-2">
                      <div className="truncate text-base font-bold">
                        {gymItem.name}
                      </div>
                      <div className="text-muted-foreground flex items-center gap-2 text-xs">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate">{gymItem.address}</span>
                      </div>
                      <div className="text-muted-foreground flex items-center gap-2 text-xs">
                        <Clock className="h-4 w-4" />
                        <span className="truncate">{gymItem.workHours}</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <Button
              type="submit"
              className="animate-fade-in-scale mt-6 w-full [animation-duration:0.7s]"
            >
              {t("gym-creation.apply")}
            </Button>
          </form>
        </>
      )}

      <Dialog
        open={editIndex !== null}
        onOpenChange={(open) => !open && setEditIndex(null)}
      >
        <DialogContent>
          <DialogTitle>{t("gym-creation.editTitle")}</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onEditSubmit)}
              className="space-y-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground mb-1 text-xs font-medium">
                      {t("gym-creation.form.name")}
                    </span>
                    <Input
                      {...field}
                      placeholder={t("gym-creation.form.namePlaceholder")}
                    />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground mb-1 text-xs font-medium">
                      {t("gym-creation.form.location")}
                    </span>
                    <Input
                      {...field}
                      placeholder={t("gym-creation.form.locationPlaceholder")}
                    />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground mb-1 text-xs font-medium">
                      {t("gym-creation.form.description")}
                    </span>
                    <Input
                      {...field}
                      placeholder={t(
                        "gym-creation.form.descriptionPlaceholder",
                      )}
                    />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="workHours"
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground mb-1 text-xs font-medium">
                      {t("gym-creation.form.workHours")}
                    </span>
                    <Input
                      {...field}
                      placeholder={t("gym-creation.form.workHoursPlaceholder")}
                    />
                  </div>
                )}
              />
              <div className="flex justify-between gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditIndex(null)}
                >
                  Cancel
                </Button>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => handleDelete(editIndex!)}
                  >
                    {t("gym-creation.delete")}
                  </Button>
                  <Button type="submit">{t("gym-creation.save")}</Button>
                </div>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
