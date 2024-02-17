"use client";

import Image from "next/image";
import ContactVia from "../ConnectVia";


//? my Images
import me9 from "@/assets/avatar/me/KIY.jpeg";
import me1 from "@/assets/avatar/me/clg.jpg";
import me8 from "@/assets/avatar/me/dev yeasin.jpeg";
import me2 from "@/assets/avatar/me/exam.jpg";
import me3 from "@/assets/avatar/me/kawsar.jpg";
import me4 from "@/assets/avatar/me/lackpar.jpeg";
import me6 from "@/assets/avatar/me/lastDayInClg.jpg";
import me5 from "@/assets/avatar/me/musium.jpg";
import me7 from "@/assets/avatar/me/sagufta.jpg";

import profilePic from "@/assets/avatar/me/rounded.png";



const Imageka = () => {
  


  return (
    <div className="md:order-last  flex flex-col justify-between md:justify-start w-full h-full ">
      <div className="flex items-center justify-center flex-1 w-full h-full">
        <div className=" rounded-lg  aspect-auto flex-1   mx-4 sm:mx-7 md:mx-4 w-full  overflow-hidden flex flex-col items-center ">
          <Image
            className="md:size-1/2 size-full"
            src={profilePic}
            alt="Yeasin"
            loading="lazy"
            width={1000}
            height={1000}
          />
        </div>

      </div>

      <ContactVia />
    </div>
  );
};

export default Imageka;
