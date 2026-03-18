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
    addLike: (songID: string) => Promise<void>
    removeLike: (songID: string) => Promise<void>
}

export type FavoritesSongsProps = LikesOperations & {
    songs: Song[]
    favoritesVideosID: string[]
}

