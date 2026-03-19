import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import { IconButton, Slider } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import type { PlayerProps } from "../../types/Types";
import useStyles from "./StylesPlayer";

const paddingNum = (num: number) => {
    return num.toString().padStart(2, "0")
}

const convertSecondes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    seconds = Math.floor(seconds % 60)
    return `${paddingNum(minutes)}:${paddingNum(seconds)}`
}

const Player = ({ seek, currentSong, isPlaying, duration, currentTime, playPrev, togglePlayPause, playNext }: PlayerProps) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)

    return (
        <>
            {currentSong
                ?
                <div className={classes.Player}>
                    <span>{currentSong.name}</span>
                    <span className={classes.Artist}>{currentSong.artist}</span>
                    <div className={classes.Buttons}>
                        <IconButton className={classes.Icon} onClick={playPrev} ><SkipPrevious /> </IconButton>
                        {isPlaying ?
                            <IconButton className={classes.Icon} onClick={togglePlayPause}><Pause fontSize='large' /></IconButton> :
                            <IconButton className={classes.Icon} onClick={togglePlayPause}><PlayArrow fontSize='large' /></IconButton>}
                        <IconButton className={classes.Icon} onClick={playNext}><SkipNext /></IconButton>
                    </div>
                    <Slider aria-label="duration" min={0} max={duration} value={currentTime} className={classes.Slider} size='small' onChange={(_, value) => seek(value)} />
                    <div className={classes.SongDetails}>
                        <div className={classes.Detail}>{convertSecondes(currentTime)}</div>
                        <div className={classes.Detail}>{convertSecondes(duration)}</div>
                    </div>
                </div>
                :
                <div className={classes.Player}>
                    <span>נגן השירים</span>
                </div>}
        </>
    );
}

export default Player;