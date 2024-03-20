import React from "react";
import {
  containerStyle,
  containerStyleDark,
  containerStyleLight,
  headerAreaStyle,
  headerControlsStyle,
} from "./Container.css";
import { DeveloperSettingsContext, SettingsContext } from "./../contexts";

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
  <header className={headerAreaStyle}>{children}</header>
);

export const HeaderControls = ({ children }: { children: React.ReactNode }) => (
  <div className={headerControlsStyle}>{children}</div>
);

export const MainArea = ({ children }: { children: React.ReactNode }) => (
  <main>{children}</main>
);
