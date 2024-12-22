import React from 'react'
import * as motion from "motion/react-client"




const LandingPageComponent = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen flex-col text-5xl font-extrabold font-serif">
            <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 2 } }}
            >
                <h2>Welcome To</h2>
            </motion.div>

            
            <motion.div 
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ x: -200, opacity: 0, transition: { duration: 0.5 } }}
            >
                <h1>CodeLearner</h1>
            </motion.div>
        </div>
    )
}

export default LandingPageComponent
