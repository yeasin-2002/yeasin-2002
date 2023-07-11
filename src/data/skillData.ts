import skillDataTypes from "./skillData.d";

// default icon
import AiFillAlipayCircle from "@/assets/icons/coding.svg";
//  icons
import html from "@/assets/icons/html.svg";
import css from "@/assets/icons/css.svg";
import js from "@/assets/icons/js.svg";
import tailwind from "@/assets/icons/tailwind.svg";
import react from "@/assets/icons/react.svg";
import next from "@/assets/icons/next.svg";
import redux from "@/assets/icons/redux.svg";
import node from "@/assets/icons/node.js.svg";
import git from "@/assets/icons/git.svg";
import github from "@/assets/icons/github.svg";
import vsCode from "@/assets/icons/vsCode.svg";
import figma from "@/assets/icons/figma.svg";
import typeScript from "@/assets/icons/typescript.svg";
import openProps from "@/assets/icons/openProps.svg";
import postcss from "@/assets/icons/PostCSS.svg";
import windiCSS from "@/assets/icons/windiCss.svg";
import jwt from "@/assets/icons/jwt.svg";
import vite from "@/assets/icons/vite.svg";
import express from "@/assets/icons/express.svg";

const skillData: skillDataTypes = {
  Language: [
    {
      title: "HTML",
      icon: html,
      stage: "advance",
    },
    {
      title: "CSS",
      icon: css,
      stage: "advance",
    },

    {
      title: "JavaScript / ECMA Script",
      icon: js,
      stage: "intermediate",
    },
    {
      title: "TypeScript",
      icon: typeScript,
      stage: "intermediate",
    },
  ],
  CssFramework: [
    {
      title: "TailwindCSS",
      icon: tailwind,
      stage: "advance",
    },
    {
      title: "PostCSS",
      icon: postcss,
      stage: "intermediate",
    },
    {
      title: "windicss",
      icon: windiCSS,
      stage: "advance",
    },
    {
      title: "open-props",
      icon: openProps,
      stage: "intermediate",
    },
  ],
  JSFramework: [
    {
      title: "React.js",
      icon: react,
      stage: "advance",
    },
    {
      title: "Redux",
      icon: redux,
      stage: "advance",
    },
    {
      title: "Redux Thunk, RTK Query",
      icon: redux,
      stage: "advance",
    },
    {
      title: "Next.js 13",
      icon: next,
      stage: "beginner",
    },
  ],
  backEnd: [
    {
      title: "Node.js",
      icon: node,
      stage: "beginner",
    },
    {
      title: "Express.js",
      icon: express,
      stage: "beginner",
    },
    {
      title: "JWT",
      icon: jwt,
      stage: "beginner",
    },
  ],
  tools: [
    {
      title: "Git ",
      icon: git,
      stage: "intermediate",
    },
    {
      title: "Github",
      icon: github,
      stage: "intermediate",
    },
    {
      title: "Vite",
      icon: vite,
      stage: "intermediate",
    },
    {
      title: "Figma",
      icon: figma,
      stage: "beginner",
    },
    {
      title: "VS Code",
      icon: vsCode,
      stage: "intermediate",
    },
  ],
};

export default skillData;
