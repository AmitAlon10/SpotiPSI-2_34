import { createContext } from "react";
import type { PlaylistSong } from "../types/Types";

export const PlaylistContext = createContext<PlaylistSong>({
    addSongPlaylist: (_: string, __: string) => undefined,
    playlistList: []
})
