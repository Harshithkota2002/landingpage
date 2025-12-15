import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import PortfolioPage from "./pages/PortfolioPage";

export default function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#8b5cf6" },
          secondary: { main: "#22c55e" },
          background: {
            default: mode === "dark" ? "#070b14" : "#f7f8fc",
            paper: mode === "dark" ? "#0b1020" : "#ffffff",
          },
        },
        shape: { borderRadius: 20 },
        typography: {
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI"',
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioPage mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}
