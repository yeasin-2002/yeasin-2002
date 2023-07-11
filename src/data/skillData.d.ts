import { IconType } from "react-icons";

export interface Item {
  title: string;
  icon: IconType;
  stage: "beginner" | "intermediate" | "advance";
  reference?: string;
}
export default interface skillDataTypes {
  FrontEnd: Item[];
  backEnd: Item[];
  tools: Item[];
}
