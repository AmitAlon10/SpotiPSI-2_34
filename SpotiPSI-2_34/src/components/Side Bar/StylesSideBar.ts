import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    SideBar: {
        width: '15%',
        height: '100%',
        borderLeft: '1px solid black'
    }
}));

export default useStyles;