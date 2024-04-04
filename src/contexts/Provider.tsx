import { DeveloperSettingsProvider } from "./DeveloperSettingsContext";
import { KenAllProvider } from "./KenAll";
import { SettingsProvider } from "./SettingsContext";
import { UIProvider } from "./UIContext";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DeveloperSettingsProvider>
      <SettingsProvider>
        <UIProvider>
          <KenAllProvider>{children}</KenAllProvider>
        </UIProvider>
      </SettingsProvider>
    </DeveloperSettingsProvider>
  );
};
