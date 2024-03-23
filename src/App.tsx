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
import { Help } from "./components/help";
import { Stack, VisuallyHidden } from "./components/fundamentals";

function App() {
  return (
    <Provider>
      <Container>
        <HeaderArea>
          <Title>日本の郵便番号</Title>
          <HeaderControls>
            <Filter />
            <Stack>
              <VisuallyHidden>
                <h2>ヘルプ・設定</h2>
              </VisuallyHidden>
              <Help />
              <Settings />
            </Stack>
          </HeaderControls>
        </HeaderArea>
        <MainArea>
          <VisuallyHidden>
            <h2>郵便番号一覧表</h2>
          </VisuallyHidden>
          <Table />
        </MainArea>
      </Container>
    </Provider>
  );
}

export default App;
