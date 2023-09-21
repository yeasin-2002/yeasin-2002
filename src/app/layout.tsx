import { Metadata } from "next";

import Wrapper from "@/components/Globals/Wrapper";

// styles
import "./globals.css";
import "../styles/keyframe.css";

export const metadata: Metadata = {
  title: "Md Kawsar Islam Yeasin",
  description:
    "Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer, and freelancer from Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
