import React from "react";
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
import { FilterCondition } from "./FilterCondition";
import { Filter } from "./components/filter";
import { Settings, SettingsProvider } from "./components/settings";

function App() {
  const [filterCondition, setFilterCondition] = React.useState<FilterCondition>(
    {
      query: "",
      choume: false,
      koaza: false,
      partOfTown: false,
      spreadAcrossTowns: false,
    },
  );
  return (
    <SettingsProvider>
      <Container>
        <HeaderArea>
          <Title>日本の郵便番号</Title>
          <HeaderControls>
            <Filter
              condition={filterCondition}
              onChangeCondition={setFilterCondition}
            />
            <Settings />
          </HeaderControls>
        </HeaderArea>
        <MainArea>
          <KenAllProvider filterCondition={filterCondition}>
            <Table />
          </KenAllProvider>
        </MainArea>
      </Container>
    </SettingsProvider>
  );
}

export default App;
