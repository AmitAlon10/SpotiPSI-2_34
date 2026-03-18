import type { FavoritesSongsProps, LikesOperations } from "../../types/Types";
import SongDisplay from "../SongDisplay/SongDisplay";
import useStyles from "./StylesSongsTable";

const SongsTable = ({ songs, favoritesVideosID, addLike, removeLike }: FavoritesSongsProps) => {
    const { classes } = useStyles()

    const likesOperations: LikesOperations = {
        addLike,
        removeLike,
    }

    return (
        <>
            {songs.map((song) => {
                return <SongDisplay key={song.id} id={song.id} name={song.name} artist={song.artist} favorite={favoritesVideosID.indexOf(song.id) > -1} {...likesOperations} />
            })}
        </>

    );
}

export default SongsTable;