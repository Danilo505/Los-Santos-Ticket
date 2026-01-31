import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { AppRoutes } from "./routes/router"

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="los-santos-ticket">
      <AppRoutes />
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App
