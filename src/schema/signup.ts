import { z } from "zod";

export const SignupFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(45, "First name must be less than 45 characters")
      .regex(new RegExp("^[a-zA-Z]+"), "No special characters allowed"),
    lastName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(45, "First name must be less than 45 characters")
      .regex(new RegExp("^[a-zA-Z]+"), "No special characters allowed"),
    course: z.string().min(6, "Course must be at least six characters"),
    year: z.coerce.number().min(1, "Year should be greater than 0").max(5, "Year should be equal or less than 5"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be less than 50 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be less than 50 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password does not match",
    path: ["confirmPassword"],
  });
