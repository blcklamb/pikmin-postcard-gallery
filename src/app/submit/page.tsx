import { user } from "@/module/user.service";
import { PostcardSubmitArea } from "../_components/postcard-submit-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function SubmitPage() {
  const allUsers = await user.getAllUsers();
  return (
    <div className="flex flex-col items-center gap-2 justify-center h-screen ">
      <Link href={"/"} className="text-lg font-bold">
        <Button>홈으로</Button>
      </Link>
      <PostcardSubmitArea users={allUsers} />
    </div>
  );
}
