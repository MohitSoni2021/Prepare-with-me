import React, { useEffect, useState } from 'react'
import { DIFFICULTY, SELECTED_LANGUAGE, SELECTED_TOPICS } from '../../DataProvider/PriserveData'
import LandingPageComponent from '../LandingPage/LandingPage';
import GenerateQuizLoaderComponents from '../LandingPage/GenerateQuizLoader';
import { model } from '../../DataProvider/AI';
import MCQFormatContainerLayout from './MCQFormatContainer';
import { SuffleArray } from '../../Helper/CommonFuntion';



const QuizDashboardPageLayout = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [generatedQuestions, setGeneratedQuestions] = useState([]);

    const responseGenerator = async() => {

        let prompt = `Your a University Professor working in exam shell of the Engineering Department and you are know a lot of programming languages and have a deep knowledge in it now you have to create a MCQ test for the University Students you have to provide question their options, correct option and explanation of the questions and it's answer generate the test on the language ${SELECTED_LANGUAGE} and the topics to create test on are ${SELECTED_TOPICS.join(', ')} and maker sure the diffculty of the generated test is ${DIFFICULTY} generate all these details in json format and generate 50 questions also try to generate differet question with different values.
        {
        question: "questioin comes here",
        options: [four options comes here],
        correctAnswer: "correct option comes here,
        explation: "explation comes here with all the required information and examples"
        }
        `

        try {
            const result = await model.generateContent(prompt);
            let jsonDataFormat = (JSON.parse(result.response.text().replace("json", "").replaceAll("```", "")))
            console.log(jsonDataFormat)
            jsonDataFormat = SuffleArray(jsonDataFormat)
            setGeneratedQuestions(jsonDataFormat)
            
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        responseGenerator()
    }, [])


  return (
    <div>
        {
            isLoading ? (
                <GenerateQuizLoaderComponents />
            ) : (
                <div className="overflow-x-hidden">

{generatedQuestions.map((ele, id) => {
                    return (
                        <MCQFormatContainerLayout 
                        questionNumber={id+1}
                        key={id+100}
                        Question={ele.question}
                        Options={ele.options}
                        explaination={ele.explanation}
                        />
                    )
                })}

                </div>
            )
        }
    </div>
  )
}

export default QuizDashboardPageLayout
