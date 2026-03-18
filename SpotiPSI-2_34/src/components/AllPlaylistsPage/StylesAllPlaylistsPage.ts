import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    AllPlaylistsPage: {
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl',
        padding: '1vh 2vw'
    },
    PlaylistsHeader: {
        display: 'flex',
        height: '10%',
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Button: {
        borderRadius: '20px'
    }
}));

export default useStyles;