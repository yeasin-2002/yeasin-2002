import Revel from "@/components/Globals/Revel";
import IconEffect from "@/components/Unique/Buttons/IconEffect/IconEffect";
import contactList from "@/data/contactInfo/contactInfo";
import React, { HtmlHTMLAttributes } from "react";

interface connections extends HtmlHTMLAttributes<HTMLDivElement> {}

const ContactVia = ({ ...props }: connections) => {
  return (
    <div
      {...props}
      className="mt-3 flex items-center justify-center md:ml-3  md:justify-start"
    >
      <div className="my-2 flex items-center justify-start  gap-x-1 sm:gap-x-8 md:gap-x-4  lg:gap-x-8">
        {contactList.map((val, index) => {
          return (
            <a
              href={val.link}
              key={val.name + val.link}
              target="_blank"
              className={`transition-all hover:scale-110 xl:text-2xl `}
            >
              <IconEffect bgColor={val.bgGradient}>{val.components}</IconEffect>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default ContactVia;
