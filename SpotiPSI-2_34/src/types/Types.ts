// Songs types
export type ShortSongDetails = {
    id: string;
    name: string;
    artist: string;
}

export type Song =  ShortSongDetails &{
    album: string;
}

export interface SongsArr {
    songs: Song[]
}


export type FavoritesSongsType = {
    setFavoritesVideosID: (songsID: string[]) => void
    favoritesVideosID: string[]
}

// Playlists types
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
}
export type PlaylistsArr = {
    playlists: Playlist[]
}

export type setPlaylistType = {
    setCurrentPlaylist: (playlist: Playlist | null) => void
}
export type PlaylistFullDisplayType = Playlist  & SongsArr & setPlaylistType;
export type AllPlaylistsPageType = PlaylistsArr & setPlaylistType;

export interface SongsAndPlaylistsArr {
    updatePlaylistList: (playlist: Playlist) => void
    songs: Song[]
    playlists: Playlist[];
}
export type PlaylistSong = {
    addSongPlaylist: (playlistID: string, songID: string) => void;
    playlistList: Playlist[]
}

export type SetPlaylist = {
    updatePlaylistList: (playlist: Playlist) => void
}
