import GlobalStyle from "./theme/globalStyles";
import { Container } from "./components"
import { ThemeProvider } from "styled-components" 
import theme from "./theme/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container> 
        Movie Explorer
      </Container>
    </ThemeProvider>
  );
}

export default App;
