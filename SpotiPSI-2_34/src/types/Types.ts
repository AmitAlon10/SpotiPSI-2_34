export type ShortSongDetails = {
    id: string;
    name: string;
    artist: string;
    favorite: boolean;
}

export type Song = {
    id: string;
    name: string;
    artist: string;
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

export type ShortPlaylistDetails = {
    name: string;
    numOfSongs: number;
}

export interface PlaylistsProps {
    updatePlaylistList: (playlist: Playlist) => void
    songs: Song[]
    playlists: Playlist[];
}

export type Playlist = {
    id: string;
    name: string;
    songIds: string[]
}

export type PlaylistSongs = {
    name: string;
    playlistSongs: Song[];
    favoritesVideosID: string[];
}
export type PlaylistsArr = {
    playlists: Playlist[]
}

export type setPlaylistType = {
    setCurrentPlaylist: (playlist: Playlist|null) => void
}
export type PlaylistFullDisplayType = Playlist & FavoritesSongsProps & setPlaylistType;
export type AllPlaylistsPageType = PlaylistsArr & setPlaylistType;

export interface SongsAndPlaylistsArr {
    updatePlaylistList: (playlist: Playlist) => void
    songs: Song[]
    playlists: Playlist[];
    favoritesVideosID: string[];
}

export type SetPlaylist = {
    updatePlaylistList: (playlist: Playlist) => void
}
