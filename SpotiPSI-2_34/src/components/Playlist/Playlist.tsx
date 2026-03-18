import useStyles from "./StylePlaylist"
import type { PlaylistSongs } from "../../types/Types"
import { ArrowBack } from "@mui/icons-material"
import SongsTable from "../SongsTable/SongsTable"

const Playlist = ({ name, playlistSongs, favoritesVideosID }: PlaylistSongs) => {
    const { classes } = useStyles()
    return (
        <div className={classes.Playlist}>
            <div className={classes.PlaylistHeader}>
                <h1>{name}</h1>
                <ArrowBack />
            </div>
            <SongsTable songs={playlistSongs} favoritesVideosID={favoritesVideosID}/>
        </div>
    )
}

export default Playlist;