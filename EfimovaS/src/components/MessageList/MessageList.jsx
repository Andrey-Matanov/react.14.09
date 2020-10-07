import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import { Box, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        listStyle: 'none',
        margin: 0,
        padding: theme.spacing(4),
        border: '1px solid #1976d2',
        borderRadius: 12,
    },
}));

const MessageList = () => {
    const classes = useStyles();
    const { id } = useParams();
    const chats = useSelector(state => state.chats.byIds);
    const messages = useSelector(state => state.messages.byIds);

    const messagesList = (chats[id]?.messageList ?? []).map(idx => messages[idx]);

    return (
        <Box component="ul" className={classes.list}> 
            {messagesList.map(({ id, author, message }) => (
                <Message key={id} author={author} message={message} />
            ))}
        </Box>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            author: PropTypes.string,
            message: PropTypes.string,
        }),
    ).isRequired,
}

export default MessageList
