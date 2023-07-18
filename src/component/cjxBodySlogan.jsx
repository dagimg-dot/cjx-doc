
export default function CjxBodySlogan(){
    const scrollToMoreInfo = () => {
        const element = document.getElementById("cjx-heading");
        element.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div className="flex flex-col justify-center items-center  text-center absolute top-55 left-60 right-60 text-custom-pink">
            <p className="text-[60px] tracking-[-6.42px] leading-[60px] font-bold lg:mx-60">
                Effortless JavaFX Environment Setup in VS Code</p>
                <p className="text-[20px] pb-5 pt-3">Get Coding in Minutes!</p>
                <a onClick={scrollToMoreInfo} className="bg-gradient-to-r from-amber-800 to-yellow-500 py-1 px-9 text-white rounded-md cursor-default">Explore</a>              
            </div>
    )
}