import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    Playlist: {
        width: '100%',
        borderBottom: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red'
    },
    PlaylistHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));

export default useStyles;