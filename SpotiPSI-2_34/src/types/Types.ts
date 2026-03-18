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

export type PageOption = 'songs' | 'playlists' | 'favorites'

export interface CurrentPage {
  currentPage: PageOption
}

export interface MainSectionProps {
  currentPage: PageOption
  updateCurrentPage: (current: PageOption) => void
  songs: Song[]
}

export interface SideBarProps {
    currentPage: string
    updateCurrentPage: (current: PageOption) => void
}

export interface FavoritesSongsProps {
    songs: Song[]
    favoritesVideosID: string[]
}