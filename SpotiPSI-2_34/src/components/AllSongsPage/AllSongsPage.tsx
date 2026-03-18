import type { FavoritesSongsProps, LikesOperations } from "../../types/Types";
import SongsTable from "../SongsTable/SongsTable";
import useStyles from "./StylesAllSongsPage";

const AllSongsPage = ({ songs, favoritesVideosID, addLike, removeLike }: FavoritesSongsProps) => {
    const { classes } = useStyles()

    const likesOperations: LikesOperations = {
        addLike,
        removeLike,
    }

    return (
        <div className={classes.AllSongsPageDisplay}>
            <h1>כל השירים</h1>
            <SongsTable songs={songs} favoritesVideosID={favoritesVideosID} {...likesOperations} />
        </div>

    );
}

export default AllSongsPage;