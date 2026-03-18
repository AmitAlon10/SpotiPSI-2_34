import type { FavoritesSongsProps } from "../../types/Types";
import SongDisplay from "../SongDisplay/SongDisplay";
import useStyles from "./StylesSongsTable";

const SongsTable = ({ songs, favoritesVideosID }: FavoritesSongsProps) => {
    const { classes } = useStyles()
    return (
        <>
            {songs.map((song) => {
                return <SongDisplay key={song.id} name={song.name} artist={song.artist} favorite={favoritesVideosID.indexOf(song.id) > -1}/>
            })}
        </>

    );
}

export default SongsTable;