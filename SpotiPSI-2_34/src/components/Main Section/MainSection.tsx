import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection"

type PageOption = 'songs' | 'playlists' | 'favorites'

interface Props {
  currentPage: 'songs' | 'playlists' | 'favorites'
  updateCurrentPage: (current: PageOption) => void
}

const MainSection = ({ currentPage, updateCurrentPage }: Props) => {
    const { classes } = useStyles()

    return (
        <div className={classes.MainSection}>
            <PageContent />
            <SideBar currentPage={currentPage} updateCurrentPage={updateCurrentPage}/>
        </div>
    );
}

export default MainSection;