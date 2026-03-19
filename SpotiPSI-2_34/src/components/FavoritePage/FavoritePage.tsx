import SongsTable from "../SongsTable/SongsTable";
import type { SongsArr } from "../../types/Types";
import useStyles from "./StylesFavoritePage";
import { useContext } from "react";
import { favoritesContext } from "../../contexts/FavoritesContext";

const FavoritePage = ({songs}: SongsArr) => {
    const { classes } = useStyles()
    const { favoritesVideosID } = useContext(favoritesContext)

    const songsFavorites = songs.filter((fav) => favoritesVideosID.indexOf(fav.id) > -1);

    return (
        <div className={classes.FavoritesSongsPageDisplay}>
            <h1>המועדפים שלי</h1>
            <SongsTable songs={songsFavorites} />
        </div>

    );
}

export default FavoritePage;