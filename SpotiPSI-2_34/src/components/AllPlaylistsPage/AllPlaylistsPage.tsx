import type { PlaylistsArr } from "../../types/Types";
import useStyles from "./StylesAllPlaylistsPage";
import PlaylistTable from "../PlaylistTable/PlaylistTable";
import { Add } from "@mui/icons-material";
import { Button  } from "@mui/material";

const AllPlaylistsPage = ({  playlists }: PlaylistsArr) => {
    const { classes } = useStyles()
    return (
        <div className={classes.AllPlaylistsPage}>
            <div className={classes.PlaylistsHeader}>
                <h1>הפלייליסטים שלי</h1>
                <Button className={classes.Button} variant="outlined" color="secondary"><Add></Add>צור פלייליסט חדש</Button>
            </div>
            <PlaylistTable playlists={playlists}/>    
        </div>

    );
}

export default AllPlaylistsPage;