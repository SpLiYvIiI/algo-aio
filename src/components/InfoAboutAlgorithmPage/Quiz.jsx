import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import getQuizzes from '../../services/quiz-service';
import { shuffleArray } from '../../common/utils';

const Quiz = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [category, setCategory] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [leftValue, setLeftValue] = useState(null);
  const [rigthValue, setRightValue] = useState(null);
  const [score, setScore] = useState(0);

  const changeDifficulty = event => {
    setDifficulty(event.target.value);
  };

  const changeLeftValue = event => {
    setRightValue(null);
    setLeftValue(event.target.value);
  };

  const changeRightValue = event => {
    setLeftValue(null);
    setRightValue(event.target.value);
  };

  const changeCategory = event => {
    setCategory(event.target.value);
  };

  const changeNumberOfQuestions = event => {
    setNumberOfQuestions(event.target.value);
  };

  const startQuiz = async () => {
    if (!category || !difficulty || !numberOfQuestions) {
      setErrorMessage('Please select quiz options');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }
    const quizzes = await getQuizzes(category, difficulty, numberOfQuestions);
    if (!quizzes || quizzes.length < numberOfQuestions) {
      setErrorMessage('Couldnt fetch enough amount of quizzes');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }
    setQuestionIndex(0);
    setQuestions(shuffleArray(quizzes));
    setIsQuizStarted(true);
  };

  const finishQuiz = () => {
    const currAnswer = leftValue || rigthValue;
    if (questions[questionIndex].correct_answer_index === parseInt(currAnswer)) {
      setScore(score + 1);
    }
    setLeftValue(null);
    setRightValue(null);
    setIsQuizFinished(true);
  };

  const takeAnotherQuiz = () => {
    setIsQuizStarted(false);
    setNumberOfQuestions(null);
    setDifficulty(null);
    setCategory(null);
    setQuestionIndex(null);
    setQuestions(null);
    setScore(0)
    setIsQuizFinished(false);
  };

  const nextQuestion = () => {
    const currAnswer = leftValue || rigthValue;
    if (questions[questionIndex].correct_answer_index === parseInt(currAnswer)) {
      setScore(score + 1);
    }
    setLeftValue(null);
    setRightValue(null);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <>
      {isQuizStarted ? (
        isQuizFinished ? (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="h2">You scored {score} out of {numberOfQuestions}</Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  fontSize: '12px',
                  marginTop: '20px',
                }}
                variant="contained"
                onClick={() => takeAnotherQuiz()}
              >
                Take another quiz
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={8} style={{ textAlign: 'center' }}>
              <Typography variant="h5">
                {questions[questionIndex].question}
              </Typography>
            </Grid>
            <Grid item xs={5} style={{ textAlign: 'center' }}>
              <FormControl>
                <RadioGroup value={leftValue} onChange={changeLeftValue}>
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label={questions[questionIndex].answers[0]}
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label={questions[questionIndex].answers[1]}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={5} style={{ textAlign: 'center' }}>
              <FormControl>
                <RadioGroup value={rigthValue} onChange={changeRightValue}>
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label={questions[questionIndex].answers[2]}
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label={questions[questionIndex].answers[3]}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  fontSize: '12px',
                  marginTop: '20px',
                }}
                variant="contained"
                onClick={() => {
                  if (questions.length - 1 === questionIndex) finishQuiz();
                  else {
                    nextQuestion();
                  }
                }}
              >
                {questions.length - 1 === questionIndex
                  ? 'Finish'
                  : 'Next question'}
              </Button>
            </Grid>
          </Grid>
        )
      ) : (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography variant="h5">Choose quiz options</Typography>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Difficulty</InputLabel>
              <Select
                value={difficulty}
                onChange={changeDifficulty}
                label="Difficulty"
              >
                <MenuItem value="EASY">Easy</MenuItem>
                <MenuItem value="MEDIUM">Medium</MenuItem>
                <MenuItem value="HARD">Hard</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={changeCategory}
                label="Category"
              >
                <MenuItem value="GRAPH-TRAVERSAL">Graph traversal</MenuItem>
                <MenuItem value="SORTING">Sorting</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'center' }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
              <InputLabel>Number of questions</InputLabel>
              <Select
                value={numberOfQuestions}
                onChange={changeNumberOfQuestions}
                label="Number of questions"
              >
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="15">15</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '20px',
              }}
              variant="contained"
              onClick={() => startQuiz()}
            >
              Start quiz
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              color: '#ff0000',
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <Typography>{errorMessage}</Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Quiz;
