import { useTheme } from '@mui/material/styles';
import { type Playlist, type LikesOperations, type SongsAndPlaylistsArr } from "../../types/Types";
import useStyles from "./StylesPlaylistsPage";
import PlaylistFullDisplay from "../PlaylistFullDisplay/PlaylistFullDisplay.tsx";
import { useState } from "react";
import AllPlaylistsPage from '../AllPlaylistsPage/AllPlaylistsPage.tsx';

const PlaylistsPage = ({ playlists, songs, favoritesVideosID, setFavoritesVideosID }: SongsAndPlaylistsArr & LikesOperations) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null)
    console.log(currentPlaylist)
    return (
        <>
            {currentPlaylist
                ? <PlaylistFullDisplay
                    {...currentPlaylist}
                    songs={songs}
                    favoritesVideosID={favoritesVideosID}
                    setFavoritesVideosID={setFavoritesVideosID}
                    setCurrentPlaylist={setCurrentPlaylist} />
                : <AllPlaylistsPage
                    playlists={playlists}
                    setCurrentPlaylist={setCurrentPlaylist}
                />
            }
        </>

    );
}

export default PlaylistsPage;