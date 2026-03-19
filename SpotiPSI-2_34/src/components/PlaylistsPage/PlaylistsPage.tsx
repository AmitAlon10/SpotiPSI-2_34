import { useState } from "react";
import { type Playlist, type SongsAndPlaylistsArr } from "../../types/Types";
import AllPlaylistsPage from '../AllPlaylistsPage/AllPlaylistsPage.tsx';
import PlaylistFullDisplay from "../PlaylistFullDisplay/PlaylistFullDisplay.tsx";

const PlaylistsPage = ({ playlists, songs, updatePlaylistList }: SongsAndPlaylistsArr) => {
    const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null)
    return (
        <>
            {currentPlaylist
                ? <PlaylistFullDisplay
                    {...currentPlaylist}
                    songs={songs}
                    setCurrentPlaylist={setCurrentPlaylist} />
                : <AllPlaylistsPage
                    playlists={playlists}
                    setCurrentPlaylist={setCurrentPlaylist}
                    updatePlaylistList={updatePlaylistList}
                />
            }
        </>
    )
}

export default PlaylistsPage;