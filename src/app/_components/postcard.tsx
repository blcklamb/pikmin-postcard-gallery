import { cn } from "@/lib/utils";
import { AllPostcard } from "@/type/postcard.type";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

interface PostcardProps {
  data: AllPostcard;
}

export default function Postcard({ data }: PostcardProps) {
  const randomNumber = Math.round(Math.random() * 10);

  return (
    <div
      className={cn(
        "break-inside-avoid-column p-6 rounded-lg bg-p-orange mb-2 flex flex-col gap-3",
        randomNumber % 3 === 1 && "bg-p-green",
        randomNumber % 3 === 2 && "bg-p-black"
      )}
    >
      <Image
        alt="postcard-image"
        src={data.imageUrl || ""}
        width={400}
        height={400}
        className="hover:scale-105 transition-all ease-linear"
      />
      <div className="flex gap-1 items-center text-p-white font-bold">
        <div>
          {data.sendFrom.nickname}({data.sendFrom.name})
        </div>
        <ArrowRightIcon className="size-4" />
        <div>
          {data.sendTo.nickname}({data.sendTo.name})
        </div>
      </div>
    </div>
  );
}
