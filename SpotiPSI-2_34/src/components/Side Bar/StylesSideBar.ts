import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    SideBar: {
        width: '15%',
        height: '100%',
        borderLeft: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1%',
    },
    OptionPurple: {
        width: '95%',
        height: '5%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1rem',
        paddingRight: '5%',
        color: '#B3B3B3',
        backgroundColor: '#2D2032'
    },
    OptionBlack: {
        width: '95%',
        height: '5%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1rem',
        paddingRight: '5%',
        color: '#B3B3B3',
        borderLeft: '1px solid #8080806b'
    }
}));

export default useStyles;