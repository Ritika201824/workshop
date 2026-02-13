import "@fontsource/inter/index.css";
import "./styles/global.css";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import { CommandPaletteProvider } from "./context/CommandPaletteContext";
import { AppRouter } from "./routes/AppRouter";

export function App() {
  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
      </CommandPaletteProvider>
    </ThemeProvider>
  );
}
