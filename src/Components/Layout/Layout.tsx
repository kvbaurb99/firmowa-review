import React from "react";

type Props = {
  isBlue?: boolean;
  children: React.ReactNode;
};

export default function Layout({ isBlue, children }: Props) {
  return (
    <div className={`${isBlue ? "bg-[#51A9F3]/5" : "bg-white"}`}>
      {children}
    </div>
  );
}
