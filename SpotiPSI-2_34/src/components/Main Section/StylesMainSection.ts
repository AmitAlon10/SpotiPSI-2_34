import { makeStyles } from 'tss-react/mui';
import type { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>()(({ palette }: Theme) => ({
    MainSection: {
        width: '100%',
        height: '87.5%',
        display: 'flex',
        backgroundColor: '#121212',
        '& ::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
            backgroundColor: palette.secondary.main,
            border: '#0000000a solid 2px'
        },
        '& ::-webkit-scrollbar': {
            width: '0.3vw',
            backgroundColor: 'white',
            borderRadius: '8px'

        }
    }
}));

export default useStyles;