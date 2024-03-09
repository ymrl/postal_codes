import React from "react";

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