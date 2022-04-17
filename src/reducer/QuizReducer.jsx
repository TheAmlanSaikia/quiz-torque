import { QuizData } from "../data";

export const initialstate = {
  quizCategory: null,
  questions: [],
  selectedanswer: null,
  correctanswer: "",
  score: 0,
};

const QuizReducer = (quizstate, { type, payload, correct }) => {
  switch (type) {
    case "ADD_CATEGORIES": {
      return {
        ...quizstate,
        quizCategory: payload,
      };
    }

    case "ADD_QUESTIONS": {
      return {
        ...quizstate,
        questions: QuizData.filter((item) => item.Name === payload)[0]
          .QuestionsData,
      };
    }

    case "CHECK_ANSWER": {
      return {
        ...quizstate,
        selectedanswer: payload,
        correctanswer: correct,
      };
    }

    case "SET_SCORE": {
      return {
        ...quizstate,
        score:
          quizstate.selectedanswer === quizstate.correctanswer
            ? quizstate["score"] + payload
            : quizstate.score,
      };
    }

    case "RESET_ALL": {
      return {
        quizCategory: null,
        questions: [],
        selectedanswer: null,
        correctanswer: null,
        score: 0,
      };
    }
  }
};

export { QuizReducer };
