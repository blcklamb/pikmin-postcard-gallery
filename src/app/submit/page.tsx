import { user } from "@/module/user.service";
import { PostcardSubmitArea } from "../_components/postcard-submit-area";

export default async function SubmitPage() {
  const allUsers = await user.getAllUsers();
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <PostcardSubmitArea users={allUsers} />
    </div>
  );
}
