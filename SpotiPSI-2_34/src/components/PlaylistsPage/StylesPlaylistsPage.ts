import { makeStyles } from 'tss-react/mui';
import type { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>()(({ palette }: Theme) => ({
    AllPlaylistsPageDisplay: {
        height: '100%',
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
    },
    ListPlaylists: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

export default useStyles;