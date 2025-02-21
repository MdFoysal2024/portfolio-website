

const Education = () => {
    return (
        <div className="flex flex-row justify-between">
            {/* Education section */}
            <div id="education" className="relative w-1/2 mt-24 pt-24  ">
                <h2 className="text-4xl text-center py-8 font-bold"> Education</h2>
                <p className="border-2 w-6 h-6 absolute -translate-x-8 bg-red-600 rounded-full"></p>
                <div className=" grid gap-12 pt-6 grid-cols-1 border-l-6 px-4">
                    <p className="border-2 w-6 h-6 absolute -translate-x-8 bg-red-600 rounded-full"></p>
                    <div className="bg-gray-800 p-12 rounded">
                        <h2 className="text-2xl text-gray-300 font-bold">2011-2012, SESSION : SSC (Dakhil)</h2>
                        <p className="text-lg text-gray-500">Board : Madrasah </p>
                        <p className="text-lg text-gray-500">Group : Science </p>
                        <p className="text-lg text-gray-500">Result : 5.00</p>
                        <p className="text-lg text-gray-500">Passing Year : 2013</p>
                    </div>
                    <p className="border-2 w-6 h-6 absolute -translate-x-8 bg-red-600 rounded-full"></p>
                    <div className="bg-gray-800 p-12 rounded">
                        <h2 className="text-2xl text-gray-300 font-bold">2013-2014, SESSION : HSC</h2>
                        <p className="text-lg text-gray-500">Board : Dhaka </p>
                        <p className="text-lg text-gray-500">Group : Science </p>
                        <p className="text-lg text-gray-500">Result : 4.33</p>
                        <p className="text-lg text-gray-500">Passing Year : 2015</p>
                    </div>
                    <p className="border-2 w-6 h-6 absolute -translate-x-8 bg-red-600 rounded-full"></p>
                    <div className="bg-gray-800 p-12 rounded">
                        <p className="border-2 w-6 h-6 absolute -translate-x-20 bg-red-600 rounded-full"></p>
                        <h2 className="text-2xl text-gray-300 font-bold"> 2016-2017, SESSION : BSc (Pass Course) </h2>
                        <p className="text-lg text-gray-500">Board : Dhaka University (7th College)</p>
                        <p className="text-lg text-gray-500"> </p>
                        <p className="text-lg text-gray-500">Result : 2.61</p>
                        <p className="text-lg text-gray-500">Passing Year : 2023</p>
                    </div>
                </div>
            </div>



            {/* course section */}

            <div id="course" className=" mt-24 pt-24 w-1/2">
                <h2 className="text-4xl text-center py-8 font-bold"> Course</h2>
                <div className=" grid gap-12 pt-6 grid-cols-1 ">
                    <div className="bg-gray-800 p-12 rounded">
                        <h2 className="text-2xl text-gray-300 font-bold"> Computer Office Application</h2>
                        <p className="text-lg text-gray-500">National Skill Standard Basic Course </p>
                        <p className="text-lg text-gray-500">Duration : July-December </p>
                        <p className="text-lg text-gray-500">Passing Year : 2019</p>
                    </div>
                    <div className="bg-gray-800 p-12 rounded">
                        <h2 className="text-2xl text-gray-300 font-bold">Advance Graphic Design </h2>
                        <p className="text-lg text-gray-500">Creative IT Institute </p>
                        <p className="text-lg text-gray-500">Duration : January-June </p>
                        <p className="text-lg text-gray-500">Passing Year : 2021</p>
                    </div>
                    <div className="bg-gray-800 p-12 rounded">
                        <h2 className="text-2xl text-gray-300 font-bold"> Web Development </h2>
                        <p className="text-lg text-gray-500">Programming Hero </p>
                        <p className="text-lg text-gray-500">Duration : July-December </p>
                        <p className="text-lg text-gray-500">Passing Year : 2024</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Education;