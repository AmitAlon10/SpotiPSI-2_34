import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    SongContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        direction: 'ltr',
        borderBottom: '1px solid #8080806b',
        padding: '1vh 0',
        alignItems: 'center',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#8080806b"
        }
    },
    clickColor: {
        backgroundColor: "#8080806b"
    }
}));

export default useStyles;