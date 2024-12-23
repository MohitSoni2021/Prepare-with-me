import React from 'react'
import {motion} from 'motion/react'
import { Blocks } from 'react-loader-spinner'

const GenerateQuizLoaderComponents = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col'>
        <motion.div 
        
        animate={{ opacity: 1, transition: { duration: 1, repeat:Infinity }, rotate: [0, -90, -90, 0, 90, 90, 0],  }}
        
        >
          
                <Blocks
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
                />

        </motion.div>
        <motion.p
        className='text-xl'
        animate={{ opacity: [0, 1, 1, 0], transition: { duration: 1, repeat:Infinity }, scale: [1, 1.01, 1.01, 1] }}
        >
            Generating...
        </motion.p>
    </div>
  )
}

export default GenerateQuizLoaderComponents
