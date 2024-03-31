import { DeveloperSettingsProvider } from "./DeveloperSettingsContext";
import { KenAllProvider } from "./KenAllContext";
import { FilterConditionProvider } from "./FilterConditionContext";
import { QueryProvider } from "./QueryContext";
import { SettingsProvider } from "./SettingsContext";
import { UIProvider } from "./UIContext";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <DeveloperSettingsProvider>
        <SettingsProvider>
          <UIProvider>
            <FilterConditionProvider>
              <KenAllProvider>{children}</KenAllProvider>
            </FilterConditionProvider>
          </UIProvider>
        </SettingsProvider>
      </DeveloperSettingsProvider>
    </QueryProvider>
  );
};
