"use client";

import React, { useState } from "react";
import { SigninFormSchema } from "@/schema/signin";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInInputType } from "@/types/types";
import { Button, Input } from "@nextui-org/react";
import { t } from "../../../../../lib/translator";
import { 
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

function SigninForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<SignInInputType>({
    resolver: zodResolver(SigninFormSchema),
  });

  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);

  const handleSignIn: SubmitHandler<SignInInputType> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className="grid grid-cols-2 gap-3 place-self-stretch mt-5"
    >
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        label={t("signIn.labels.email")}
        className="col-span-2"
        startContent={<EnvelopeIcon className="w-4" />}
        {...register("email")}
      />
      <Input
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        className="col-span-2"
        label={t("signIn.labels.password")}
        {...register("password")}
        type={isVisiblePass ? "text" : "password"}
        endContent={
          isVisiblePass ? (
            <EyeIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisiblePass}
            />
          ) : (
            <EyeSlashIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisiblePass}
            />
          )
        }
        startContent={<KeyIcon className="w-4" />}
      />

      <Button
        type="submit"
        className="col-span-2 bg-black rounded-md text-white py-3 mt-3"
      >
        {t("signIn.submit")}
      </Button>
    </form>
  );
}

export default SigninForm;
