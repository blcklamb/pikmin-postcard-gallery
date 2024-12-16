import { user } from "@/module/user.service";
import { PostcardSubmitArea } from "../_components/postcard-submit-area";

export default async function HomePage() {
  const allUsers = await user.getAllUsers();
  return (
    <div className="">
      <PostcardSubmitArea users={allUsers} />
    </div>
  );
}
