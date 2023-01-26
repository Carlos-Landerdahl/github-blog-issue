import { ThemeProvider } from 'styled-components'
import { SearchIssue } from './pages/Home/SearchIssue'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchIssue />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
