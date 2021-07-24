import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '20%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export type Color = 'success' | 'info' | 'warning' | 'error';

interface AlertProps {
    type?: Color,
    message?: string
}

export default function AlertMessage(props: AlertProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Alert severity={props.type}>{props.message}</Alert>
        </div>
    )
}