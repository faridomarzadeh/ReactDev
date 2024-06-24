import { useState } from "react"
export const useCounter = () =>{
    const[counter, setCounter] = useState(0)

    const increaseCount = () => {
        setCounter(counter+1)
    }

    const decreaseCount = () => {
        setCounter(counter-1)
    }

    const reset = () => {
        setCounter(0)
    }

    return {counter, increaseCount, decreaseCount, reset}
}