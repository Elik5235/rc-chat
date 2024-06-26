import React from 'react';
import ChatItem from './ChatItem';
import styles from './Chat.module.css';

const Chat = (props) => {
    const { dashboardState: { messages, error, isLoading } } = props;

    const messageCardsArray = messages.map(currentMessage => {
        const { body, id, user, user: { username } } = currentMessage;
        return (
            <ChatItem key={id} user={user} username={username} body={body} />
        )
    });

    return (
        <div className={styles.container}>
            {isLoading && <h1>DIALOG LOADING...</h1>}
            {error && <h1>ERROR =(</h1>}
            {messageCardsArray}
        </div>
    );
}

export default Chat;