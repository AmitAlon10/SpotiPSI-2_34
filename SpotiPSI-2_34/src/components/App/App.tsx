import Header from '../Header/Header'
import MainSection from '../Main Section/MainSection'
import Player from '../Player/Player'
import useStyles from "./StylesApp"

const App = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.App}>
      <Header />
      <MainSection />
      <Player />
    </div>
  );
}

export default App;
