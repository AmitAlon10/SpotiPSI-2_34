import { makeStyles } from 'tss-react/mui';
import { type Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>()(({ palette }: Theme) => ({
    SongOptions: {
        display: 'flex',
        gap: '0 5%'
    },
    SongInfo: {
        display: 'flex',
        gap: '0 1%',
        flexGrow: '1',
        alignItems: 'center'
    },
    menuPaper: {
        backgroundColor: palette.primary.dark,
        color: 'white',
        direction: 'rtl'
    }
}));

export default useStyles;