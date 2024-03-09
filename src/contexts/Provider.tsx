import { KenAllProvider } from "./KenAllContext";
import { FilterConditionProvider } from "./FilterConditionContext";
import { QueryProvider } from "./QueryContext";
import { SettingsProvider } from "./SettingsContext";


export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <SettingsProvider>
        <FilterConditionProvider>
          <KenAllProvider>{children}</KenAllProvider>
        </FilterConditionProvider>
      </SettingsProvider>
    </QueryProvider>
  );
};