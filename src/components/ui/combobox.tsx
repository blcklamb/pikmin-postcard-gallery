"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Select } from "@/type/form";

interface ComboboxProps {
  data: Select[];
  placeholder: string;
  onChangeFormData: (data: Select) => void;
  selectedData?: Select;
}

export function Combobox({
  data,
  placeholder,
  onChangeFormData,
  selectedData,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  const getValueByLabel = (searchData: Select[], label: string) => {
    return searchData.find((element) => element?.label === label)?.value;
  };
  const getLabelByValue = (searchData: Select[], value: string) => {
    return searchData.find((element) => element?.value === value)?.label;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[240px] justify-between"
        >
          {selectedData?.label
            ? getValueByLabel(data, selectedData.label)
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>검색 결과가 없습니다</CommandEmpty>
            <CommandGroup>
              {data.map((element) => (
                <CommandItem
                  key={element?.label}
                  value={element?.value}
                  onSelect={(currentValue) => {
                    onChangeFormData(
                      currentValue === selectedData?.value
                        ? null
                        : {
                            value: currentValue,
                            label: getLabelByValue(data, currentValue) || "",
                          }
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedData?.label === element?.label
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {element?.value}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}