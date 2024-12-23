import React, { useEffect, useState } from 'react'
import { DIFFICULTY, SELECTED_LANGUAGE, SELECTED_TOPICS } from '../../DataProvider/PriserveData'
import LandingPageComponent from '../LandingPage/LandingPage';
import GenerateQuizLoaderComponents from '../LandingPage/GenerateQuizLoader';



const QuizDashboardPageLayout = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let prompt = `Your a University Professor working in exam shell of the Engineering Department and you are know a lot of programming languages and have a deep knowledge in it now you have to create a MCQ test for the University Students you have to provide question their options, correct option and explanation of the questions and it's answer generate the test on the language ${SELECTED_LANGUAGE} and the topics to create test on are ${SELECTED_TOPICS.join(', ')} and maker sure the diffculty of the generated test is ${DIFFICULTY} generate all these details in json format
        {
        question: "questioin comes here",
        options: [four options comes here],
        correctAnswer: "correct option comes here,
        explation: "explation comes here with all the required information and examples"
        }
        `
    })


  return (
    <div>
        {
            <GenerateQuizLoaderComponents />
        }
    </div>
  )
}

export default QuizDashboardPageLayout
