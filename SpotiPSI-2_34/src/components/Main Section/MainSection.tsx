import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection"
import type { SongsArr } from "../../types/song";
import { useTheme } from '@mui/material/styles';

type PageOption = 'songs' | 'playlists' | 'favorites'

interface Props {
  currentPage: 'songs' | 'playlists' | 'favorites'
  updateCurrentPage: (current: PageOption) => void
}

const MainSection = ({ currentPage, updateCurrentPage, songs }: Props & SongsArr) => {
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