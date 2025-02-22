import About from './About';
import Banner from './Banner'
import Contact from './contact';
import Course from './Course';
import Education from './education';
import My_Project from './my_project';
import RunningSection from './RunningSection';
import Skills from './Skills';
const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <RunningSection></RunningSection>
            <About></About>
            <Skills></Skills>

            <Education></Education>
            <Course ></Course>

            <My_Project></My_Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;