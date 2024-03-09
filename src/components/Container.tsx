import React from "react";
import {
  containerStyle,
  containerStyleDark,
  containerStyleLight,
  headerAreaStyle,
  headerControlsStyle,
  mainAreaStyle,
} from "./Container.css";
import { SettingsContext } from "./../contexts";

export const Container = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme } = React.useContext(SettingsContext);

  return (
    <div
      className={`${containerStyle} ${
        colorScheme === "light"
          ? containerStyleLight
          : colorScheme === "dark"
            ? containerStyleDark
            : ""
      }`}
    >
      {children}
    </div>
  );
};

export const HeaderArea = ({ children }: { children: React.ReactNode }) => (
  <header className={headerAreaStyle}>{children}</header>
);

export const HeaderControls = ({ children }: { children: React.ReactNode }) => (
  <div className={headerControlsStyle}>{children}</div>
);

export const MainArea = ({ children }: { children: React.ReactNode }) => (
  <main className={mainAreaStyle}>{children}</main>
);
