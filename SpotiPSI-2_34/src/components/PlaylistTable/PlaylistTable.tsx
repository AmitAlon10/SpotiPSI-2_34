import {List, ListItem, ListItemButton } from "@mui/material";
import type { AllPlaylistsPageType } from "../../types/Types";
import PlaylistInfoDisplay from "../PlaylistInfoDisplay/PlaylistInfoDisplay";

const PlaylistTable = ({ playlists, setCurrentPlaylist }: AllPlaylistsPageType) => {
    return (
            <List disablePadding>
                {playlists.map((playlist) => {
                    return <ListItem  key={playlist.id} onClick={() => setCurrentPlaylist(playlist)} disablePadding>
                        <ListItemButton dense>
                            <PlaylistInfoDisplay {...playlist} />
                        </ListItemButton>
                    </ListItem>
                })}
            </List>

    );
}

export default PlaylistTable;