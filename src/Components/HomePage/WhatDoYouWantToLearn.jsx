import React, { useState } from 'react'
import ButtonCheckboxGroup from '../../GenericComponent/CheckboxGroupGenericCompo';
import ButtonRadioGroup from '../../GenericComponent/RadioGroupGenericComponent';
import { FaArrowRight } from 'react-icons/fa';
import CustomSelect from '../../GenericComponent/SelectOptionsGenericCompo';
import { LANGUAGES_OPTIONS, TEST_LEVEL } from '../../DataProvider/HomePage';
import { RiAiGenerate2 } from 'react-icons/ri';
import { model } from '../../DataProvider/AI';
import { SELECTED_TOPICS, setDIFFICULTY, setSELECTED_LANGUAGE, setSELECTED_TOPICS } from '../../DataProvider/PriserveData';
import { useNavigate } from 'react-router-dom';

const WhatDoYouWantToLearnSection = () => {

  const changeTo = useNavigate()
  
  const [result, setResult] = useState("")

  const [selectedLanguage, setSeletedLanguage] = useState("")
  const handleResultChange = async(selectedValue) => {
    setSELECTED_LANGUAGE(selectedValue)
    setSeletedLanguage(selectedValue)

      setLearningTopic((pre) => [])
        console.log('Selected:', selectedValue);
        const prompt = `Give me 12 simple topics in ${selectedValue} to learn using this json format ['topic1' ... 'topic12']`;
        console.log(prompt);
        const result = await model.generateContent(prompt);
        setResult(result.response.text().replace("json", "").replaceAll("```", ""));
      
        (JSON.parse(result.response.text().replace("json", "").replaceAll("```", ""))).forEach((ele)=>{
          setLearningTopic((prev) => {
            return ([...prev, { value: ele, label: ele}])
          })
        })

        console.log(learningTopic);
  }
  
  // Handling Learning Topic options
  const [learningTopic, setLearningTopic] = useState([])
  const handleLearningTopicChange = (values) => {
    setSELECTED_TOPICS(values)
  }
  
  // Handling Diffculty options 
  const [difficulty, setDifficulty] = useState("")
  const handleDifficultyChange = (selectedValue) => {
    setDifficulty(selectedValue)
    console.log(selectedValue)
    setDIFFICULTY(selectedValue)
  }

  // Handle Generate Options 
  const handleGenerateTestOptions = () => {
    // changeTo('/datadashboard')
    console.log(selectedLanguage)
    console.log(SELECTED_TOPICS)
    console.log(difficulty)
  }
  

  return (
      <div className="">
            <div className='h-screen flex items-center flex-col p-10 gap-10 relative'>
              <h1 className="text-7xl font-space-mono font-extrabold">What Do You Want To Learn ?</h1>

              {/* Language Selector */}
              <div className="p-4 flex flex-col gap-5 w-full">
                <h1 className='text-4xl font-bold font-space-mono'>Select Language :</h1>
                  <div className="">
                    <ButtonRadioGroup
                        fontsize={"text-3xl"} 
                        options={LANGUAGES_OPTIONS} 
                        defaultValue="medium"
                        onChange={handleResultChange}
                        name="size-selection"
                    />
                  </div>
                </div>

                {/* Topic Selector */}
                <div className="p-4 flex flex-col gap-5 w-full">
                  <h1 className='text-4xl font-bold font-space-mono'>Select Topics :</h1>
                  <div className="text-xl">
                    <ButtonCheckboxGroup 
                    options={learningTopic}
                    onChange={handleLearningTopicChange}
                    
                    />
                  </div>
                </div>

                {/* Diffculty Selector */}
                <div className="p-4 flex flex-col gap-5 w-full">
                  <h1 className='text-4xl font-bold font-space-mono'>Select Diffculty Level :</h1>
                  <div className="">
                    <ButtonRadioGroup
                        fontsize={"text-3xl"} 
                        options={TEST_LEVEL} 
                        defaultValue="medium"
                        name="size-selection"
                        onChange={handleDifficultyChange}
                    />
                  </div>
                </div>

                {/* Generate Test Btn */}
                <div className="" onClick={handleGenerateTestOptions}>
                  <button className='flex gap-3 items-center text-3xl px-12 py-3 rounded-md font-space-mono bg-gradient-to-r from-yellow-600 to-pink-600 text-white'>  <RiAiGenerate2 />
                  Generate</button>
                </div>
          </div>
          <div className="h-screen w-screen bg-blue-100">
              {result}
          </div>
      </div>
  )
}

export default WhatDoYouWantToLearnSection
