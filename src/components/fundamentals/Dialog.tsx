import React from "react";
import { DeveloperSettingsContext } from "../../contexts";
import {
  backdropCSSVarStyle,
  dialogBodyStyle,
  dialogCloseButtonStyle,
  dialogHeaderStyle,
  dialogStyle,
  dialogTitleStyle,
} from "./Dialog.css";
import { IconFont } from "./IconFont";
import { SlClose } from "react-icons/sl";

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
        <h2 className={dialogTitleStyle} tabIndex={-1}>
          {dialogTitle}
        </h2>
        <button
          className={dialogCloseButtonStyle}
          onClick={() => onRequestClose?.()}
        >
          <IconFont Icon={SlClose} alt="閉じる" />
        </button>
      </div>
      <div className={dialogBodyStyle}>{children}</div>
    </dialog>
  );
};
