import type { SongsArr } from "../../types/Types";
import SongsTable from "../SongsTable/SongsTable";
import useStyles from "./StylesAllSongsPage";

const AllSongsPage = ({ songs }: SongsArr) => {
    const { classes } = useStyles()
    return (
        <div className={classes.AllSongsPageDisplay}>
            <h1>כל השירים</h1>
            <SongsTable songs={songs}/>    
        </div>

    );
}

export default AllSongsPage;