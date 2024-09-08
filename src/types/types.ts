import { SignupFormSchema } from "@/schema/signup";
import { SigninFormSchema } from "@/schema/signin";
import { z } from "zod";

export type SignupInputType = z.infer<typeof SignupFormSchema>;
export type SignInInputType = z.infer<typeof SigninFormSchema>;