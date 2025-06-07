import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit";

function ToggleSwitch({ className }) {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch-checkbox"
      />
      <span className="toggle-switch-circle"></span>
      <span className="toggle-switch-text toggle-switch-text_F">F</span>
      <span className="toggle-switch-text toggle-switch-text_C">C</span>
    </label>
  );
}

export default ToggleSwitch;
