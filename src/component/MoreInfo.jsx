import CjxBash from "./cjxBash";
import CjxFeatures from "./cjxFeatures";
export default function MoreInfo(){

    return(
        <div className=" flex flex-col px-[40px] text-custom-pink  ">
            <p className="font-sans text-[52px] font-bold tracking-[-5px] py-5 mt-20">cjx cli</p>
            <div className="flex flex-row justify-between">
            <div className="flex flex-col w-1/3">
            <p className="font-consolas leading-6 text-[18px]">cjx is a command line tool that 
                lets you setup your javaFX development environment in visual studio code.</p>
            
            <CjxFeatures/>
            </div>
            <CjxBash/>
            </div>
            

        </div>
    )   
}