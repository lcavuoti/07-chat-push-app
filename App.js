import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { useState, useCallback, useEffect } from "react";

export default function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello there',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'PartyA',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages)) // append the new message to present messages
  }, [])

  return (
      <GiftedChat
          //backgroundColor={isDarkMode ? Colors.black : Colors.white}
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
