import useStyles from "./StylesPlayer";
import { SkipPrevious, PlayArrow, SkipNext, Pause } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import { IconButton, Slider } from "@mui/material";
import { useState } from "react";

const Player = () => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    const [isPlaying, setIsPlaying] = useState(false)
    const [name, setName] = useState('Wake Me Up')
    const [artist, setArtist] = useState('Avicii')
    const [duration, setDuration] = useState<number>(0);


    const handleChange = (event: Event, newValue: number) => {
        setDuration(newValue);
    };

    return (
        <div className={classes.Player}>
            <span>{name}</span>
            <span className={classes.Artist}>{artist}</span>
            <div className={classes.Buttons}>
                <IconButton className={classes.Icon}><SkipPrevious /> </IconButton>
                {isPlaying? 
                <IconButton className={classes.Icon}><Pause fontSize='large'/></IconButton> :
                <IconButton className={classes.Icon}><PlayArrow fontSize='large' /></IconButton>}
                <IconButton className={classes.Icon}><SkipNext /></IconButton>
            </div>
            <Slider aria-label="duration" value={duration} onChange={handleChange} className={classes.Slider} size='small'/>
        </div>
    );
}

export default Player;