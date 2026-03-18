import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    DialogActions: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Dialog: {
        backgroundColor: '#6b6b6b',
    }
}));

export default useStyles;