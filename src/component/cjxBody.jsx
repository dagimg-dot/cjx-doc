import 'typeface-poppins'
import CjxBodySlogan from './cjxBodySlogan';

export default function CjxBody(){
    return (
        <div relative="true" className="flex flex-col  text-center justify-center text-custom-pink -mt-10" >
        <p className="blur-xl text-[400px] font-sans">cjx</p>
        <CjxBodySlogan/>
        </div>
    );
}