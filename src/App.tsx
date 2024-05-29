import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <BookStoreThemeProvider>
        <ThemeSwitcher />
        <Layout>
          <Home />
        </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;