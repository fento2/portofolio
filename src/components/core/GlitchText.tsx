"use client";

import React, { ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function GlitchText({
  children,
  text,
  className = "",
  as: Tag = "span",
}: GlitchTextProps) {
  return (
    <Tag
      className={`glitch-text ${className}`}
      data-text={text}
    >
      {children}
    </Tag>
  );
}
