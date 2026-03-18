import useStyles from "./StylesPageContent";
import { Outlet } from "react-router-dom";


const PageContent = () => {
    const { classes } = useStyles()
    return (
        <div className={classes.PageContent}>
            <Outlet />
        </div>
    )
}

export default PageContent;