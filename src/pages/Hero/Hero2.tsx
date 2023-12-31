import Link from "next/link";
import React from "react";


import BlueStar_Btn from "@/components/Unique/Buttons/BlueStar/BlueStar_Btn";
import Space_Btn from "@/components/Unique/Buttons/Space_Btn/Space_Btn";
import { cn } from "@/lib/utils";
import { SubtitleFont, TitleFont } from "@/utils/GoogleFonts";

const Hero2 = () => {
  return (
        <main 
        id="home"
          className={cn("eachSections min-h-screen   flex items-center justify-center flex-col ", 
                            "xl:py-8 2xl:py-40  2xl:px-10 h-full py-32 ")}
        >                
            <div className="flex flex-col items-start mb-8 space-y-2 text-center md:text-left  ">
            <h1   
                 className={cn("TitleGradientText text-5xl font-extrabold ", TitleFont.className)}
                 >MD KAWSAR ISLAM YEASIN</h1>
              <p className={cn("text-md text-gray-200  text-center w-full", SubtitleFont.className)}              >
                A self-taught web application developer, who loves to build things for the web.
              </p>
            </div>
            <div className="flex  items-center gap-x-4 ">
              <Space_Btn
                title="Download CV" />
              <Link href={"/blogs"}>
                <BlueStar_Btn className="2xl:text-2xl xl:text-xl text-lg">Blogs</BlueStar_Btn>
              </Link>
            </div>
          </main>
    
  );
};
export default Hero2;
