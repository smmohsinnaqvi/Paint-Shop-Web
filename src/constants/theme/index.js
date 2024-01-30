import { createTheme } from "@mui/material";
import { themeTypography } from "./typography";
import { themeButtons } from "./Button";
import textFieldTheme from "./TextFiled";
import drawerTheme from './drawer'
import colorTheme from "./color";


const theme=createTheme(
  themeTypography,
  themeButtons,
  textFieldTheme,
  drawerTheme,
colorTheme,
  
)
export default theme;
