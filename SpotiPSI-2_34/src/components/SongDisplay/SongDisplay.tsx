import type { ShortSongDetails } from "../../types/Types";
import useStyles from "./StylesSongDisplay"
import IconButton from '@mui/material/IconButton';
import { Favorite, Add, FavoriteBorder, PlayArrow } from '@mui/icons-material'

const SongDisplay = ({ name, artist, favorite }: ShortSongDetails) => {
    const { classes } = useStyles()

    

    return (
        <div className={classes.SongContainer}>
            <div className={classes.SongInfo}>
                <IconButton color="inherit" size="small">
                    <PlayArrow color="secondary" />
                </IconButton>
                <span>{name + "-" + artist}</span>
            </div>
            <div className={classes.SongOptions}>
                <IconButton color="inherit" size="small">
                    <Add />
                </IconButton>
                <IconButton color="inherit" size="small">
                    {favorite ? <Favorite color='secondary'/>: <FavoriteBorder />}
                </IconButton>
            </div>
        </div>
    );
}

export default SongDisplay;