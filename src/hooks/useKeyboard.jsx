import React from 'react'
import { useEffect,useRef } from 'react'
import useSearch from './useSearch'

const useKeyboard = () => {
    const inputRef = useRef(null)
    useEffect (()=>{
        const handleKeyDown = (Event) => {
            if (Event.ctrlKey == true && Event.code == 'KeyK') {
                Event.preventDefault()
                inputRef.current.focus()
            } 
        }
        document.addEventListener('keydown',handleKeyDown)

        return () => {
            document.removeEventListener('keydown',handleKeyDown)
        }
    })
    return inputRef
}

export default useKeyboard