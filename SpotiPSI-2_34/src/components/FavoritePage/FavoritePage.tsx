import SongsTable from "../SongsTable/SongsTable";
import type { FavoritesSongsProps, LikesOperations } from "../../types/Types";
import useStyles from "./StylesFavoritePage";




const FavoritePage = ({ favoritesVideosID, songs, addLike, removeLike }: FavoritesSongsProps) => {
    const { classes } = useStyles()

    const songsFavorites = songs.filter((fav) => favoritesVideosID.indexOf(fav.id) > -1);
    const likesOperations: LikesOperations = {
        addLike,
        removeLike,
    }
    return (
        <div className={classes.FavoritesSongsPageDisplay}>
            <h1>המועדפים שלי</h1>
            <SongsTable songs={songsFavorites} favoritesVideosID={favoritesVideosID} {...likesOperations} />
        </div>

    );
}

export default FavoritePage;