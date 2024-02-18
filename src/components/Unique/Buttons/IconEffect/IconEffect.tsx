import React from "react";
import classes from "./IconEffects.module.css";

const defaultBg = `linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  )`;

const IconEffect = ({
  children,
  bgColor = defaultBg,
  ...rest
}: {
  children: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <>
      <button className={classes.Btn} {...rest}>
        <span className={classes.svgContainer}>{children}</span>
        <span className={classes.BG} style={{ background: bgColor }}></span>
      </button>
    </>
  );
};

export default IconEffect;
