import Lottie from 'lottie-react';
import contactAnimation from '../../public/contact-animation1.json'


const Contact = () => {
    return (

        <div id='contact' className="  mt-24 py-24 ">
            <h2 className="text-4xl text-center font-bold py-8"> Contact Me</h2>

            <div className="grid gap-6 pt-6 grid-cols-1 md:grid-cols-2 ">

                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">

                    <div className="  w-full  ">
                        <form className="card-body">
                            <div className="form-control">

                                <input type="email" placeholder="Your Name" className="input input-bordered bg-none rounded-lg border-[#05425d] py-6 bg-gray-800 w-full" required />
                            </div>
                            <div className="form-control">

                                <input type="password" placeholder="Your Email" className="input input-bordered py-6 rounded-lg border-[#05425d] bg-gray-800 w-full" required />

                            </div>
                            <div className="form-control">

                                <textarea className="rounded-lg p-3 border-[#05425d] w-full" cols={50} rows={10} placeholder="Write Here"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="cursor-pointer text-lg px-8 py-3 font-medium border-0 rounded-lg bg-[#05425d]">Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className=" flex flex-col  items-center">

                    {/* Lottie Animation */}

                    <div className=" ">
                        <Lottie className=' w-[480px]' animationData={contactAnimation}></Lottie>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;