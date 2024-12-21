import { cn } from "@/lib/utils";
import { RotateCw } from "lucide-react";
import { useState } from "react";

export default function SpinArrowButton({
  onClickButton,
}: {
  onClickButton: () => void;
}) {
  const [effect, setEffect] = useState(false);
  return (
    <button
      onClick={() => {
        onClickButton();
        setEffect(true);
      }}
    >
      <RotateCw
        className={cn(
          "hover:cursor-pointer",
          effect && "animate-[spin_1s_ease-in-out]"
        )}
        onAnimationEnd={() => setEffect(false)}
      />
    </button>
  );
}
