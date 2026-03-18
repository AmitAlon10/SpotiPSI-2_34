import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection";
import type { Props } from "../../types/Types";
import { useTheme } from '@mui/material/styles';


const MainSection = ({ currentPage, updateCurrentPage, songs }: Props) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    return (
        <div className={classes.MainSection}>
            <PageContent songs={songs}/>
            <SideBar currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
    );
}

export default MainSection;