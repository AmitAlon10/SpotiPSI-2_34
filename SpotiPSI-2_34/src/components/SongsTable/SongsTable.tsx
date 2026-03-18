import type { FavoritesSongsProps, LikesOperations } from "../../types/Types";
import SongDisplay from "../SongDisplay/SongDisplay";
import useStyles from "./StylesSongsTable";

const SongsTable = ({ songs, favoritesVideosID, setFavoritesVideosID }: FavoritesSongsProps) => {
    const { classes } = useStyles()
    return (
        <>
            {songs.map((song) => {
                return <SongDisplay key={song.id} id={song.id} name={song.name} artist={song.artist} favorite={favoritesVideosID.indexOf(song.id) > -1} setFavoritesVideosID={setFavoritesVideosID} />
            })}
        </>

    );
}

export default SongsTable;