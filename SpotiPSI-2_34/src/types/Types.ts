// Songs types


export type Song = {
    id: string;
    name: string;
    artist: string;
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

export type PlaylistFullDisplayType = Playlist & SongsArr & setPlaylistType;

export type AllPlaylistsPageType = PlaylistsArr & setPlaylistType;

export type SetPlaylist = {
    updatePlaylistList: (playlist: Playlist) => void
}

export type SongsAndPlaylistsArr = SetPlaylist & {
    songs: Song[]
    playlists: Playlist[];
}

export type PlaylistSong = {
    addSongPlaylist: (playlistID: string, songID: string) => void;
    playlistList: Playlist[]
}

export type SongPlaying = {
    currentSong: Song | null,
    play: (song: Song, queue: Song[]) => void
}