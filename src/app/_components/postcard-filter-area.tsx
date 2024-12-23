"use client";

import { Combobox } from "@/components/ui/combobox";
import { useQueryString } from "@/hooks/use-query-string";
import { getComboboxFormatFromRawData } from "@/lib/format-data";
import { cn } from "@/lib/utils";
import { AllPostcard } from "@/type/postcard.type";
import { AllUser } from "@/type/user.type";
import SpinArrowButton from "./spin-arrow-button";
import { useRouter } from "next/navigation";
import Postcard from "./postcard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PostCardFilterAreaProps {
  users: AllUser[];
  postCards: AllPostcard[];
}

export function PostCardFilterArea({
  users,
  postCards,
}: PostCardFilterAreaProps) {
  const router = useRouter();
  const formattedComboboxUserData = getComboboxFormatFromRawData(users);

  const { searchParams, update } = useQueryString();
  const selectedSendTo = searchParams.get("sendTo");
  const selectedSendFrom = searchParams.get("sendFrom");

  const onClickSendTo = (slug: string) => {
    update([
      {
        name: "sendTo",
        value: slug,
      },
    ]);
  };
  const onClickSendFrom = (slug: string) => {
    update([
      {
        name: "sendFrom",
        value: slug,
      },
    ]);
  };

  return (
    <div className="px-4 flex flex-col gap-6 mt-10 items-center min-h-screen">
      <Button size={"lg"}>
        <Link href={"/submit"} className="font-extrabold text-lg">
          ✨ 엽서 제출하기
        </Link>
      </Button>

      <div className="md:max-w-[1200px] md:mx-auto max-pc:w-full flex-col sm:flex-row flex items-center  justify-between gap-4 sm:gap-10 px-4">
        <Combobox
          selectedData={{
            value: "",
            label: selectedSendTo ?? "",
            pikminImageUrl: "",
          }}
          data={formattedComboboxUserData}
          placeholder="받은 이"
          onChangeFormData={(data) => onClickSendTo(data.label)}
        />
        <Combobox
          selectedData={{
            value: "",
            label: selectedSendFrom ?? "",
            pikminImageUrl: "",
          }}
          data={formattedComboboxUserData}
          placeholder="보낸 이"
          onChangeFormData={(data) => onClickSendFrom(data.label)}
        />
        <SpinArrowButton onClickButton={() => router.replace("/")} />
      </div>
      <div
        className={cn(
          "columns-1 gap-2 lg:columns-3",
          postCards.length < 2 && "md:columns-1",
          postCards.length >= 2 && "md:columns-2"
        )}
      >
        {postCards.map((ele) => (
          <Postcard data={ele} key={ele.id} />
        ))}
      </div>
    </div>
  );
}
