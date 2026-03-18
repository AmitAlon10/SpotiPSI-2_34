import type { LikesOperations, ShortSongDetails } from "../../types/Types";
import useStyles from "./StylesSongDisplay"
import IconButton from '@mui/material/IconButton';
import { Favorite, Add, FavoriteBorder, PlayArrow } from '@mui/icons-material'
import { useState } from "react";

const FAVORITES_ADD_API = "http://127.0.0.1:5001/api/favorites/add"
const FAVORITES_REMOVE_API = "http://127.0.0.1:5001/api/favorites/remove"

const SongDisplay = ({ id, name, artist, favorite, setFavoritesVideosID }: ShortSongDetails & LikesOperations) => {
    const { classes } = useStyles()

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

    const updateLike = (id: string) => {
        if (favorite) {
            removeLike(id);
        }
        else {
            addLike(id);
        }
    }

    return (
        <div className={classes.SongContainer}>
            <div className={classes.SongInfo}>
                <IconButton color="inherit" size="small">
                    <PlayArrow color="secondary" />
                </IconButton>
                <span>{name + "-" + artist}</span>
            </div>
            <div className={classes.SongOptions}>
                <IconButton color="inherit" size="small">
                    <Add />
                </IconButton>
                <IconButton color="inherit" size="small" onClick={() => updateLike(id)} >
                    {favorite
                        ? <Favorite color='secondary' />
                        : <FavoriteBorder />}
                </IconButton>
            </div>
        </div>
    );
}

export default SongDisplay;