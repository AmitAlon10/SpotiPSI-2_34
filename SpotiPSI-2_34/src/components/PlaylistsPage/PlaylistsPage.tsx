import { useTheme } from '@mui/material/styles';
import type { SongsAndPlaylistsArr } from "../../types/Types";
import useStyles from "./StylesPlaylistsPage";
import AllPlaylistsPage from "../AllPlaylistsPage/AllPlaylistsPage";
import { useState } from "react";


const PlaylistsPage = ({ playlists, songs, favoritesVideosID }: SongsAndPlaylistsArr) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    const [currentPlaylist, setCurrentPlaylist] = useState('')


    return (
        <>
            {currentPlaylist ? null : <AllPlaylistsPage playlists={playlists}/>}
        </>

    );
}

export default PlaylistsPage;