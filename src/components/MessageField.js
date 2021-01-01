import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import {pushMessage} from '../firebase';

const MessageField = ({imputEL, name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);
    console.log(text);

    return (
    <TextField 
        autoFocus 
        fullWidth={true} 
        imputEL={imputEL} 
        onChange={(e) => { setText(e.target.value) }}
        onKeyDown={(e) => {
            if(isComposed)return;
            const text = e.target.value;
            if(text === '')return;
            if(e.key === 'Enter'){
                console.log('push message to firebase');
                pushMessage({name: 'ゆせ', text});
                setText('');
                e.preventDefault();
            }                
        }}
        onCompositionStart={() => {
            setIsComposed(true);
            console.log('日本語入力開始');
        }}
        onCompositionEnd={() => {
            setIsComposed(false);
            console.log('日本語入力終了');
        }}
        value={text}
    />)
};

export default MessageField;