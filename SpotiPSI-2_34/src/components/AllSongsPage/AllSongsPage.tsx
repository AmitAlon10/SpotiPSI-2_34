import type { FavoritesSongsProps } from "../../types/Types";
import SongsTable from "../SongsTable/SongsTable";
import useStyles from "./StylesAllSongsPage";

const AllSongsPage = ({ songs, favoritesVideosID  }: FavoritesSongsProps) => {
    const { classes } = useStyles()
    return (
        <div className={classes.AllSongsPageDisplay}>
            <h1>כל השירים</h1>
            <SongsTable songs={songs} favoritesVideosID={favoritesVideosID}/>    
        </div>

    );
}

export default AllSongsPage;