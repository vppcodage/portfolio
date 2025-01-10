import React from "react";
import { BlockDecoratorProps } from "sanity";

export const SectionHeading = (props: BlockDecoratorProps) => {
  return <h2 style={{ background: "gray" }}>{props.children}</h2>;
};
