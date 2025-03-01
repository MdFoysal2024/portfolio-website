import officeImg from '../assets/office.png'
import graphicImg from '../assets/graphic.png'
import webImg from '../assets/web.png'

const Course = () => {
    return (

        <div id="course" className=" mt-24 pt-24">
            <h2 className="text-4xl text-center py-8 font-bold"> Course</h2>
            <div className=" grid gap-12 pt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="bg-gray-800 p-12 rounded">
                    <img className='w-16 pb-8 pt-32' src={officeImg} alt="" />
                    <h2 className="text-2xl text-gray-300 font-bold"> Computer Office Application</h2>
                    <p className="text-lg text-gray-500">National Skill Standard Basic Course </p>
                    <p className="text-lg text-gray-500">Duration : July-December </p>
                    <p className="text-lg text-gray-500 ">Passing Year : 2019</p>
                </div>
                <div className="bg-gray-800 p-12 rounded">
                    <img className='w-16 pb-8 pt-32' src={graphicImg} alt="" />
                    <h2 className="text-2xl text-gray-300 font-bold">Advance Graphic Design </h2>
                    <p className="text-lg text-gray-500">Creative IT Institute </p>
                    <p className="text-lg text-gray-500">Duration : January-June </p>
                    <p className="text-lg text-gray-500 pb-8">Passing Year : 2021</p>
                </div>
                <div className="bg-gray-800 p-12 rounded">
                    <img className='w-16 pb-8 pt-32' src={webImg} alt="" />
                    <h2 className="text-2xl text-gray-300 font-bold"> Web Development </h2>
                    <p className="text-lg text-gray-500">Programming Hero </p>
                    <p className="text-lg text-gray-500">Duration : July-December </p>
                    <p className="text-lg text-gray-500 pb-8">Passing Year : 2024</p>
                </div>
            </div>
        </div>


    );
};

export default Course;

