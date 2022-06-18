import React from 'react';
import imgAbout from '../../Assets/img-about.svg';
import github from '../../Assets/github.svg';
import linkedin from '../../Assets/linkedIn.svg';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import fahmi from '../../Assets/About/fahmi.jpg';
import rachmat from '../../Assets/About/rachmat.jpg';
import nico from '../../Assets/About/nico.jpg';
import kevin from '../../Assets/About/kevin.jpg';
import winnie from '../../Assets/About/winnie.jpg';
import yusuf from '../../Assets/About/yusuf.jpg';


function AboutPage() {
  const listTeam = [
    {
      name: 'Muhammad Fahmi Ady Susilo',
      role: 'Frontend Developer',
      image: fahmi,
      github: github,
      linkedin: linkedin,
      linkGithub: 'https://github.com/Fahmiady11/',
      linkLinkedin: 'https://www.linkedin.com/in/muhammad-fahmi-ady-susilo-ba05a41b0/',
    },
    {
      name: 'Rachmat Agung Ananda',
      role: 'Backend Developer',
      image: rachmat,
      github: github,
      linkedin: linkedin,
      linkGithub: 'https://github.com/rchmatagung',
      linkLinkedin: 'https://www.linkedin.com/in/rachmat-agung-ananda-013725173/',
    },
    {
      name: 'Nicolas Sanjaya',
      role: 'Frontend Developer',
      image: nico,
      github: github,
      linkedin: linkedin,
      linkGithub: 'https://github.com/nicolsan',
      linkLinkedin: 'https://www.linkedin.com/in/nicolas-sanjaya/',
    },
    {
      name: 'Kevin Maulana Nasrullah',
      role: 'Backend Developer',
      image: kevin,
      github: github,
      linkedin: linkedin,
      linkGithub: 'https://github.com/kevinmaulanan',
      linkLinkedin: 'https://www.linkedin.com/in/kevin-maulana-nasrullah/',
    },
    {
      name: 'Winnie Monica',
      role: 'Backend Developer',
      image: winnie,
      github: github,
      linkedin: linkedin,
      linkGithub: 'https://github.com/winniemonica',
      linkLinkedin: 'https://www.linkedin.com/in/winnie-monica-87b280207/',
    },
    {
      name: 'Yusuf Supriadi',
      role: 'Backend Developer',
      image: yusuf,
      github: github,
      linkedin: linkedin,
      linkGithub: 'https://github.com/cupyusuf/',
      linkLinkedin: 'https://www.linkedin.com/in/yusuf-supriadi/',
    },
  ]

  return (
    <>
      <Navbar />
      <div className='pt-10'>
        <div className='flex flex-col items-center '>
          <div className='bg-orange-500 justify-center rounded-t rounded-2xl max-w-[500px] px-20 pb-10 md:max-w-[850px] pt-10'>
            <div className='items-center'>
              <img src={imgAbout} alt='img-about' className='w-200'></img>
              <div>
                <div className='bg-gray-200 max-w-100 items-center text-center rounded-xl p-5'>
                  <h1 className=' text-md font-bold '>Tentang CodeIn</h1>
                  <h1 className=' text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                </div>
              </div>
            </div>
          
          </div>
        </div>

        
        <div className='flex justify-center p-10'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2 '>
          {listTeam.map((team) => (
            <div className='border border-black rounded-xl p-5 text-center shadow-md'>
              <div className='flex flex-row justify-center mt-2'>
                <img alt='avatar' className='w-32 h-32 border rounded-full bg-center' src={team.image}></img>
              </div>
              <p className='font-bold text-md'>{team.name}</p>
              <p className='text-gray-600 text-xs'>{team.role}</p>
              <div className='flex flex-row justify-center mt-2'>
                <a href={team.linkGithub} ><img src={team.github} alt='github-logo' className='w-8'/></a>
                <a href={team.linkLinkedin} ><img src={team.linkedin} alt='linkedin-logo' className='w-8' /></a>
              </div>
            </div>
          ))}
          </div>
        </div>
        

      </div>
      <Footer />
    </>
  )
}

export default AboutPage