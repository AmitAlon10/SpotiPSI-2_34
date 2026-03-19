import type { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles<Theme>()(({ palette }: Theme) => ({
    Player: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D1D1D',
        color: '#ffffff'
    },
    Artist: {
        fontSize: '14px',
        color: palette.primary.main
    },
    Buttons: {
        width: '10%',
        height: '27.5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Icon: {
        color: palette.primary.light
    },
    Slider: {
        width: '95%',
        color: palette.secondary.main,
    }
}));

export default useStyles;