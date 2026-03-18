export type ShortSongDetails = {
    name: string;
    artist: string;
}

export type Song = ShortSongDetails & {
    id: number;
    album: string;
}

export interface SongsArr {
    songs: Song[]
}