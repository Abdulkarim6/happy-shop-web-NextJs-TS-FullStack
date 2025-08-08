
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

// const MobileView = ({ onClose }: Props) => {
const MobileView = () => {
  return (
    <div className="mr-0 p-2 space-y-4 bg-blue-300">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-between group">
            <span>Menu Item 1</span>
            <span className="ml-2">
              <Plus className="h-5 w-5 transition-all duration-200 group-data-[state=open]:hidden" />
              <Minus className="h-5 w-5 transition-all duration-200 hidden group-data-[state=open]:inline" />
            </span>
          </AccordionTrigger>
          <AccordionContent>This is the content for item 1.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileView;
