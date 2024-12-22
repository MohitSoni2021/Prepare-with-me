import React, { useState } from 'react'
import ButtonCheckboxGroup from '../../GenericComponent/CheckboxGroupGenericCompo';
import ButtonRadioGroup from '../../GenericComponent/RadioGroupGenericComponent';
import { FaArrowRight } from 'react-icons/fa';
import CustomSelect from '../../GenericComponent/SelectOptionsGenericCompo';
import { LANGUAGES_OPTIONS, TEST_LEVEL } from '../../DataProvider/HomePage';
import { RiAiGenerate2 } from 'react-icons/ri';
import { model } from '../../DataProvider/AI';

const WhatDoYouWantToLearnSection = () => {

  const [result, setResult] = useState("")
  const [learningTopic, setLearningTopic] = useState([])


    const handleChange = async(selectedValue) => {
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
      };


  return (
      <div className="">
            <div className='h-screen flex items-center flex-col p-10 gap-10 relative'>
              <h1 className="text-7xl font-space-mono font-extrabold">What Do You Want To Learn ?</h1>
              <div className="p-4 flex flex-col gap-5 w-full">
                <h1 className='text-4xl font-bold font-space-mono'>Select Language :</h1>
                  <div className="">
                    <ButtonRadioGroup
                        fontsize={"text-3xl"} 
                        options={LANGUAGES_OPTIONS} 
                        defaultValue="medium"
                        onChange={handleChange}
                        name="size-selection"
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-5 w-full">
                  <h1 className='text-4xl font-bold font-space-mono'>Select Topics :</h1>
                  <div className="text-xl">
                    <ButtonCheckboxGroup 
                    options={learningTopic}
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-5 w-full">
                  <h1 className='text-4xl font-bold font-space-mono'>Select Diffculty Level :</h1>
                  <div className="">
                    <ButtonRadioGroup
                        fontsize={"text-3xl"} 
                        options={TEST_LEVEL} 
                        defaultValue="medium"
                        name="size-selection"
                    />
                  </div>
                </div>
                <div className="">
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
