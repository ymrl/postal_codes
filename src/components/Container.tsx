import React from "react";
import {
  containerStyle,
  containerStyleDark,
  containerStyleLight,
  headerAreaStyle,
} from "./Container.css";
import { DeveloperSettingsContext, SettingsContext } from "./../contexts";
import { Stack } from "./fundamentals";

export const Container = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme } = React.useContext(SettingsContext);
  const { displayDetailsChildrenClosed } = React.useContext(
    DeveloperSettingsContext,
  );

  return (
    <div
      className={`${containerStyle} ${
        colorScheme === "light"
          ? containerStyleLight
          : colorScheme === "dark"
            ? containerStyleDark
            : ""
      } ${
        displayDetailsChildrenClosed
          ? `${containerStyle}--details-children-closed`
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export const HeaderArea = ({ children }: { children: React.ReactNode }) => (
  <header className={headerAreaStyle}>
    <Stack
      size="block"
      justifyContent="start"
      alignItems="center"
      direction="row"
      padding
    >
      {children}
    </Stack>
  </header>
);

export const MainArea = ({ children }: { children: React.ReactNode }) => (
  <main>{children}</main>
);
