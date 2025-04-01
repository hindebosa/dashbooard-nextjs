import { z } from "zod";

export const OnboardingSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  currentSalary: z.string().regex(/^\d+$/, "Current salary must be a number"),
  preferredSalary: z
    .string()
    .regex(/^\d+$/, "Preferred salary must be a number"),
});

export type OnboardingSchemaType = z.infer<typeof OnboardingSchema>;
