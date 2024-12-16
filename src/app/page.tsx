import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SparklesCore } from "@/components/ui/sparkles";
import { postCard } from "@/module/postcard.service";

export default async function HomePage() {
  const allPostcards = await postCard.getAllPostCard();
  return (
    <div className="flex flex-col gap-4">
      <div className="py-10  flex flex-col antialiased bg-gradient-to-r from-green-500 to-slate-500 items-center relative overflow-hidden">
        <div className="md:text-4xl text-2xl lg:text-6xl font-bold z-20 py-4 lg:py-8 bg-gradient-to-r from-[var(--pikmin-white)] to-p-gray inline-block text-transparent bg-clip-text">
          보내봐요 엽서의 숲
        </div>
        <div className="w-full h-full relative flex items-center">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1000}
            className="w-full h-full absolute z-30"
            particleColor="#FFFFFF"
          />

          <InfiniteMovingCards
            items={allPostcards}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
