import CjxFeatures from "./cjxFeatures";
export default function MoreInfo(){

    return(
        <div className="w-1/3 flex flex-col px-[40px] text-custom-pink  ">
            <p className="font-sans text-[52px] font-bold tracking-[-5px] py-5 mt-20">cjx cli</p>
            <p className="font-consolas leading-6 text-[18px]">cjx is a command line tool that 
                lets you setup your javaFX development environment in visual studio code.</p>
            <CjxFeatures/>

        </div>
    )   
}