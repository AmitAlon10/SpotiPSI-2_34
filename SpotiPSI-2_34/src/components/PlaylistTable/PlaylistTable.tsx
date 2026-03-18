import type { PlaylistsArr } from "../../types/Types";
import PlaylistInfoDisplay from "../PlaylistInfoDisplay/PlaylistInfoDisplay";

const PlaylistTable = ({ playlists }: PlaylistsArr) => {
    
    return (
        <>
            {playlists.map((playlist) => {
                return <PlaylistInfoDisplay key={playlist.id} name={playlist.name} numOfSongs={playlist.songIds.length} />
            })}
        </>

    );
}

export default PlaylistTable;