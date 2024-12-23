import { user } from "@/module/user.service";

export default async function PostcardKingPage() {
  const data = await user.getMaximumSendFrom();
  console.log(data);
  return (
    <div>
      <div>가장 많이 엽서를 보낸 사람은</div>
      <div>mmmm입니다.</div>
      <div>mmm은 nnn에게 가장 많이 엽서를 보냈어요</div>
    </div>
  );
}
