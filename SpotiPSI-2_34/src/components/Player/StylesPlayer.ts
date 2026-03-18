import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    Player: {
        width: '100%',
        height: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D1D1D',
        color: '#ffffff'
    }
}));

export default useStyles;