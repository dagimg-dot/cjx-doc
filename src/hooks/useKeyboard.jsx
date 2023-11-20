import React from 'react'
import { useEffect,useRef } from 'react'

const useKeyboard = () => {
    const inputRef = useRef(null)
    useEffect (()=>{
        const handleKeyPress = (Event) => {
            if (Event.ctrlKey == true && Event.code == 'KeyI') {
                inputRef.current.focus()
            }
        }
        document.addEventListener('keypress',handleKeyPress)

        return () => {
            document.removeEventListener('keypress',handleKeyPress)
        }
    })
    return inputRef
}

export default useKeyboard