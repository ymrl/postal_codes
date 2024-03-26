import React from "react";
import { titleStyle } from "./Title.css";
import { NumberKun } from "./NumberKun";
import { ResponsiveText, Stack } from "./fundamentals";

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className={titleStyle}>
    <Stack size="inline" alignItems="center">
      <NumberKun />
      <ResponsiveText hideText="small">{children}</ResponsiveText>
    </Stack>
  </h1>
);
