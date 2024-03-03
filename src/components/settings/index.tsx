import React from "react";
import { buttonStyle } from "./Settings.css";
import { SettingDialog } from "./SettingDialog";

type SettingsT = {
  showRuby: boolean;
  shortcutKey: boolean;
  colorScheme: "auto" | "light" | "dark";
};

export const SettingsContext = React.createContext<
  SettingsT & {
    updateSettings: (settings: Partial<SettingsT>) => void;
  }
>({
  showRuby: false,
  shortcutKey: false,
  colorScheme: "auto",
  updateSettings: () => {},
});

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = React.useState<SettingsT>({
    showRuby: false,
    shortcutKey: true,
    colorScheme: "auto",
  });

  React.useEffect(() => {
    const savedSettings = localStorage.getItem("settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const updateSettings = (settings: Partial<SettingsT>) => {
    setSettings((prev) => {
      const newSettings = { ...prev, ...settings };
      localStorage.setItem("settings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  return (
    <SettingsContext.Provider value={{ ...settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const Settings = () => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        className={buttonStyle}
        onClick={() => {
          if (dialogRef.current) {
            dialogRef.current.showModal();
          }
        }}
      >
        表示設定
      </button>
      <SettingDialog
        ref={dialogRef}
        requestClose={() => {
          if (dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      />
    </>
  );
};
