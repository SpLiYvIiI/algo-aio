import axios from 'axios';

const quizApi = 'https://algo-aio-quiz.herokuapp.com';

const getQuizzes = async (category, difficulty) => {
  try {
    const resp = await axios.get(
      `${quizApi}/v1/quizzes?difficulty=${difficulty}&category=${category}`
    );
    return resp.data
  } catch (err) {
    console.log(err.message);
  }
};

export default getQuizzes;
