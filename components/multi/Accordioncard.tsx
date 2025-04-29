"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

type AccordionCardProps = {
  title: string;
  imageSrc: string;
  description: string;
};

const AccordionCard: React.FC<AccordionCardProps> = ({
  title,
  imageSrc,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-[330px] h-[470px] mx-auto overflow-hidden bg-[#F0F0F0] border border-gray-200 rounded-md shadow-sm">
      {isExpanded ? (
        <div className="flex flex-col">
          {/* Expanded View */}
          <div className="relative">
            <button
              onClick={toggleAccordion}
              aria-expanded={isExpanded}
              className="flex items-center justify-center p-3 w-full bg-black text-[#FFF6EC]"
            >
              <span className="font-medium text-base">Read Less</span>
              <Minus size={20} className="absolute right-3" />
            </button>
          </div>

          <div className="p-6  bg-[#F0F0F0] h-[420px] overflow-y-auto">
            <h2 className="mb-2.5 text-center font-bold uppercase">{title}</h2>
            <p className="text-base font-normal">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          {/* Collapsed View */}
          <div className="p-4 flex-grow flex flex-col justify-center items-center mt-2">
            <h2 className="text-center font-bold uppercase mb-2">{title}</h2>
            <div className="overflow-hidden rounded-sm w-80 h-80">
              <Image
                src={imageSrc}
                alt={`${title} image`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="relative">
            <button
              onClick={toggleAccordion}
              aria-expanded={isExpanded}
              className="flex items-center justify-center py-5 w-full bg-black text-[#FFF6EC]"
            >
              <span className="font-medium text-base">Read More</span>
              <Plus size={20} className="absolute right-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
