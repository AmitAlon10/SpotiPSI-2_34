import { ThemeProvider } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { appTheme } from '../../themes/theme'
import type { Song, Playlist } from '../../types/Types'
import Header from '../Header/Header'
import MainSection from '../Main Section/MainSection'
import Player from '../Player/Player'
import useStyles from "./StylesApp"
import { PlaylistContext } from "../../contexts/PlaylistsContext";
import { SongPlayingContext } from '../../contexts/SongPlayingContext'
import useAudio from '../../customeHooks/useAudio'


const SONGS_API = "http://127.0.0.1:5001/api/songs"
const PLAYLISTS_API = "http://127.0.0.1:5001/api/playlists"
const PLAYLISTS_SONG_ADD_API = "http://127.0.0.1:5001/api/playlists/"


const App = () => {
  const { classes } = useStyles()
  const [songsList, setSongsList] = useState<Song[]>([]);
  const [playlistList, setPlaylistList] = useState<Playlist[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();


  const { currentSong, isPlaying, queue, currentTime, duration, play, togglePlayPause, playNext, playPrev } = useAudio()

  const fetchSongs = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(SONGS_API)
      const data = await response.json()
      setSongsList(data);
    } catch (error) {
      setError("Something went wrong");
      console.error(error);
      return;
    }
    finally {
      setIsLoading(false)
    }
  }

  const fetchPlaylists = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(PLAYLISTS_API)
      const data = await response.json()
      setPlaylistList(data);
    } catch (error) {
      setError("Something went wrong");
      console.error(error);
      return;
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSongs()
    fetchPlaylists()
  }, [])

  const addSongPlaylist = async (playlistID: string, songID: string) => {
    try {
      const response = await fetch(PLAYLISTS_SONG_ADD_API + `${playlistID}/add`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "songId": songID
        })
      })
      const data = await response.json()
      setPlaylistList((playlistList) => [...playlistList.filter((playlist) => playlist.id !== playlistID), data])
    } catch (error) {
      setError("Something went wrong");
      console.error(error);
      return;
    }
  }

  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.App}>
        <Header />
        <SongPlayingContext.Provider value={{ currentSong, play }}>
          <PlaylistContext.Provider value={{ addSongPlaylist, playlistList }}>
            <MainSection songs={songsList} playlists={playlistList} updatePlaylistList={(playlist) => setPlaylistList(playlistList => [...playlistList, playlist])} />
          </PlaylistContext.Provider>
        </SongPlayingContext.Provider>
        <Player />
      </div>
    </ThemeProvider>

  )
}

export default App;
