import SongsTable from "../SongsTable/SongsTable";
import type { FavoritesSongsProps } from "../../types/Types";
import useStyles from "./StylesFavoritePage";




const FavoritePage = ({ favoritesVideosID, songs }: FavoritesSongsProps) => {
    const { classes } = useStyles()

    const songsFavorites = songs.filter((fav) => favoritesVideosID.indexOf(fav.id) > -1);

    return (
        <div className={classes.FavoritesSongsPageDisplay}>
            <h1>המועדפים שלי</h1>
            <SongsTable songs={songsFavorites} favoritesVideosID={favoritesVideosID}/>    
        </div>

    );
}

export default FavoritePage;