import { createContext } from "react";
import type { PlaylistSong } from "../types/Types";

export const PlaylistContext = createContext<PlaylistSong>({
    addSongPlaylist: (playlistID: string, songID: string) => undefined,
    playlistList: []
})
