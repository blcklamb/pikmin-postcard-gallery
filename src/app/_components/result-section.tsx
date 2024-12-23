interface ResultSectionProps {
  totalSendFrom: number;
  totalPostcards: number;
  maximumSendFromCount: number;
  maximumSendToCount: number;
}

export function ResultSection({
  totalSendFrom,
  totalPostcards,
  maximumSendFromCount,
  maximumSendToCount,
}: ResultSectionProps) {
  return (
    <div className="text-center flex flex-col gap-2 py-4">
      <div className="text-2xl">12월 7일부터 12월 23일간 </div>
      <div className="text-3xl font-semibold">
        {totalSendFrom}명이 {totalPostcards}개의 엽서를 보냈어요.
      </div>
      <div className="text-3xl font-semibold">
        가장 많이 엽서를 보낸 사람은 {maximumSendFromCount}개의 엽서를 보냈어요.
      </div>
      <div className="text-3xl font-semibold">
        가장 많이 엽서를 받은 사람은 {maximumSendToCount}개의 엽서를 받았어요.
      </div>
    </div>
  );
}
