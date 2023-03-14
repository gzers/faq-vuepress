import {themeType} from "@/types/theme";
import themeConfig from "../../config/theme";

export default function () {
    const themeConfigDefault: themeType = {
        primaryColor: '#3e8daf'
    }
    const themeConfigData = themeConfig || themeConfigDefault
    return themeConfigData
}