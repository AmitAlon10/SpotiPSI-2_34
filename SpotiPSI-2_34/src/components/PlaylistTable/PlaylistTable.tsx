import { Box, List, ListItem, ListItemButton } from "@mui/material";
import type { AllPlaylistsPageType } from "../../types/Types";
import PlaylistInfoDisplay from "../PlaylistInfoDisplay/PlaylistInfoDisplay";

const PlaylistTable = ({ playlists, setCurrentPlaylist }: AllPlaylistsPageType) => {

    return (
        <Box sx={{ direction: 'lrt' }}>
            <List >
                {playlists.map((playlist) => {
                    return <ListItem onClick={() => setCurrentPlaylist(playlist)} disablePadding>
                        <ListItemButton>
                            <PlaylistInfoDisplay key={playlist.id} {...playlist} />
                        </ListItemButton>
                    </ListItem>
                })}
            </List></Box>

    );
}

export default PlaylistTable;