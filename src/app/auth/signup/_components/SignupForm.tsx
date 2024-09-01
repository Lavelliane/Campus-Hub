"use client";

import React, { useEffect, useState } from "react";
import { SignupFormSchema } from "@/schema/signup";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupInputType } from "@/types/types";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { t } from "../../../../../lib/translator";
import {
  AcademicCapIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { passwordStrength } from "check-password-strength";
import PasswordStrength from "./PasswordStrength";

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<SignupInputType>({
    resolver: zodResolver(SignupFormSchema),
  });
  const [passStrength, setPassStrength] = useState(0);
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);

  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);

  const handleSignUp: SubmitHandler<SignupInputType> = async (data) => {
    console.log(data);
  };

  const dummyCourses = [
    {
        key: 1,
        label: "BS Computer Engineering"
    },
    {
        key: 2,
        label: "BS Information Technology"
    },
    {
        key: 3,
        label: "BS Computer Science"
    }, 
  ]

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="grid grid-cols-2 gap-3 place-self-stretch gap-3 mt-5"
    >
      <Input
        errorMessage={errors.firstName?.message}
        isInvalid={!!errors.firstName}
        label={t("signUp.labels.firstName")}
        startContent={<UserIcon className="w-4" />}
        {...register("firstName")}
      />
      <Input
        errorMessage={errors.lastName?.message}
        isInvalid={!!errors.lastName}
        label={t("signUp.labels.lastName")}
        startContent={<UserIcon className="w-4" />}
        {...register("lastName")}
      />
      <Select
        label={t("signUp.labels.course")}
        errorMessage={errors.course?.message}
        isInvalid={!!errors.course}
        startContent={<AcademicCapIcon className="w-4" />}
        {...register("course")}
      >
        {dummyCourses.map((course) => (
          <SelectItem key={course.key}>
            {course.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        errorMessage={errors.year?.message}
        isInvalid={!!errors.year}
        label={t("signUp.labels.year")}
        startContent={<AcademicCapIcon className="w-4" />}
        {...register("year")}
      />
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        label={t("signUp.labels.email")}
        className="col-span-2"
        startContent={<EnvelopeIcon className="w-4" />}
        {...register("email")}
      />
      <Input
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        className="col-span-2"
        label={t("signUp.labels.password")}
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
      <PasswordStrength passStrength={passStrength} />
      <Input
        errorMessage={errors.confirmPassword?.message}
        isInvalid={!!errors.confirmPassword}
        className="col-span-2"
        type={isVisiblePass ? "text" : "password"}
        label={t("signUp.labels.confirmPassword")}
        {...register("confirmPassword")}
        startContent={<KeyIcon className="w-4" />}
      />
      <Button
        type="submit"
        className="col-span-2 bg-black rounded-md text-white py-3 mt-3"
      >
        {t("signUp.submit")}
      </Button>
    </form>
  );
}

export default SignupForm;
