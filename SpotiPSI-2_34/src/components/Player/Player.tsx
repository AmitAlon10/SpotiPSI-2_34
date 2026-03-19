import useStyles from "./StylesPlayer";
import { SkipPrevious, PlayArrow, SkipNext, Pause } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { IconButton, Slider } from "@mui/material";
import type { Song } from "../../types/Types";

type Props = {
    currentSong: Song | null,
    isPlaying: boolean,
    duration: number,
    playPrev: () => void,
    togglePlayPause: () => void,
    playNext: () => void
}
const Player = ({ currentSong, isPlaying, duration, playPrev, togglePlayPause, playNext }: Props) => {

    const theme = useTheme()
    const { classes } = useStyles(theme)

    const currentTime = 0

    return (
        <div className={classes.Player}>
            <span>{currentSong?.name}</span>
            <span className={classes.Artist}>{currentSong?.artist}</span>
            <div className={classes.Buttons}>
                <IconButton className={classes.Icon} onClick={playPrev} ><SkipPrevious /> </IconButton>
                {isPlaying ?
                    <IconButton className={classes.Icon} onClick={togglePlayPause}><Pause fontSize='large' /></IconButton> :
                    <IconButton className={classes.Icon} onClick={togglePlayPause}><PlayArrow fontSize='large' /></IconButton>}
                <IconButton className={classes.Icon} onClick={playNext}><SkipNext /></IconButton>
            </div>
            <Slider aria-label="duration" value={duration} className={classes.Slider} size='small' />
            <div className={classes.SongDetails}>
                <div className={classes.Detail}>{currentTime}</div>
                <div className={classes.Detail}>{duration}</div>
            </div>
        </div>
    );
}

export default Player;