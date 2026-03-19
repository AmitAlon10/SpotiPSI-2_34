import { useContext } from "react";
import { SongPlayingContext } from "../../contexts/SongPlayingContext";
import type { Song, SongsArr, } from "../../types/Types";
import SongDisplay from "../SongDisplay/SongDisplay";
import useStyles from "./StylesSongsTable";

const SongsTable = ({ songs }: SongsArr) => {
    const { classes } = useStyles()
    const { currentSong, play } = useContext(SongPlayingContext);

    const handleClick = (song: Song) => {
        play(song, songs)
    }

    return (
        <>
            {songs.map((song) => {
                let songClasses = classes.SongContainer
                if (currentSong && currentSong == song) {
                    songClasses += " " + classes.clickColor
                }
                return <div key={song.id} className={songClasses} onClick={() => handleClick(song)}>
                    <SongDisplay  {...song} />
                </div>
            })}
        </>

    );
}

export default SongsTable;