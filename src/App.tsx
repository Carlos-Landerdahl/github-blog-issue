import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { Homepage } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Homepage />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
