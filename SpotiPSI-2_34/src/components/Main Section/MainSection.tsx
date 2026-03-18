import SideBar from "../Side Bar/SideBar";
import PageContent from "../Page Content/PageContent";
import useStyles from "./StylesMainSection";
import type { SongsArr } from "../../types/Types";
import { useTheme } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AllSongsPage from "../AllSongsPage/AllSongsPage";
import { useEffect, useState } from "react";
import FavoritePage from "../FavoritePage/FavoritePage";

const FAVORITES_API = "http://127.0.0.1:5001/api/favorites"

const MainSection = ({ songs }: SongsArr) => {
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
        finally {
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
                        <Route path='' element={<AllSongsPage songs={songs} favoritesVideosID={favoritesVideosID} />} />
                        <Route path='playlists' element={<AllSongsPage songs={songs} favoritesVideosID={favoritesVideosID} />} />
                        <Route path='favorites' element={<FavoritePage favoritesVideosID={favoritesVideosID} songs={songs} />} />
                    </Route>
                </Routes>
                <SideBar />
            </Router>
        </div>
    );
}
export default MainSection;