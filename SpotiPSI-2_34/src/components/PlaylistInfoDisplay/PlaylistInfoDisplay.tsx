import type { ShortPlaylistDetails } from "../../types/Types";
import useStyles from "./StylesPlaylistInfoDisplay";


const PlaylistInfoDisplay = ({ name, numOfSongs }: ShortPlaylistDetails) => {
    const { classes } = useStyles()

    return (
        <div className={classes.playlistContainer}>
            <span>{name}</span>
            <span className={classes.NumOfSongs}>{numOfSongs} Songs</span>
        </div>
    );
}

export default PlaylistInfoDisplay;