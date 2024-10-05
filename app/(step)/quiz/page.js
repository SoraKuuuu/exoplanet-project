"use client"
import { useState } from 'react';

const Quizz = [
    {
        "question": "What is an exoplanet?",
        "options": {
            "A": "A planet that exists in our solar system",
            "B": "A planet that orbits a star outside our solar system",
            "C": "A moon that orbits a planet",
            "D": "A star that has exploded"
        },
        "correct_answer": "B"
    },
    {
        "question": "Why are exoplanets exciting for scientists?",
        "options": {
            "A": "They are the same as planets in our solar system",
            "B": "They may have conditions that support life",
            "C": "They are all made of gas",
            "D": "They are very easy to study"
        },
        "correct_answer": "B"
    },
    {
        "question": "How many exoplanets have been discovered as of now?",
        "options": {
            "A": "Less than 100",
            "B": "Over 1,000",
            "C": "Over 5,000",
            "D": "Exactly 2,000"
        },
        "correct_answer": "C"
    },
    {
        "question": "Which method is commonly used to discover exoplanets?",
        "options": {
            "A": "Visual observation",
            "B": "Radio telescopes",
            "C": "Transit method",
            "D": "Sound waves"
        },
        "correct_answer": "C"
    },
    {
        "question": "What types of exoplanets have been discovered?",
        "options": {
            "A": "Only gas giants",
            "B": "Only rocky planets",
            "C": "Gas giants, super Earths, and mini-Neptunes",
            "D": "Only planets with life"
        },
        "correct_answer": "C"
    },
    {
        "question": "What does the term 'habitable zone' refer to?",
        "options": {
            "A": "A zone where no planets exist",
            "B": "The region around a star where conditions might be right for life",
            "C": "A place in space that is very cold",
            "D": "A zone only for gas giants"
        },
        "correct_answer": "B"
    },
    {
        "question": "How do scientists determine if an exoplanet might have an atmosphere?",
        "options": {
            "A": "By sending probes to the planet",
            "B": "By analyzing the light from its star as it passes through the planet's atmosphere",
            "C": "By counting the number of moons it has",
            "D": "By looking at pictures from telescopes"
        },
        "correct_answer": "B"
    },
    {
        "question": "What is a super Earth?",
        "options": {
            "A": "A planet that is the same size as Earth",
            "B": "A planet larger than Earth but smaller than gas giants",
            "C": "A planet made entirely of metal",
            "D": "A planet that is much smaller than Earth"
        },
        "correct_answer": "B"
    },
    {
        "question": "Why is the study of exoplanets important?",
        "options": {
            "A": "To find new places for humans to live",
            "B": "To understand the universe and the possibility of life beyond Earth",
            "C": "To gather resources for our solar system",
            "D": "All of the above"
        },
        "correct_answer": "B"
    },
    {
        "question": "What is one challenge in studying exoplanets?",
        "options": {
            "A": "They are very close to Earth",
            "B": "They are usually very bright",
            "C": "They are often far away and faint, making them hard to observe",
            "D": "They never change position"
        },
        "correct_answer": "C"
    }
];

export default function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const currentQuestion = Quizz[currentQuestionIndex];

    const handleAnswerSelection = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === currentQuestion.correct_answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < Quizz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer('');
        } else {
            setIsQuizFinished(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setScore(0);
        setIsQuizFinished(false);
    };

    if (isQuizFinished) {
        return (
            <div className="double-shadow flex flex-col items-center pt-80">
                <h1 className="text-5xl mb-10">Quiz Finished!</h1>
                <p className='text-4xl'>Your score is: {score} / {Quizz.length}</p>
                <button className='double-shadow text-4xl mt-10' onClick={resetQuiz}>Restart Quiz</button>
            </div>
        );
    }

    return (
        <div className="double-shadow pt-80">
            <div className='flex flex-col items-center'>
                <h2 className="text-5xl mb-10">{currentQuestion.question}</h2>
                <form>
                    <table className="table-auto w-full mb-10">
                        <tbody>
                            {Object.entries(currentQuestion.options).map(([key, option]) => (
                                <tr key={key} className="w-full">
                                    <td className="w-10 pr-4">
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={key}
                                            checked={selectedAnswer === key}
                                            onChange={handleAnswerSelection}
                                            className="h-6 w-6 appearance-none border-2 border-gray-400 rounded-full checked:bg-blue-600 checked:border-transparent transition duration-200"
                                        />
                                    </td>
                                    <td className="text-4xl">{option}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
                <button
                    className="text-4xl mt-10 bg-black/70 hover:bg-black text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                >
                    {currentQuestionIndex === Quizz.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
            </div>
        </div>
    );
}
