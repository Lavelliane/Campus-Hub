import React from 'react'
import { t } from "../../../../lib/translator";
import SigninForm from './_components/SigninForm';
import { Link } from "@nextui-org/react";
import CampusHubLink from "@/components/Link";

function SignInPage() {
  return (
    <div className="bg-white max-w-48 h-auto p-5 md:max-w-2xl md:p-12">
      <p className="font-bold text-md md:text-2xl">{t("signIn.heading")}</p>
      <p className="text-sm text-gray-500">{t("signIn.subheading")}</p>
      <SigninForm/>
      <div className="w-full flex items-center justify-center mt-5">
        <p>{t("signIn.labels.dontHaveAnAccount")}&nbsp;</p>
        <CampusHubLink content={t("signIn.labels.redirectSignUp")} href="/auth/signup" />
      </div>
    </div>
  )
}

export default SignInPage;
