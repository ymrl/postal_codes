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
import { Settings } from "./components/settings";
import { Provider } from "./contexts";

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
