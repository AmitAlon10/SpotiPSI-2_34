import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection";
import type { LikesOperations, SongsArr, PlalistsProps } from "../../types/Types";
import { useTheme } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import { useEffect, useState } from "react";
import FavoritePage from "../FavoritePage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";

const FAVORITES_API = "http://127.0.0.1:5001/api/favorites"

const MainSection = ({ songs, playlists }: PlalistsProps) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    const [favoritesVideosID, setFavoritesVideosID] = useState<string[]>([])
    const [error, setError] = useState<string>();
    
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

    return (
        <div className={classes.MainSection}>
            <Router>
                <Routes>
                    <Route path='/' element={<PageContent />} >
                        <Route path='' element={<AllSongsPage songs={songs} favoritesVideosID={favoritesVideosID} setFavoritesVideosID={setFavoritesVideosID} />} />
                        <Route path='playlists' element={<PlaylistsPage playlists={playlists} songs={songs} favoritesVideosID={favoritesVideosID}/>} />
                        <Route path='favorites' element={<FavoritePage favoritesVideosID={favoritesVideosID} songs={songs} setFavoritesVideosID={setFavoritesVideosID} />} />
                    </Route>
                </Routes>
                <SideBar />
            </Router>
        </div>
    );
}
export default MainSection;