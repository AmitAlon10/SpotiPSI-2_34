import { Favorite, Home, LibraryMusic } from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";
import useStyles from "./StylesSideBar";

const SideBar = () => {
    const { classes } = useStyles()
    const location = useLocation();
    let arr = [classes.LinkDisplay, classes.LinkDisplay, classes.LinkDisplay]

    switch (location.pathname) {
        case '/':
            arr[0] += " " + classes.PurpleBackground
            break
        case '/playlists':
            arr[1] += " " + classes.PurpleBackground
            break
        case '/favorites':
            arr[2] += " " + classes.PurpleBackground
            break
    }

    return (
        <div className={classes.SideBar}>
            <Link to='/' className={arr[0]}><Home />כל השירים</Link>
            <Link to='/playlists' className={arr[1]}><LibraryMusic />פלייליסטים</Link>
            <Link to='/favorites' className={arr[2]}><Favorite />מועדפים</Link>
        </div >
    )
}

export default SideBar;