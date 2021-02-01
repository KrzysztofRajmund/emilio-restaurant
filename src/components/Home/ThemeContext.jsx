import React from "react";
//json
import tileData from "../../tileData";

const themes = {
    data: tileData.items
  }
const ThemeContext = React.createContext(themes.data)

export default ThemeContext;
