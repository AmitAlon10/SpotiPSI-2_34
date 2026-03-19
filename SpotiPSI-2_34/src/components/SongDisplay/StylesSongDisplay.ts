import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    SongContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        direction: 'ltr',
        borderBottom: '1px solid #8080806b',
        padding: '1vh 0',
        alignItems: 'center',
    },
    SongOptions: {
        display: 'flex',
        gap: '0 5%',
    },
    SongInfo: {
        display: 'flex',
        gap: '0 1%',
        flexGrow: '1',
        alignItems: 'center'
    },
    

}));

export default useStyles;