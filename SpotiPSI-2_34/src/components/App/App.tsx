import { useState } from 'react'
import Header from '../Header/Header'
import MainSection from '../Main Section/MainSection'
import Player from '../Player/Player'
import useStyles from "./StylesApp"

type PageOption = 'songs' | 'playlists' | 'favorites'

interface CurrentPage {
  currentPage: PageOption
}

const App = () => {
  const { classes } = useStyles()
  const [currentPage, setCurrentPage] = useState<PageOption>('songs')

  const UpdateCurrentPage = (current: PageOption) => {
    setCurrentPage(current)
  }

  return (
    <div className={classes.App}>
      <Header />
      <MainSection currentPage={currentPage} updateCurrentPage={UpdateCurrentPage}/>
      <Player />
    </div>
  );
}

export default App;
