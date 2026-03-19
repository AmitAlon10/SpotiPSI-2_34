import { createContext } from "react";
import type { PlaylistSong, Song, SongPlaying } from "../types/Types";

export const SongPlayingContext = createContext<SongPlaying>({
    currentSong: null,
    play: (song: Song, queue: Song[]) => undefined,
})
