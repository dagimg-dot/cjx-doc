import 'typeface-poppins'
import CjxBodySlogan from './cjxBodySlogan';

export default function CjxBody(){
    return (
        <div relative className="flex flex-col text-center justify-center ">
        <p className="blur-xl text-[400px] font-sans">cjx</p>
        <CjxBodySlogan/>
        </div>
    );
}