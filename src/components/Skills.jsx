import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import expressjs from '../assets/expressjs.png';
import mongodb from '../assets/mongodb.png';

const skillsData = [
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'Javascript', image: javascript },
  { name: 'Tailwind', image: tailwind },
  { name: 'React', image: react },
  { name: 'Node', image: node },
  { name: 'Express', image: expressjs },
  { name: 'MongoDB', image: mongodb }
];

const Skills = () => {
  return (
    <div id='skill' className='my-10'>
        <div className="pb-8 text-center">
                <p className='text-4xl mb-3 font-bold primary-color'>My Tech Skills</p>
               
            </div>
      <div className='hidden md:flex flex-wrap justify-center items-center max-w-[1200px] mx-auto'>
        {skillsData.map((skill, index) => (
          <div key={index} className="max-w-xs border-2 p-4 m-4 rounded-md shadow-md bg-black">
            <img src={skill.image} alt={skill.name} className="object-cover object-center w-full rounded-t-md h-20 md:h-36" />
            <div className="flex flex-col justify-between pt-2">
              <h2 className="text-2xl text-center text-white font-semibold">{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>
{/* mobile */}
      <div className='md:hidden flex flex-wrap justify-center items-center max-w-[1200px] mx-auto'>
        {skillsData.map((skill, index) => (
          <div key={index} className="max-w-xs border-2 p-2 m-2 rounded-md shadow-md bg-black">
            <img src={skill.image} alt={skill.name} className="object-cover object-center w-full rounded-t-md h-20 " />
            <div className="flex flex-col justify-between pt-2">
              <h2 className="text-md text-center text-white font-semibold">{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Skills;
