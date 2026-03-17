import Header from '../Header/Header'
import Player from '../Player/Player'
import useStyles from "./StylesApp"

const App = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.App}>
      <Header />
      <Player />
    </div>
  );
}

export default App;
