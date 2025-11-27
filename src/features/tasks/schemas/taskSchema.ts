import * as z from "zod";

export const taskSchema = z.object({
  text: z
    .string()
    .min(3, "Task must be at least 3 characters")
    .max(100, "Task must be less than 100 characters")
    .trim(),
});

export type TaskFormData = z.infer<typeof taskSchema>;
