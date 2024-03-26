import React from "react";
import { SlClose, SlOptions } from "react-icons/sl";
import { Button, IconFont, Stack, VisuallyHidden } from "./fundamentals";
import { Help } from "./help";
import { Settings } from "./settings";
import {
  closeButtonStyle,
  helpAndSettingsStyle,
  menuButtonStyle,
  menuStyle,
} from "./HelpAndSettings.css";
import { DeveloperSettings } from "./developerSettings";

export const HelpAndSettings = () => {
  const [transitionState, setTransitionState] = React.useState<
    "closed" | "openIn" | "openOut" | "open" | "closedIn" | "closedOut"
  >("closed");
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  React.useLayoutEffect(() => {
    if (transitionState === "openIn") {
      if (menuRef.current) {
        const elm = menuRef.current;
        requestAnimationFrame(() => {
          setTransitionState("openOut");
          const listener = () => {
            setTransitionState("open");
            elm.removeEventListener("transitionend", listener);
            (elm.querySelector("button,a") as HTMLElement | null)?.focus();
          };
          elm.addEventListener("transitionend", listener);
        });
      } else {
        setTransitionState("open");
      }
    } else if (transitionState === "closedIn") {
      console.log("closedIn", menuRef.current);
      if (menuRef.current) {
        const elm = menuRef.current;
        const menuButton = menuButtonRef.current;
        requestAnimationFrame(() => {
          setTransitionState("closedOut");
          const listener = () => {
            setTransitionState("closed");
            elm.removeEventListener("transitionend", listener);
            menuButton?.focus();
          };
          elm.addEventListener("transitionend", listener);
        });
      } else {
        setTransitionState("closed");
      }
    }
  }, [transitionState]);
  return (
    <div className={helpAndSettingsStyle}>
      <VisuallyHidden>
        <h2>ヘルプ・設定</h2>
      </VisuallyHidden>
      <div className={menuButtonStyle}>
        <Button
          onClick={() => {
            setTransitionState("openIn");
          }}
          aria-expanded={
            transitionState === "open" ||
            transitionState === "openIn" ||
            transitionState === "openOut"
          }
          aria-label="ヘルプ・設定メニューを開く"
          ref={menuButtonRef}
        >
          <IconFont Icon={SlOptions} />
        </Button>
      </div>
      <div className={menuStyle[transitionState]} ref={menuRef}>
        <Stack
          size="block"
          direction="row"
          alignItems="center"
          justifyContent="spaceBetween"
        >
          <Stack size="inline" alignItems="center" justifyContent="end">
            <Help />
            <Settings />
            <DeveloperSettings />
          </Stack>
          <div className={closeButtonStyle}>
            <Button
              onClick={() => {
                setTransitionState("closedIn");
              }}
              aria-label="ヘルプ・設定メニューを閉じる"
              ref={closeButtonRef}
            >
              <IconFont Icon={SlClose} />
            </Button>
          </div>
        </Stack>
      </div>
    </div>
  );
};
