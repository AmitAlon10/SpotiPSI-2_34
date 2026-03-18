import type { ShortSongDetails } from "../../types/song";
import useStyles from "./StylesSongDisplay"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const SongDisplay = ({ name, artist }: ShortSongDetails) => {
    const { classes } = useStyles()

    return (
        <div className={classes.SongContainer}>
            <div className={classes.SongInfo}>
                <IconButton color="inherit" size="small">
                    <PlayArrowIcon color="secondary" />
                </IconButton>
                <span>{name + "-" + artist}</span>
            </div>
            <div className={classes.SongOptions}>
                <IconButton color="inherit" size="small">
                    <AddIcon />
                </IconButton>
                <IconButton color="inherit" size="small">
                    <FavoriteBorderIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default SongDisplay;