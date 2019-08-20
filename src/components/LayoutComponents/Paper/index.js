import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '../Button'


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '300px',
        height: '300px',
        textAlign: 'center',
    },
}));

export default function PaperSheet(props) {

    const { heading, description, paperColor, buttonText, buttonColor, buttonLink } = props

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root} style={{ backgroundColor: paperColor }}>
                <Typography variant="h5" component="h3">
                    {heading}
                </Typography>
                <br />
                <Typography component="p">
                    {description}
                </Typography>
                <br />
                <NavLink to={buttonLink} style={{ textDecoration: 'none' }}>
                    <Button color={buttonColor} text={buttonText} variant="outlined" />
                </NavLink>
            </Paper>
        </div>
    );
}
