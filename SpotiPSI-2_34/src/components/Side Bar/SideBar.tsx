import useStyles from "./StylesSideBar";
import { LibraryMusic, Home, Favorite } from '@mui/icons-material'
import type { SideBarProps } from "../../types/Types";


const SideBar = ({ currentPage, updateCurrentPage }: SideBarProps) => {
    const { classes } = useStyles()
    let arr = [classes.OptionBlack, classes.OptionBlack, classes.OptionBlack]

    switch (currentPage) {
        case 'songs':
            arr[0] = classes.OptionPurple
            break
        case 'playlists':
            arr[1] = classes.OptionPurple
            break
        case 'favorites':
            arr[2] = classes.OptionPurple
            break
    }

    return (
        <div className={classes.SideBar}>
            <div className={arr[0]} onClick={() => updateCurrentPage('songs')}><Home></Home>כל השירים</div>
            <div className={arr[1]} onClick={() => updateCurrentPage('playlists')}><LibraryMusic></LibraryMusic>פלייליסטים</div>
            <div className={arr[2]} onClick={() => updateCurrentPage('favorites')}><Favorite></Favorite>מועדפים</div>
        </div>
    )
}

export default SideBar;