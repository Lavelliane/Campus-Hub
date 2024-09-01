import React from "react";
import { t } from "../../../../lib/translator";
import SignupForm from "./_components/SignupForm";
import { Link } from "@nextui-org/react";
import CampusHubLink from "@/components/Link";

function SignUpPage() {
  return (
    <div className="bg-white w-xl h-auto p-5 md:w-3xl md:p-12">
      <p className="font-bold text-md md:text-2xl">{t("signUp.heading")}</p>
      <p className="text-sm text-gray-500">{t("signUp.subheading")}</p>
      <SignupForm />
      <div className="w-full flex items-center justify-center mt-5">
        <p>{t("signUp.alreadyHaveAnAccount")}&nbsp;</p>
        <CampusHubLink content={t("signUp.redirectSignIn")} href="/auth/signin" />
      </div>
    </div>
  );
}

export default SignUpPage;
