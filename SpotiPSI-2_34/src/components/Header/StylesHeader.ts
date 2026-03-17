import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    Header: {
        width: '100%',
        height: '7.5%',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#313131'
    },
    Right: {
        width: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#8656A6',
        fontSize: '20px'
    }
}));

export default useStyles;