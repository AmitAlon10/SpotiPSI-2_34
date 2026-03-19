import { useTheme } from "@mui/material/styles";
import useStyles from "./StylesHeader";

const AppHeader = () => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    
    return (
        <div className={classes.Header}>
            <div className={classes.Right}>♪ SpotiPsi</div>
        </div>
    );
}

export default AppHeader;