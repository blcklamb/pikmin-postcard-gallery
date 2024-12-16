"use client";

import { useEffect, useState } from "react";
import { ClipboardInput } from "./clipboard-input";
import { Combobox } from "@/components/ui/combobox";
import { DatePicker } from "@/components/ui/date-picker";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Form, Select } from "@/type/form";

const defaultFormValue: Form = {
  sendTo: null,
  sendFrom: null,
  postCardImageUrl: "",
  sendAt: new Date(),
};

export function PostcardSubmitArea() {
  const [formData, setFormData] = useState<Form>(defaultFormValue);

  const onChange = (field: keyof Form) => (data: Select | string | Date) => {
    setFormData((prev) => ({
      ...prev,
      [field]: data,
    }));
  };
  useEffect(() => {
    console.log("🍄 formData", formData);
  }, [formData]);

  return (
    <CardSpotlight className="flex flex-col gap-4  py-4 rounded-lg mx-4 max-w-[400px]">
      <form className="z-10 flex flex-col gap-4 items-center">
        <Combobox
          data={[{ value: "sample", label: "label-sample" }]}
          placeholder="받은 이"
          onChangeFormData={onChange("sendTo")}
          selectedData={formData.sendTo}
        />
        <Combobox
          data={[
            { value: "sample", label: "label-sample" },
            { value: "sample1", label: "label-sample1" },
          ]}
          placeholder="보낸 이"
          onChangeFormData={onChange("sendFrom")}
          selectedData={formData.sendFrom}
        />
        <DatePicker
          initialDate={formData.sendAt}
          onChangeFormData={onChange("sendAt")}
        />
        <ClipboardInput onChangeFormData={onChange("postCardImageUrl")} />
        <Button>엽서 인증하기</Button>
      </form>
    </CardSpotlight>
  );
}
