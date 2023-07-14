import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

export default function CjxBash() {
        const bashCommands = ["cjx install","cjx download","cjx create","cjx run"]
        const [currentIndex,setCurrentIndex] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex(currentIndex => {
                    if(currentIndex === bashCommands.length - 1){
                        return 0
                    }
                    return currentIndex + 1
                })
            }, 2000);
            return () => clearInterval(interval);
        });

    
    return (
        <div className="flex flex-col bg-black w-[350px] h-[250px] font-consolas text-bash-white mt-18 mr-60 border border-custom-white rounded-lg">
            <div className=" flex border-b border-custom-white  py-4 mb-2">
                <FontAwesomeIcon icon={faCircle} className="text-red-500 text-xs mt-1 ml-5" />
                <FontAwesomeIcon icon={faCircle} className="text-yellow-500 text-xs mt-1 ml-2" />
                <FontAwesomeIcon icon={faCircle} className="text-green-500 text-xs mt-1 ml-2 mr-6" />

                <p className="text-center justify-center ml-16 text-[12px]">bash</p>
            </div>
            <p className="text-[12px] mt-1 tracking-[1.5px] ml-4">{`$ ${bashCommands[currentIndex]}`}</p>
        </div>
    )
}