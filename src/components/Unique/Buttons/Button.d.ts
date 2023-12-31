interface UniqueBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface OnlyChild extends UniqueBtn {
  children: React.ReactNode;
}
interface OnlyText extends UniqueBtn {
  text: string;
}
interface ChildAndTxt extends UniqueBtn {
  children: React.ReactNode;
  text: string;
}

// uncommon
interface BlueStar extends UniqueBtn {
  children: React.ReactNode;
}
interface KindCougar extends UniqueBtn {
  children: React.ReactNode;
  title: string;
}
interface SpaceBtn extends UniqueBtn {
  title: string;
}
interface OverText extends UniqueBtn {
  text: string;
}
interface FoldTextBtn extends UniqueBtn {
  children: React.ReactNode;
}
