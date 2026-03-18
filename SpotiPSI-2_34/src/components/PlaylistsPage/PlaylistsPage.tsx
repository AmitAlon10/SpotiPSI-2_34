import { useTheme } from '@mui/material/styles';
import { type Playlist, type LikesOperations, type SongsAndPlaylistsArr } from "../../types/Types";
import useStyles from "./StylesPlaylistsPage";
import PlaylistFullDisplay from "../PlaylistFullDisplay/PlaylistFullDisplay.tsx";
import { useState } from "react";
import AllPlaylistsPage from '../AllPlaylistsPage/AllPlaylistsPage.tsx';

const PlaylistsPage = ({ playlists, songs, favoritesVideosID, setFavoritesVideosID }: SongsAndPlaylistsArr & LikesOperations) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>({
        id: "1", name:"m", songIds:["1", "2"]
    })

    return (
        <>
            {currentPlaylist
                ? <PlaylistFullDisplay {...currentPlaylist} songs={songs} favoritesVideosID={favoritesVideosID} setFavoritesVideosID={setFavoritesVideosID} />
                : <AllPlaylistsPage playlists={playlists} />}
        </>

    );
}

export default PlaylistsPage;