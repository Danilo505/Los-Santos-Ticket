import { ThemeProvider } from "./components/theme-provider"
import { AppRoutes } from "./routes/router"

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="los-santos-ticket">
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
