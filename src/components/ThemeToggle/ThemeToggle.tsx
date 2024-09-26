import * as S from "./styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

interface ThemeTogglerProps {
  themeToggler: () => void;
}

const ThemeToggle = ({ themeToggler }: ThemeTogglerProps) => {
  return (
    <S.Container>
      <label htmlFor="checkbox" className="switch">
        <input
          id="checkbox"
          type="checkbox"
          onClick={themeToggler}
          onChange={() => false}
          checked={window.localStorage.getItem("theme") === "light"}
        />
        <S.Icons className="slider round">
          {window.localStorage.getItem("theme") !== "light" ? (
            <>
              {/* <span style={{ marginLeft: '6.3px', height: '10px' }} >Dark</span> */}
              <Brightness2Icon />
            </>
          ) : (
            <>
              {/* <span style={{ marginLeft: '41px', height: '10px' }} >Light</span> */}
              <WbSunnyIcon />
            </>
          )}
        </S.Icons>
      </label>
    </S.Container>
  );
};

export default ThemeToggle;
