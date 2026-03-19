import type { Playlist } from "../../types/Types";
import useStyles from "./StylesPlaylistInfoDisplay";

const PlaylistInfoDisplay = ({ name, songIds }: Playlist) => {
    const { classes } = useStyles()

    return (
        <div className={classes.playlistContainer} >
            <span>{name}</span>
            <span className={classes.NumOfSongs}>{songIds.length} Songs</span>
        </div>
    );
}

export default PlaylistInfoDisplay;