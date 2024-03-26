import { Table } from "./components/table";
import "./App.css";
import { Container, HeaderArea, MainArea } from "./components/Container";
import { Title } from "./components/Title";
import { Filter } from "./components/filter";
import { Provider } from "./contexts";
import { Stack, VisuallyHidden } from "./components/fundamentals";
import { HelpAndSettings } from "./components/HelpAndSettings";

function App() {
  return (
    <Provider>
      <Container>
        <HeaderArea>
          <Title>日本の郵便番号</Title>
          <Stack
            size="block"
            justifyContent="spaceBetween"
            alignItems="center"
            direction="row"
            grow
          >
            <Filter />
            <HelpAndSettings />
          </Stack>
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
