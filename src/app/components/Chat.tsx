import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface ChatProps {}
const Chat: FC<ChatProps> = ({}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        
        <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow:hidden">
          <div className="flex flex-col w-full h-full">
          <AccordionTrigger className="px-6 border-b border-zinc-300">hello</AccordionTrigger>

          </div>
        </div>

      </AccordionItem>
    </Accordion>
  );
};
export default Chat;
