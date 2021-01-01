  import firebase from 'firebase';
  
  const firebaseConfig = {
    apiKey: "AIzaSyBKjww_EYbVpkPdXLEcprA_DHqrYLBShTM",
    authDomain: "react-chat-app-fcb37.firebaseapp.com",
    projectId: "react-chat-app-fcb37",
    storageBucket: "react-chat-app-fcb37.appspot.com",
    messagingSenderId: "361613023728",
    appId: "1:361613023728:web:17a57ec7157e9e7a95e535"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({name, text}) => {
    messageRef.push({name, text});
  }