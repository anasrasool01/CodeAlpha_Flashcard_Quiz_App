import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function FlashcardsListScreen({ navigation }) {
  const [flashcards, setFlashcards] = useState([]);

  return (
    <View style={styles.container}>
      <Button title="Add Flashcard" onPress={() => navigation.navigate('AddFlashcard', { setFlashcards })} />
      <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz', { flashcards })} />

      {flashcards?.length === 0 ? (
        <Text>No flashcards available. Add some!</Text>
      ) : (
        <FlatList
          data={flashcards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>Q: {item?.question}</Text>
              <Text>A: {item?.answer}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
});
