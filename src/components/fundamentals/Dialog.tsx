import React from "react";
import { DeveloperSettingsContext } from "../../contexts";
import {
  backdropCSSVarStyle,
  dialogBodyStyle,
  dialogHeaderStyle,
  dialogStyle,
  dialogTitleStyle,
} from "./Dialog.css";
import { IconFont } from "./IconFont";
import { SlClose } from "react-icons/sl";
import { Button, Stack } from ".";

type DialogProps = {
  children: React.ReactNode;
  dialogTitle: string;
  isOpen: boolean;
  onRequestClose?: () => void;
};

export const Dialog = ({
  children,
  dialogTitle,
  onRequestClose,
  isOpen,
}: DialogProps) => {
  const ref = React.useRef<HTMLDialogElement>(null);
  const { useCSSVarForBackdrop } = React.useContext(DeveloperSettingsContext);
  React.useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);
  React.useEffect(() => {
    if (onRequestClose && ref.current) {
      const dialog = ref.current;
      dialog.addEventListener("close", onRequestClose);
      return () => {
        dialog.removeEventListener("close", onRequestClose);
      };
    }
  }, [onRequestClose]);

  return (
    <dialog
      className={`${dialogStyle} ${useCSSVarForBackdrop ? backdropCSSVarStyle : ""}`}
      ref={ref}
    >
      <div className={dialogHeaderStyle}>
        <Stack
          size="container"
          justifyContent="spaceBetween"
          alignItems="center"
          direction="row"
          padding
        >
          <h2 className={dialogTitleStyle} tabIndex={-1}>
            {dialogTitle}
          </h2>
          <Button onClick={() => onRequestClose?.()} aria-label="閉じる">
            <IconFont Icon={SlClose} />
          </Button>
        </Stack>
      </div>
      <div className={dialogBodyStyle}>{children}</div>
    </dialog>
  );
};
