import { useContext } from "react";
import type { Song, SongsArr, } from "../../types/Types";
import SongDisplay from "../SongDisplay/SongDisplay";
import useStyles from "./StylesSongsTable";
import { SongPlayingContext } from "../../contexts/SongPlayingContext";

const SongsTable = ({ songs }: SongsArr) => {
    const { classes } = useStyles()
    const { currentSong, setCurrentSong, setIsPlaying, setQueue, setDuration } = useContext(SongPlayingContext);

    const handleClick = (song: Song) => {
        setQueue(songs);
        setIsPlaying(true);
        setCurrentSong(song);
    }
 
    return (
        <>
            {songs.map((song) => {
                let songClasses = classes.SongContainer
                if (currentSong && currentSong == song) {
                    songClasses+= " " + classes.clickColor
                }
                return <div key={song.id} className={songClasses} onClick={() => handleClick(song)}>
                    <SongDisplay  {...song} />
                </div>
            })}
        </>

    );
}

export default SongsTable;