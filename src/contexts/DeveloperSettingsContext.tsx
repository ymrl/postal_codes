import React from "react";

type DeveloperSettingsT = {
  useCSSVarForBackdrop: boolean;
  useFlexForDialog: boolean;
  useDetailsPopupForMobileSafari: boolean;
  displayDetailsChildrenClosed: boolean;
};

export const DeveloperSettingsContext = React.createContext<
  DeveloperSettingsT & {
    updateDeveloperSettings: (settings: Partial<DeveloperSettingsT>) => void;
  }
>({
  useCSSVarForBackdrop: false,
  useFlexForDialog: false,
  useDetailsPopupForMobileSafari: false,
  displayDetailsChildrenClosed: false,
  updateDeveloperSettings: () => {},
});

export const DeveloperSettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = React.useState<DeveloperSettingsT>({
    useCSSVarForBackdrop: false,
    useFlexForDialog: false,
    useDetailsPopupForMobileSafari: false,
    displayDetailsChildrenClosed: false,
  });
  const updateDeveloperSettings = (settings: Partial<DeveloperSettingsT>) => {
    setSettings((prev) => ({ ...prev, ...settings }));
  };

  return (
    <DeveloperSettingsContext.Provider
      value={{ ...settings, updateDeveloperSettings }}
    >
      {children}
    </DeveloperSettingsContext.Provider>
  );
};
