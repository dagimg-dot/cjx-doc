import 'typeface-poppins'
import CjxBodySlogan from './cjxBodySlogan';

export default function CjxBody(){
    return (
        <div relative className="flex flex-col bg-bodyGradient text-center justify-center text-custom-pink" >
        <p className="blur-xl text-[400px] font-sans">cjx</p>
        <CjxBodySlogan/>
        </div>
    );
}