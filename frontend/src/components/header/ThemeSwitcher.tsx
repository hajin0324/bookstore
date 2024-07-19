import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";
import { CiDark, CiLight } from "react-icons/ci";
import styled from "styled-components";

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitcherStyle onClick={toggleTheme}>
      {
        themeName === "light" ? <CiLight /> : <CiDark />
      }
      {themeName}
    </ThemeSwitcherStyle>
  );
};

const ThemeSwitcherStyle = styled.button`
  font-size: 1rem;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
`;

export default ThemeSwitcher;