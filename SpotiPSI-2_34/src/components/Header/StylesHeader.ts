import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    Header: {
        width: '100%',
        height: '7.5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#313131'
    },
    Right: {
        width: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        color: '#8656A6'
    }
}));

export default useStyles;