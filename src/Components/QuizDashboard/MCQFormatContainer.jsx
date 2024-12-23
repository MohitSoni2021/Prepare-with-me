import React, { useRef } from 'react'

const MCQFormatContainerLayout = ({Question, questionNumber, Options=[], explaination}) => {

    const handleClick = (e) => {
        e.target.classList.add('bg-green-600')
        OuterDivRef.current.disabled = true
    }

    const OuterDivRef = useRef(null)

  return (
    <div className='flex gap-16 p-5 w-screen h-screen overflow-x-hidden flex-col items-center'>
      <div className="max-w-[1200px] border-2 h-fit shadow-black rounded-lg flex flex-col gap-10" ref={OuterDivRef}>
        <div className="text-4xl font-space-mono   p-2 m-2 rounded-xl">
            {questionNumber}
            {Question}
        </div>
        <div className="options-container">
            <ol>
            {
                Options.map((option, index) => (
                    <div className="text-3xl font-space-mono  bg-blue-200 p-2 m-2 rounded-xl" onClick={handleClick}>
                        {option}
                    </div>
                ))
            }
            </ol>
        </div>
      </div>
      <div className="max-w-[1200px] border-2 w-full p-3 text-lg shadow-black rounded-lg flex flex-col gap-10">
            {
                explaination
            }
      </div>
    </div>
  )
}

export default MCQFormatContainerLayout
