import { useState } from "react";
import type { SetPlaylist } from "../../types/Types";
import useStyles from "./StyleDialogCreatePlaylist";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, colors } from '@mui/material'

interface Props {
    open: boolean;
    handleClose: () => void
}

const PLAYLIST_ADD_API = "http://127.0.0.1:5001/api/playlists"

const DialogCreatePlaylist = ({ open, handleClose, updatePlaylistList }: Props & SetPlaylist) => {
    const { classes } = useStyles()
    const [text, SetText] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        updatePlaylists(text)
        handleClose();
    };

    const updatePlaylists = async (playlistName: string) => {
        try {
            const response = await fetch(PLAYLIST_ADD_API, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": playlistName
                })
            })
            const data = await response.json()
            updatePlaylistList(data);
        } catch (error) {
            console.error(error);
            return;
        }
    }


    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" >
                <div className={classes.Dialog}>
                    <DialogTitle style={{ textAlign: 'right', color: 'white' }}>יצירת פלייליסט חדש</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit} id="create-playlist">
                            <TextField
                            fullWidth
                            label="שם הפלייליסט"
                            variant="standard"
                            color="primary"
                            style={{direction:'rtl'}}
                            value={text}
                            onChange={(e) => SetText(e.target.value)}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions className={classes.DialogActions}>
                        <Button type="submit" form="create-playlist" color="primary">צור</Button>
                        <Button onClick={handleClose} color="secondary">ביטול</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );

};

export default DialogCreatePlaylist;