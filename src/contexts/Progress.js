/*여러화면에서 하나의 상태를 이용하기위해 전역적으로 상태를 관리하는법 Context API*/
import React,{useState, createContext} from "react";


const ProgressContext = createContext({
    inProgress: false,
    spinner:()=>{},
})

const ProgressProvider =({children}) =>{
    const [inProgress, setInProgress] = useState(false)
    const spinner = {
        start:() =>setInProgress(true),
        stop:() => setInProgress(false)  
    };
    const value= {inProgress, spinner};
    return(
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    )
}

export {ProgressContext, ProgressProvider}