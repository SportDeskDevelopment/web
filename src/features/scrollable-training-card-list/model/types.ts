export type Training = {
  id: string;
  title: string;
  date: string;
  status: "pending" | "completed" | "cancelled";
  gym: string;
  group: string;
};
