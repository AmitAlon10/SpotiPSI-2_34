import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection";
import type { SongsAndPlaylistsArr } from "../../types/Types";
import { useTheme } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import { useEffect, useState } from "react";
import FavoritePage from "../FavoritePage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";
import { favoritesContext } from "../../contexts/FavoritesContext";
import AboutError from "../AboutError/AboutError";

const FAVORITES_API = "http://127.0.0.1:5001/api/favorites"

const MainSection = ({ songs, playlists, updatePlaylistList }: SongsAndPlaylistsArr) => {
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
            <favoritesContext.Provider value={{ favoritesVideosID, setFavoritesVideosID }}>
                <Router>
                    <Routes>
                        <Route path='/' element={<PageContent />} >
                            <Route path='' element={<AllSongsPage songs={songs} />} errorElement={<AboutError />}/>
                            <Route path='playlists' element={<PlaylistsPage playlists={playlists} songs={songs} updatePlaylistList={updatePlaylistList} />} errorElement={<AboutError />}/>
                            <Route path='favorites' element={<FavoritePage songs={songs} />} errorElement={<AboutError />}/>
                            <Route path="*" element={<AboutError />} />
                        </Route>
                    </Routes>
                    <SideBar />
                </Router>
            </favoritesContext.Provider>
        </div>
    );
}
export default MainSection;