import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection"

const MainSection = () => {
    const { classes } = useStyles()

    return (
        <div className={classes.MainSection}>
            <PageContent />
            <SideBar />
        </div>
    );
}

export default MainSection;