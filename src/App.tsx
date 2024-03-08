import { KenAllProvider } from "./KenAllContext";
import { Table } from "./components/table";
import "./App.css";
import {
  Container,
  HeaderArea,
  HeaderControls,
  MainArea,
} from "./components/Container";
import { Title } from "./components/Title";
import { Filter } from "./components/filter";
import { Settings, SettingsProvider } from "./components/settings";
import { QueryProvider } from "./QueryProvider";
import { FilterConditionProvider } from "./FilterConditionProvider";

function App() {
  return (
    <QueryProvider>
      <SettingsProvider>
        <FilterConditionProvider>
          <KenAllProvider>
            <Container>
              <HeaderArea>
                <Title>日本の郵便番号</Title>
                <HeaderControls>
                  <Filter />
                  <Settings />
                </HeaderControls>
              </HeaderArea>
              <MainArea>
                <Table />
              </MainArea>
            </Container>
          </KenAllProvider>
        </FilterConditionProvider>
      </SettingsProvider>
    </QueryProvider>
  );
}

export default App;
