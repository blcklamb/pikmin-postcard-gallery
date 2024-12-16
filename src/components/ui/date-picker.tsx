"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface DatePickerProps {
  initialDate?: Date;
  onChangeFormData: (data: Date) => void;
}

export function DatePicker({
  initialDate = new Date(),
  onChangeFormData,
}: DatePickerProps) {
  const [date, setDate] = useState<Date>(initialDate);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>날짜를 선택해 주세요</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate);
              onChangeFormData(selectedDate);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
