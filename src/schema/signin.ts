import { dummyCourses } from "@/app/auth/signup/dummyData";
import { z } from "zod";

const courses = dummyCourses.map((d) => d.label)

export const SigninFormSchema = z
  .object({
    email: z
      .string()
      .email("Email is required")
      .email("Incorrect email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be less than 50 characters")
      .max(50, "Incorrect password"),
  });
