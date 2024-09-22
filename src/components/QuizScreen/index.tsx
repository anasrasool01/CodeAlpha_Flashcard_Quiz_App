// screens/QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QuizScreen({ route, navigation }) {
  const { flashcards } = route.params;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    nextCard();
  };

  const nextCard = () => {
    if (currentCardIndex + 1 < flashcards.length) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    return (
      <View style={styles.container}>
        <Text>Quiz Complete!</Text>
        <Text>Your Score: {score} / {flashcards.length}</Text>
        <Button title="Back to Flashcards" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const flashcard = flashcards[currentCardIndex];

  return (
    <View style={styles.container}>
      <Text>{flashcard.question}</Text>
      {showAnswer && <Text>{flashcard.answer}</Text>}
      {!showAnswer && <Button title="Show Answer" onPress={() => setShowAnswer(true)} />}
      <Button title="Correct" onPress={handleCorrectAnswer} />
      <Button title="Incorrect" onPress={nextCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
