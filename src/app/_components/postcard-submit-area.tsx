"use client";

import { useMemo } from "react";
import { ClipboardInput } from "./clipboard-input";
import { Combobox } from "@/components/ui/combobox";
import { DatePicker } from "@/components/ui/date-picker";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { formSchema, UserSelect, FormSchemaType } from "@/type/form";
import { AllUser } from "@/type/user.type";
import { submitPostCard } from "@/module/postcard.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface PostcardSumbitAreaProps {
  users: AllUser[];
}

export function PostcardSubmitArea({ users }: PostcardSumbitAreaProps) {
  const { toast } = useToast();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const getComboboxFormatFromRawData = (usersData: AllUser[]): UserSelect[] => {
    return usersData.map((userData) => ({
      value: userData.nickname || "",
      label: userData.name || "",
      pikminImageUrl: userData.pikmin.imageUrl,
    }));
  };

  const formattedComboboxUserData = useMemo(() => {
    return getComboboxFormatFromRawData(users);
  }, [users]);

  const onSubmit = (values: FormSchemaType) => {
    submitPostCard(values);
    toast({
      title: "인증 완료!",
    });
    form.reset();
  };

  return (
    <CardSpotlight className="flex flex-col gap-4  py-4 rounded-lg mx-4 max-w-[400px]">
      <Form {...form}>
        <form
          className="flex flex-col gap-4 items-center z-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="sendTo"
            render={({ field }) => (
              <Combobox
                data={formattedComboboxUserData}
                placeholder="받은 이"
                onChangeFormData={field.onChange}
                selectedData={field.value}
              />
            )}
          />
          <FormField
            control={form.control}
            name="sendFrom"
            render={({ field }) => (
              <Combobox
                data={formattedComboboxUserData}
                placeholder="보낸 이"
                onChangeFormData={field.onChange}
                selectedData={field.value}
              />
            )}
          />
          <FormField
            control={form.control}
            name="sendAt"
            render={({ field }) => (
              <DatePicker
                selectedData={field.value}
                onChangeFormData={field.onChange}
              />
            )}
          />
          <FormField
            control={form.control}
            name="postCardImageUrl"
            render={({ field }) => (
              <ClipboardInput
                uploadedImageUrl={field.value}
                onChangeFormData={field.onChange}
              />
            )}
          />
          <Button type="submit">엽서 인증하기</Button>
        </form>
      </Form>
    </CardSpotlight>
  );
}
