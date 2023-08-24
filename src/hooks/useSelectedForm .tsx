/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { allForm } from "../app-config";
import { IForm } from "../app-config/types";

export const useSelectedForm = (id: string) => {
  const [form] = useState<IForm | Record<string, any>>(
    allForm?.find(({ formID }) => formID === id) ?? {}
  );

  return form;
};
