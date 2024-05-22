import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { Region } from "@/interfaces/Region";

interface SelectFilterProps {
  onSelect: (value: string) => void;
}

const regions = [
  {
    value: Region.Africa,
  },
  {
    value: Region.Americas,
  },
  {
    value: Region.Asia,
  },
  {
    value: Region.Europe,
  },
  {
    value: Region.Oceania,
  },
];

const SelectFilter: React.FC<SelectFilterProps> = ({ onSelect }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSelection = (newValue: string) => {
    if (value === newValue) {
      setValue("");
      onSelect("");
      return;
    }
    onSelect(newValue);
    setValue(newValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild >
        <Button
          name="Region selection"
          aria-label="Region selection"
          variant="default"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] p-5 h-full justify-between bg-white dark:bg-[#2B3743] text-gray-500 dark:text-gray-300 shadow-md hover:bg-gray-50 m-0 "
        >
          {value
            ? regions.find((region) => region.value === value)?.value
            : "Filter by Region"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] h-full p-0 dark:bg-[#2B3743]">
        <Command className="dark:bg-[#2B3743]">
          <CommandList>
            <CommandInput placeholder="Search region..." />
            <CommandEmpty>No region found.</CommandEmpty>
            <CommandGroup>
              {regions.map((region) => (
                <CommandItem
                  key={region.value}
                  value={region.value}
                  aria-label={region.value}
                  onSelect={handleSelection}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 dark:bg-[#2B3743]",
                      value === region.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {region.value}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default SelectFilter;
