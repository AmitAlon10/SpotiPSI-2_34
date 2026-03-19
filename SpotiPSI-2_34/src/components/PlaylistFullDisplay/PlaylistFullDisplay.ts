import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    Playlist: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1vh 2vw'
    },
    PlaylistHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));

export default useStyles;