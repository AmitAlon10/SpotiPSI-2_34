import { createContext } from "react";
import type { Song, SongPlaying } from "../types/Types";

export const SongPlayingContext = createContext<SongPlaying>({
    currentSong: null,
    play: (_: Song, __: Song[]) => undefined,
})
