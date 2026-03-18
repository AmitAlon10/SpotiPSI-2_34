import { makeStyles } from 'tss-react/mui';
import {type Theme } from '@mui/material/styles';


const useStyles = makeStyles<Theme>()(({palette}: Theme) => ({
    Header: {
        width: '100%',
        height: '7.5%',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#313131',
    },
    Right: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2em',
        fontWeight: 'bold',
        color: palette.secondary.main,
        padding:'0 1vh  '
    }
}));

export default useStyles;