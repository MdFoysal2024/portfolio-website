//import resumeImg from '../assets/My Resume A4 copy.jpg'
import resumeImg2 from '../assets/My Resume 1 copy.jpg'
import resume from '../assets/My Resume 1.pdf'

const Resume = () => {
  return (
    <div className='pt-24 flex flex-col text-center justify-center'>
      {/* <img className='p-6' src={resumeImg} alt="" /> */}


      <a href={resume} download="Resume">

        <button className='bg-red-600 hover:bg-red-800 cursor-pointer text-white font-bold px-4 py-2 rounded-lg'>
          Resume Download
        </button>


      </a>




      <img className='p-6' src={resumeImg2} alt="" />
    </div>
  );
};

export default Resume;