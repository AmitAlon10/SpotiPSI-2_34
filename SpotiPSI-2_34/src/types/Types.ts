export type ShortSongDetails = {
    name: string;
    artist: string;
    favorite: boolean;
}

export type Song = ShortSongDetails & {
    id: string;
    album: string;
}

export interface SongsArr {
    songs: Song[]
}

export interface FavoritesSongsProps {
    songs: Song[]
    favoritesVideosID: string[]
}