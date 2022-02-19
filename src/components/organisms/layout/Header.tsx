import { VFC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const Header: VFC<Props> = memo(() =>

<div style={{ height : "50px", backgroundColor: "teal" }} />);
