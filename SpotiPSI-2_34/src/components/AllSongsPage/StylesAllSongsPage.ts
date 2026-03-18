import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    AllSongsPageDisplay: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl',
        padding: '1vh 2vw'
    }
}));

export default useStyles;