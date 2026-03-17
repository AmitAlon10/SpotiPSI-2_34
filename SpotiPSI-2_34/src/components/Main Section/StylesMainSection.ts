import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    MainSection: {
        width: '100%',
        height: '87.5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#121212',
    }
}));

export default useStyles;