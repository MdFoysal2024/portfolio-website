import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react-01.png'
import mongoBDImg from '../assets/mongodb.png'
import nodeImg from '../assets/node.png'
import tailwindImg from '../assets/tailwind.png'
import firebaseImg from '../assets/firebase.png'

const Skills = () => {
    return (
        <div id='skills' className="  mt-24 pt-24">
            <h2 className="text-4xl text-center font-bold py-12"> Skills</h2>

            <div className="grid gap-6 p-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8">

                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='' src={htmlImg} alt="" />
                    <p className='text-xl'>HTML</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img src={cssImg} alt="" />
                    <p className='text-xl'>CSS</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img src={jsImg} alt="" />
                    <p className='text-xl'>JavaScript</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img src={reactImg} alt="" />
                    <p className='text-xl'>React.js</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img src={mongoBDImg} alt="" />
                    <p className='text-xl'>Mongo DB</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img src={nodeImg} alt="" />
                    <p className='text-xl'>Node.js</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img src={tailwindImg} alt="" />
                    <p className='text-xl'>Tailwind</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img src={firebaseImg} alt="" />
                    <p className='text-xl'>Firebase</p>
                </div>




            </div>
        </div>
    );
};

export default Skills;