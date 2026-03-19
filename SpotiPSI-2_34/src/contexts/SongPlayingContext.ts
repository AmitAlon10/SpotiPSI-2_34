import { createContext } from "react";
import type { PlaylistSong, Song, SongPlaying } from "../types/Types";

export const SongPlayingContext = createContext<SongPlaying>({
    currentSong: null,
    setCurrentSong: (song: Song | null) => undefined,
    setIsPlaying: (song: boolean) => undefined,
    setQueue: (songs: Song[]) => undefined,
    setDuration: (songDuration: number) => undefined
})
