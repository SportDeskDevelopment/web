import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { trainerApi } from "@/shared/api/trainer";
import { userApi } from "@/shared/api/user";

const gymSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  description: z.string().min(1),
  workHours: z.string().min(1),
});

type Gym = z.infer<typeof gymSchema>;

export const useCreateGym = () => {
  const { data: user, isLoading } = userApi.useGetCurrentUserSuspense();

  const { mutate: createGym } = trainerApi.useCreateGyms();

  const form = useForm<{
    gyms: Gym[];
    name: string;
    address: string;
    description: string;
    workHours: string;
  }>({
    resolver: zodResolver(
      z.object({
        gyms: z.array(gymSchema),
        name: z.string().min(1),
        address: z.string().min(1),
        description: z.string().min(1),
        workHours: z.string().min(1),
      }),
    ),
    defaultValues: {
      gyms: [],
      name: "",
      address: "",
      description: "",
      workHours: "",
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: "gyms",
  });

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const onGymAdd = (values: {
    name: string;
    address: string;
    description: string;
    workHours: string;
  }) => {
    append(values);
    form.reset({
      ...form.getValues(),
      name: "",
      address: "",
      description: "",
      workHours: "",
    });
  };

  const onEditSubmit = (values: {
    name: string;
    address: string;
    description: string;
    workHours: string;
  }) => {
    if (editIndex === null) return;
    update(editIndex, values);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    remove(index);
    setEditIndex(null);
  };

  const handleEdit = (index: number) => {
    const gym = fields[index];
    form.setValue("name", gym.name);
    form.setValue("address", gym.address);
    form.setValue("description", gym.description);
    form.setValue("workHours", gym.workHours);
    setEditIndex(index);
  };

  const onSubmit = () => {
    const gyms = form.getValues("gyms");

    createGym({
      data: {
        trainerUserId: user?.id,
        gyms: gyms.map((g) => ({
          name: g.name,
          address: g.address,
          workHours: g.workHours || undefined,
        })),
      },
    });
  };

  return {
    gyms: fields,
    form,
    editIndex,
    setEditIndex,
    onGymAdd,
    handleEdit,
    handleDelete,
    onEditSubmit,
    onSubmit,
  };
};
