import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    App: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));

export default useStyles;