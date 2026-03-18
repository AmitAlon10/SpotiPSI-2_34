import { useEffect, useState } from "react";
import type { SongsArr } from "../../types/song";
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import useStyles from "./StylesPageContent";

const FAVORITES_API = "http://127.0.0.1:5001/api/favorites"

const PageContent = ({ songs }: SongsArr) => {
    const { classes } = useStyles()
    
    const [favoritesVideosID, setFavoritesVideosID] = useState([])
    const [error, setError] = useState<string>();
    console.log(favoritesVideosID)
    const fetchSongs = async () => {
        try {
            const response = await fetch(FAVORITES_API)
            const data = await response.json()
            setFavoritesVideosID(data);
        } catch (error) {
            setError("Something went wrong");
            console.error(error);
            return;
        }
        finally {
        }
    }

    useEffect(() => {
        fetchSongs()
    }, [])

    return (
        <div className={classes.PageContent}>
            <AllSongsPage songs={songs} />
        </div>
    )
}

export default PageContent;