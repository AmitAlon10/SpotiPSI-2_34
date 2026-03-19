import { Add } from "@mui/icons-material";
import { Button } from '@mui/material';
import { useState } from "react";
import type { AllPlaylistsPageType, SetPlaylist } from "../../types/Types";
import DialogCreatePlaylist from "../DialogCreatePlaylist/DialogCreatePlaylist";
import PlaylistTable from "../PlaylistTable/PlaylistTable";
import useStyles from "./StylesAllPlaylistsPage";

const AllPlaylistsPage = ({ playlists, setCurrentPlaylist, updatePlaylistList }: AllPlaylistsPageType & SetPlaylist) => {
    const { classes } = useStyles()
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.AllPlaylistsPage}>
                <div className={classes.PlaylistsHeader}>
                    <h1>הפלייליסטים שלי</h1>
                    <Button className={classes.Button} variant="outlined" color="secondary" onClick={handleClickOpen}><Add></Add>צור פלייליסט חדש</Button>
                </div>
                <PlaylistTable playlists={playlists} setCurrentPlaylist={setCurrentPlaylist} />
            </div>
            <DialogCreatePlaylist open={open} handleClose={handleClose} updatePlaylistList={updatePlaylistList} />
        </>
    );
}

export default AllPlaylistsPage;