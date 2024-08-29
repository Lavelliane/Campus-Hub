import { Button } from "@nextui-org/react";
import React from "react";
import { t } from "../../lib/translator";

function HelloButton() {
  return <Button>{t("greetingMessage")}</Button>;
}

export default HelloButton;
