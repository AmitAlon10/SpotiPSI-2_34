import { ThemeProvider } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { appTheme } from '../../themes/theme'
import type { Song } from '../../types/Types'
import Header from '../Header/Header'
import MainSection from '../Main Section/MainSection'
import Player from '../Player/Player'
import useStyles from "./StylesApp"


const SONGS_API = "http://127.0.0.1:5001/api/songs"


const App = () => {
  const { classes } = useStyles()
  const [songsList, setSongsList] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();


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

  useEffect(() => {
    fetchSongs()
  }, [])
  return (

    <ThemeProvider theme={appTheme}>
      <div className={classes.App}>
        <Header />
        <MainSection songs={songsList} />
        <Player />
      </div>
    </ThemeProvider>

  )
}

export default App;
