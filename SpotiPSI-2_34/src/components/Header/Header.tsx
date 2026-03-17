import useStyles from "./StylesHeader";

const AppHeader = () => {
    const { classes } = useStyles()
    return (
        <div className={classes.Header}>
            <div className={classes.Right}>SpotiPsi ♪</div>
        </div>
    );
}

export default AppHeader;