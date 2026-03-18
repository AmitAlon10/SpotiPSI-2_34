export type ShortSongDetails = {
    id: string;
    name: string;
    artist: string;
    favorite: boolean;
}

export type Song = ShortSongDetails & {
    album: string;
}

export interface SongsArr {
    songs: Song[]
}

export type LikesOperations = {
    setFavoritesVideosID: (songsID: string[]) => void
}

export type FavoritesSongsProps = LikesOperations & {
    songs: Song[]
    favoritesVideosID: string[]
}

