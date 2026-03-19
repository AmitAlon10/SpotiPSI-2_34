import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import type { PlaylistFullDisplayType } from "../../types/Types"
import SongsTable from "../SongsTable/SongsTable"
import useStyles from "./PlaylistFullDisplay"

const PlaylistFullDisplay = ({ name, songs, songIds, setCurrentPlaylist }: PlaylistFullDisplayType) => {
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
            <SongsTable songs={playlistSongs} />
        </div>
    )
}

export default PlaylistFullDisplay;