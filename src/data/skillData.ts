import skillDataTypes from "./skillData.d";

//! front end
import Bootstrap from "@/assets/icons/Bootstrap.svg";
import postcss from "@/assets/icons/PostCSS.svg";
import SASS from "@/assets/icons/SASS.svg";
import css from "@/assets/icons/css.svg";
import html from "@/assets/icons/html.svg";
import js from "@/assets/icons/js.svg";
import next from "@/assets/icons/next2svg.svg";
import openProps from "@/assets/icons/openProps.svg";
import react from "@/assets/icons/react.svg";
import redux from "@/assets/icons/redux.svg";
import rtk from "@/assets/icons/rtk.png";
import styledComponents from "@/assets/icons/styled-components.jpg";
import tailwind from "@/assets/icons/tailwind.svg";
import tanStackQuery from "@/assets/icons/tankstackQuery.svg";
import typeScript from "@/assets/icons/typescript.svg";
import unoCSS from "@/assets/icons/unoCSS.svg";

//! back ends
import MongoDB from "@/assets/icons/Mongo.png";
import node from "@/assets/icons/Nodejs.svg";
import express from "@/assets/icons/express.svg";
import mongoose from "@/assets/icons/mongoose.png";
import MySql from "@/assets/icons/mySQL.svg";
import sql from "@/assets/icons/sql.svg";

//! tools
import canva from "@/assets/icons/canva.svg";
import figma from "@/assets/icons/figma.svg";
import git from "@/assets/icons/git.svg";
import gitAndGithub from "@/assets/icons/gitAndGithubsvg.svg";
import github from "@/assets/icons/github.svg";
import notion from "@/assets/icons/notion2svg.svg";
import vite from "@/assets/icons/vite.svg";
import vsCode from "@/assets/icons/vsCode.svg";

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
      title: "JavaScript",
      icon: js,
      stage: "intermediate",
    },
    {
      title: "TypeScript",
      icon: typeScript,
      stage: "intermediate",
    },
    {
      title: "SQL",
      icon: sql,
      stage: "advance",
    },
  ],
  CssFramework: [
    // {
    //   title: "TailwindCSS",
    //   icon: tailwind,
    //   stage: "advance",
    //   reference: "https://tailwindcss.com/",
    // },
    // {
    //   title: "Bootstrap",
    //   icon: Bootstrap,
    //   stage: "intermediate",
    // },
    // {
    //   title: "SASS",
    //   icon: SASS,
    //   stage: "intermediate",
    // },
    // {
    //   title: "PostCSS",
    //   icon: postcss,
    //   stage: "intermediate",
    // },
    // {
    //   title: "Open-Props",
    //   icon: openProps,
    //   stage: "intermediate",
    // },
    // {
    //   title: "Styled-Components",
    //   icon: styledComponents,
    //   stage: "intermediate",
    // },
  ],
  JSFramework: [
    {
      title: "TailwindCSS",
      icon: tailwind,
      stage: "advance",
    },
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
      title: "Thunk, RTK Query",
      icon: rtk,
      stage: "advance",
    },
    {
      title: "TanStack Query",
      icon: tanStackQuery,
      stage: "beginner",
    },
    {
      title: "Next.js 13+",
      icon: next,
      stage: "beginner",
    },
  ],
  BackEnd: [
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
      title: "MongoDB",
      icon: MongoDB,
      stage: "beginner",
    },

    {
      title: "Mongoose",
      icon: mongoose,
      stage: "beginner",
    },
    {
      title: "MySQL",
      icon: MySql,
      stage: "beginner",
    },
  ],
  Tools: [
    // {
    //   title: "Git ",
    //   icon: git,
    //   stage: "intermediate",
    // },
    {
      title: "Git & Github",
      icon: gitAndGithub,
      stage: "intermediate",
    },

    {
      title: "Figma",
      icon: figma,
      stage: "intermediate",
    },
    {
      title: "VS Code",
      icon: vsCode,
      stage: "advance",
    },
    {
      title: "Notion",
      icon: notion,
      stage: "intermediate",
    },
    {
      title: "Vite",
      icon: vite,
      stage: "advance",
    },
    {
      title: "canva",
      icon: canva,
      stage: "beginner",
    },
  ],
};

export default skillData;
