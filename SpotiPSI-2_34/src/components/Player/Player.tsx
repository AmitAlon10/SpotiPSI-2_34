import useStyles from "./StylesPlayer";
import { SkipPrevious, PlayArrow, SkipNext, Pause } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { IconButton, Slider } from "@mui/material";


const Player = () => {

    const theme = useTheme()
    const { classes } = useStyles(theme)

    const isPlaying = false
    const name = 'Wake Me Up'
    const artist = 'Avicii' 
    let duration = 56
    const currentTime = 45

    return (
        <div className={classes.Player}>
            <span>{name}</span>
            <span className={classes.Artist}>{artist}</span>
            <div className={classes.Buttons}>
                <IconButton className={classes.Icon} ><SkipPrevious /> </IconButton>
                {isPlaying? 
                <IconButton className={classes.Icon}><Pause fontSize='large'/></IconButton> :
                <IconButton className={classes.Icon}><PlayArrow fontSize='large' /></IconButton>}
                <IconButton className={classes.Icon}><SkipNext /></IconButton>
            </div>
            <Slider aria-label="duration" value={duration} className={classes.Slider} size='small'/>
            <div className={classes.SongDetails}>
                <div className={classes.Detail}>{currentTime}</div>
                <div className={classes.Detail}>{duration}</div>
            </div>
        </div>
    );
}

export default Player;