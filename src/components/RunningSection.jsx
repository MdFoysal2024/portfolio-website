import Marquee from "react-fast-marquee";
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react-01.png'
import mongoBDImg from '../assets/mongodb.png'
import nodeImg from '../assets/node.png'
import tailwindImg from '../assets/tailwind.png'
import firebaseImg from '../assets/firebase.png'

const RunningSection = () => {
    return (
        <div className="mt-24">
            <Marquee>
           
                <div className=" rounded-2xl  flex flex-row gap-1 mr-32 items-center">
                    <img className='w-10' src={htmlImg} alt="" />
                    <p className='text-xl'>HTML</p>
                </div>
                <div className=" rounded-2xl  flex flex-row gap-1 mr-32 items-center">
                    <img className='w-10' src={cssImg} alt="" />
                    <p className='text-xl'>CSS</p>
                </div>
                <div className=" rounded-2xl  flex flex-row gap-1 mr-32 items-center">
                    <img className='w-10' src={jsImg} alt="" />
                    <p className='text-xl'>JavaScript</p>
                </div>
                <div className=" rounded-2xl  flex flex-row gap-2 mr-32 items-center">
                    <img className='w-10' src={reactImg} alt="" />
                    <p className='text-xl'>React.js</p>
                </div>
                <div className=" rounded-2xl  flex flex-row gap-1 mr-32 items-center">
                    <img className='w-10' src={mongoBDImg} alt="" />
                    <p className='text-xl'>Mongo DB</p>
                </div>
                <div className=" rounded-2xl  flex flex-row gap-2 mr-32 items-center">
                    <img className='w-10' src={nodeImg} alt="" />
                    <p className='text-xl'>Node.js</p>
                </div>
                <div className=" rounded-2xl  flex flex-row gap-3 mr-32 items-center">
                    <img className='w-10' src={tailwindImg} alt="" />
                    <p className='text-xl'>Tailwind</p>
                </div>
                <div className="  rounded-2xl  flex flex-row gap-1 mr-32 items-center">
                    <img className='w-10' src={firebaseImg} alt="" />
                    <p className='text-xl'>Firebase</p>
                </div>


                </Marquee> 
        </div>
    );
};

export default RunningSection;