import useStyles from './StyleAboutError'
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


const AboutError = () => {
    const theme = useTheme()
    const { classes } = useStyles(theme)
    return (
        <div className={classes.Err}>
            <span className={classes.Title}>!Oops</span>
            <span className={classes.Info}>404 - PAGE NOT FOUND</span>
            <Link to='/'><Button className={classes.Button}>GO TO HOMEPAGE</Button></Link>
        </div>
    )
}

export default AboutError