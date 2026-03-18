import useStyles from "./PlaylistFullDisplay"
import type { PlaylistFullDisplayType } from "../../types/Types"
import { ArrowBack } from "@mui/icons-material"
import SongsTable from "../SongsTable/SongsTable"
import { IconButton } from "@mui/material"

const PlaylistFullDisplay = ({ name, songs, songIds, favoritesVideosID, setFavoritesVideosID, setCurrentPlaylist }: PlaylistFullDisplayType) => {
    const { classes } = useStyles()
    const playlistSongs = songs.filter((song) => songIds.includes(song.id))
    return (
        <div className={classes.Playlist}>
            <div className={classes.PlaylistHeader}>
                <h1>{name}</h1>
                <IconButton color="inherit" size="small" onClick={() => setCurrentPlaylist(null)}>
                    <ArrowBack />
                </IconButton>
            </div>
            <SongsTable songs={playlistSongs} favoritesVideosID={favoritesVideosID} setFavoritesVideosID={setFavoritesVideosID} />
        </div>
    )
}

export default PlaylistFullDisplay;