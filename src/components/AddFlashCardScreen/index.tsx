import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddFlashcardScreen({ route, navigation }) {
  const { setFlashcards } = route.params;
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddFlashcard = () => {
    setFlashcards(prevFlashcards => [...prevFlashcards, { question, answer }]);
    navigation.goBack(); // Navigate back after adding
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter question"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Add Flashcard" onPress={handleAddFlashcard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
