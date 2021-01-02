import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {gravatarPath} from '../gravatar';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
}));

const MessageItem = ({name, text}) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    return (
        <ListItem divider={true}>
            <ListItemAvatar>
                <Avatar src={avatarPath} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {text}
                        </Typography>
                }
            />
        </ListItem>
    )
}

export default MessageItem;