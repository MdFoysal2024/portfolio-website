import { FaFacebook, FaGithub } from 'react-icons/fa';
import portfolioImg from '../assets/portfolio-image.png'
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className=' px-12 lg:px-0 pt-36'>

      <div className=" flex flex-col items-center gap-12 justify-between lg:flex-row">

        <div className='lg:w-1/2'>
          <h3 className=" text-lg lg:text-3xl text-gray-600 font-medium"> Hello, I am</h3>
          <h1 className=" text-3xl lg:text-7xl font-bold py-4"> MD Foysal </h1>
          <h3 className=" text-xl lg:text-3xl text-gray-600 font-medium"> Frontend Developer</h3>
          <p className="py-6 text-lg text-justify text-gray-300">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandaecupiditate voluptatem et a id nisi.
          </p>
          <div className='flex justify- gap-12 py-4 text-3xl'>
            <a className='text-blue-600' href="https://www.facebook.com/profile.php?id=61560835027825" target='_blank'><FaFacebook /></a>
            <a className='text-blue-600' href="https://www.linkedin.com/in/md-foysal-74784a210/" target='_blank'><ImLinkedin /></a>
            <a className='text-gray-400' href="https://github.com/MdFoysal2024" target='_blank'><FaGithub /></a>
          </div>

          <Link to='/resume'>
            <button className="btn mt-4 bg-[#ffffff] py-4 px-10 text-lg">My Resume</button>
          </Link>
        </div>

        <div className='lg:w-1/2 flex justify-end'>
          <img className='w-[640px]' width={''} src={portfolioImg} alt="" />
        </div>

      </div>

    </div>
  );
};

export default Banner;