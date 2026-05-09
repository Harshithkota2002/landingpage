import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import PortfolioPage from "./pages/PortfolioPage";

export default function App() {
  const mode = "dark";

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: { main: "#3b82f6" },
          secondary: { main: "#38bdf8" },
          background: {
            default: "#000000",
            paper: "#070b14",
          },
          text: {
            primary: "#ffffff",
            secondary: "rgba(255,255,255,0.72)",
          },
        },
        shape: { borderRadius: 16 },
        typography: {
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI"',
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioPage mode={mode} />
    </ThemeProvider>
  );
}
