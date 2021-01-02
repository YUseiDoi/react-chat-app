import React, {useEffect, useRef} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {gravatarPath} from '../gravatar';
import divider from '@material-ui/core/Divider';


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

const MessageItem = ({isLastItem, name, text}) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    useEffect(() => {
        if(isLastItem){
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [isLastItem]);

    return (
        <ListItem divider={true} ref={ref}>
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