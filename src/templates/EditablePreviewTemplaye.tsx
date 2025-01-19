import Image from 'next/image';

import TextareaAutosize from '@mui/material/TextareaAutosize';

export const EditablePreviewTemplate = ({ monthsInNumber = 12 }) => {
  return (
    <div className="w-full h-full bg-[#FFF1EC] flex flex-col items-center p-3 pt-12">
      <div className="relative bg-white shadow-lg pt-8 pb-16 w-[340px] flex flex-col items-center">
        <div className="relative w-[300px] h-[330px] overflow-hidden">
          <Image
            src="/assets/images/test.png"
            alt="tes"
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center w-full">
          <h1 className="text-3xl font-playfair text-[#2F2D5A] font-bold ">
            Nosso {monthsInNumber}º mês
          </h1>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};
