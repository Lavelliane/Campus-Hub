import { SignupFormSchema } from "@/schema/signup";
import { z } from "zod";

export type SignupInputType = z.infer<typeof SignupFormSchema>;