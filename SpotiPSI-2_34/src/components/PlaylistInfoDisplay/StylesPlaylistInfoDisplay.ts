import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    playlistContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #8080806b',
        padding: '1vh 0',
        direction: 'ltr'
    },
    NumOfSongs: {
        fontSize: '13px',
        color: 'grey'
    }
}));

export default useStyles;