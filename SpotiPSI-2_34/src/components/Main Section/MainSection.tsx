import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection";
import type { LikesOperations, SongsArr } from "../../types/Types";
import { useTheme } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import { useEffect, useState } from "react";
import FavoritePage from "../FavoritePage/FavoritePage";

const FAVORITES_API = "http://127.0.0.1:5001/api/favorites"
const FAVORITES_ADD_API = "http://127.0.0.1:5001/api/favorites/add"
const FAVORITES_REMOVE_API = "http://127.0.0.1:5001/api/favorites/remove"

const MainSection = ({ songs }: SongsArr) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    const [favoritesVideosID, setFavoritesVideosID] = useState<string[]>([])
    const [error, setError] = useState<string>();

    const updateLikes = async (songID: string, apiUrl: string) => {
        try {
            const response = await fetch(apiUrl, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "songId": songID
                })
            })
            const data = await response.json()
            setFavoritesVideosID(data);
        } catch (error) {
            setError("Something went wrong");
            console.error(error);
            return;
        }
    }

    const addLike = async (songID: string) => {
        updateLikes(songID, FAVORITES_ADD_API)
    }

    const removeLike = async (songID: string) => {
        updateLikes(songID, FAVORITES_REMOVE_API)
    }

    const fetchFavoritesSongs = async () => {
        try {
            const response = await fetch(FAVORITES_API)
            const data = await response.json()
            setFavoritesVideosID(data);
        } catch (error) {
            setError("Something went wrong");
            console.error(error);
            return;
        }
    }

    useEffect(() => {
        fetchFavoritesSongs()
    }, [])

    const likesOperations: LikesOperations = {
        addLike,
        removeLike,
    }

    return (
        <div className={classes.MainSection}>
            <Router>
                <Routes>
                    <Route path='/' element={<PageContent />} >
                        <Route path='' element={<AllSongsPage songs={songs} favoritesVideosID={favoritesVideosID} {...likesOperations}/>} />
                        <Route path='playlists' element={<AllSongsPage songs={songs} favoritesVideosID={favoritesVideosID} {...likesOperations} />} />
                        <Route path='favorites' element={<FavoritePage favoritesVideosID={favoritesVideosID} songs={songs} {...likesOperations}/>} />
                    </Route>
                </Routes>
                <SideBar />
            </Router>
        </div>
    );
}
export default MainSection;