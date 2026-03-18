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

export type PageOption = 'songs' | 'playlists' | 'favorites'

export interface CurrentPage {
  currentPage: PageOption
}

export interface Props {
  currentPage: PageOption
  updateCurrentPage: (current: PageOption) => void
  songs: Song[]
}

