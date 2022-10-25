import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { InformationsProvaider } from "./contexts/InformationAPIContext"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InformationsProvaider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </InformationsProvaider>
    </ThemeProvider>
  )
}

