import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="los-santos-ticket">
      <h1>Hello World</h1>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App
