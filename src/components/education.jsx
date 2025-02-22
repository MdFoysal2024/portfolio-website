import schoolImg from '../assets/school.png'
import collegeImg from '../assets/college.png'
import universityImg from '../assets/university.png'

const Education = () => {
    return (


        <div id="education" className="mt-24 pt-24  ">
            <h2 className="text-4xl text-center py-8 font-bold"> Education</h2>

            <div className=" grid gap-12 pt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-4">

                <div className="bg-gray-800 p-12 rounded">
                    <img className='w-16 pb-8 pt-32' src={schoolImg} alt="" />
                    <h2 className="text-2xl text-gray-300 font-bold">2011-2012, SESSION : SSC (Dakhil)</h2>
                    <p className="text-lg text-gray-500">Board : Madrasah </p>
                    <p className="text-lg text-gray-500">Group : Science </p>
                    <p className="text-lg text-gray-500">Result : 5.00</p>
                    <p className="text-lg text-gray-500">Passing Year : 2013</p>
                </div>

                <div className="bg-gray-800 p-12 rounded">
                <img className='w-16 pb-8 pt-32' src={collegeImg} alt="" />
                    <h2 className="text-2xl text-gray-300 font-bold">2013-2014, SESSION : HSC</h2>
                    <p className="text-lg text-gray-500">Board : Dhaka </p>
                    <p className="text-lg text-gray-500">Group : Science </p>
                    <p className="text-lg text-gray-500">Result : 4.33</p>
                    <p className="text-lg text-gray-500">Passing Year : 2015</p>
                </div>

                <div className="bg-gray-800 p-12 rounded">
                <img className='w-16 pb-8 pt-32' src={universityImg} alt="" />
                    <h2 className="text-2xl text-gray-300 font-bold"> 2016-2017, SESSION : BSc (Pass Course) </h2>
                    <p className="text-lg text-gray-500">Board : Dhaka University (7th College)</p>
                    <p className="text-lg text-gray-500"> </p>
                    <p className="text-lg text-gray-500">Result : 2.61</p>
                    <p className="text-lg text-gray-500">Passing Year : 2023</p>
                </div>
            </div>
        </div>




    );
};

export default Education;