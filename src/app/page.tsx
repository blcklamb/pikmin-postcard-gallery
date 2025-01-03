import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { postCard } from "@/module/postcard.service";
import { PostCardFilterArea } from "./_components/postcard-filter-area";
import { user } from "@/module/user.service";
import { shuffle } from "@/lib/shuffle";
// import { ResultSection } from "./_components/result-section";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const allPostcards = await postCard.getAllPostCard();
  const allUsers = await user.getAllUsers();

  const filteredPostcards = await postCard.getFilteredPostcards(
    searchParams.sendTo as string,
    searchParams.sendFrom as string
  );

  // const {
  //   totalSendFrom,
  //   totalPostcards,
  //   maximumSendFromCount,
  //   maximumSendToCount,
  // } = await postCard.getStatistic();

  return (
    <div className="flex flex-col gap-4">
      <div className="py-10  flex flex-col antialiased bg-gradient-to-r from-green-500 to-slate-500 items-center relative overflow-hidden">
        <div className="md:text-4xl text-2xl lg:text-6xl font-bold z-20 py-4 lg:py-8 bg-gradient-to-r from-[var(--pikmin-white)] to-p-gray inline-block text-transparent bg-clip-text">
          보내봐요 엽서의 숲
        </div>
        <div className="w-full h-full relative flex items-center">
          <InfiniteMovingCards
            items={shuffle(allPostcards).slice(0, 25)}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      {/* <ResultSection
        totalSendFrom={totalSendFrom}
        totalPostcards={totalPostcards}
        maximumSendFromCount={maximumSendFromCount}
        maximumSendToCount={maximumSendToCount}
      /> */}
      <PostCardFilterArea users={allUsers} postCards={filteredPostcards} />
    </div>
  );
}
