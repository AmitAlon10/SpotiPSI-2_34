import type { PlaylistsArr } from "../../types/Types";
import PlaylistInfoDisplay from "../PlaylistInfoDisplay/PlaylistInfoDisplay";

const PlaylistTable = ({ playlists }: PlaylistsArr) => {

    return (
        <>
            {playlists.map((playlist) => {
                return <PlaylistInfoDisplay key={playlist.id} {...playlist} />
            })}
        </>

    );
}

export default PlaylistTable;