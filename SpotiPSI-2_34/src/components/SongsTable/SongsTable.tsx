import type {SongsArr,  } from "../../types/Types";
import SongDisplay from "../SongDisplay/SongDisplay";
import useStyles from "./StylesSongsTable";

const SongsTable = ({ songs}: SongsArr) => {
    const { classes } = useStyles()
    return (
        <>
            {songs.map((song) => {
                return <SongDisplay key={song.id} id={song.id} name={song.name} artist={song.artist} />
            })}
        </>

    );
}

export default SongsTable;