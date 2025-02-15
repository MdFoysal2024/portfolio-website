import { FaFacebook, FaGithub } from 'react-icons/fa';
import portfolioImg from '../assets/portfolio-image.png'
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='mt-16 border'>

      <div className=" flex flex-col items-center justify-between lg:flex-row">

        <div className='lg:w-1/2'>
          <h3 className=" text-lg lg:text-2xl font-medium"> Hello, I am</h3>
          <h1 className=" text-3xl lg:text-7xl font-bold py-4"> MD Foysal </h1>
          <h3 className=" text-xl lg:text-3xl font-medium"> Frontend Developer</h3>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className='flex justify- gap-4 py-4 text-3xl'>
            <a className='text-blue-600' href="https://www.facebook.com/profile.php?id=61560835027825" target='_blank'><FaFacebook /></a>
            <a className='text-blue-600' href="https://www.linkedin.com/in/md-foysal-74784a210/" target='_blank'><ImLinkedin /></a>
            <a className='text-gray-800' href="https://github.com/MdFoysal2024" target='_blank'><FaGithub /></a>
          </div>

          <Link to='/resume'>
            <button className="btn mt-4 bg-[#3dc0f3] py-4 px-8 text-lg">My Resume</button>
          </Link>
        </div>

        <div className='lg:w-1/2 flex justify-end'>
          <img className='w-[480px]' width={''} src={portfolioImg} alt="" />/
        </div>

      </div>

    </div>
  );
};

export default Banner;