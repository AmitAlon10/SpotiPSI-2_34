import useStyles from "./StylesPlayer";

const Player = () => {
    const { classes } = useStyles()

    return (
        <div className={classes.Player}>
            <p>נגן שירים</p>
        </div>
    );
}

export default Player;