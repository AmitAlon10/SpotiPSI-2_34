import { Add, Favorite, FavoriteBorder, PlayArrow } from '@mui/icons-material';
import { Menu, MenuItem, useTheme } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import React, { useContext, useState } from "react";
import { favoritesContext } from "../../contexts/FavoritesContext";
import { PlaylistContext } from "../../contexts/PlaylistsContext";
import type { Song } from "../../types/Types";
import useStyles from "./StylesSongDisplay";

const FAVORITES_ADD_API = "http://127.0.0.1:5001/api/favorites/add"
const FAVORITES_REMOVE_API = "http://127.0.0.1:5001/api/favorites/remove"

const SongDisplay = (song: Song) => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    const [error, setError] = useState<string>();
    const { favoritesVideosID, setFavoritesVideosID } = useContext(favoritesContext)
    const { addSongPlaylist, playlistList } = useContext(PlaylistContext)
    const favorite = favoritesVideosID.includes(song.id)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (playlistList.length !== 0) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = (playlistID?: string) => {
        setAnchorEl(null);
        playlistID && addSongPlaylist(playlistID, song.id)
    };



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
        <>
            <div className={classes.SongInfo}>
                <IconButton color="inherit" size="small">
                    <PlayArrow color="secondary" />
                </IconButton>
                <span>{song.name + "-" + song.artist}</span>
            </div>

            <div className={classes.SongOptions}>
                <IconButton color="inherit" onClick={handleClick} size="small">
                    <Add />
                </IconButton>

                <IconButton color="inherit" size="small" onClick={() => updateLike(song.id)} >
                    {favorite
                        ? <Favorite color='secondary' />
                        : <FavoriteBorder />}
                </IconButton>
            </div>

            <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()} classes={{ paper: classes.menuPaper }}>
                {playlistList.map((playlist) => {
                    return <MenuItem key={playlist.id} onClick={() => handleClose(playlist.id)}>{playlist.name}</MenuItem>
                })}
            </Menu>

        </>
    );
}

export default SongDisplay;