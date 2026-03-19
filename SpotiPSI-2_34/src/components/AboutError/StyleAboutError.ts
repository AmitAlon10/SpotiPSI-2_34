import { makeStyles } from 'tss-react/mui';
import type { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>()(({ palette }: Theme) => ({
    Err: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        fontSize: '170px',
        fontWeight: 'bold',
    },
    Info: {
        fontSize: '20px',
        paddingBottom: '2.5%'
    },
    Button: {
        color: 'black',
        background: palette.secondary.light,
        borderRadius: '20px'
    }
}));

export default useStyles;