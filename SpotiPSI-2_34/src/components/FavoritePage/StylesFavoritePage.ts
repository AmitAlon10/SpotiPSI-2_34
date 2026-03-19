import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    FavoritesSongsPageDisplay: {
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl',
        padding: '1vh 2vw'
    }
}));

export default useStyles;