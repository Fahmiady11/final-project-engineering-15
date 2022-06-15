import React from 'react';
import RightIcons from '../../Assets/righticon.svg';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';

function FaqPage() {
  const faqList = [
    {
      question: 'How soon will my order ship?',
      answer: 'Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.',
    },
    {
      question: 'Is there any warranty exclusions?',
      answer: 'loren insum',
    },
    {
      question: 'Are there any return exclusions?',
      answer: 'loren insum',
    },
    {
      question: 'Will I be charged for a replacement item?',
      answer: 'loren insum',
    },
    {
      question: 'Can I return an item for a refund?',
      answer: 'loren insum',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center mx-auto items-center p-20 md:flex-row">
        <div className="flex">
          <div className="flex flex-col max-w-sm ">
            <h1 className='text-3xl font-bold mb-4'>Frequent ask qustions</h1>  
            <h1 className='text-sm '>Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.</h1>  
          </div>
        </div>
        <div className="">
          <div className="px-10 pt-10 items-center p-2 text-sm">
            {faqList.map((faq) => (
            <div className="relative w-[400px] overflow-hidden border-b-2 border-grey-500 p-2">
              <input 
                type="checkbox" 
                className='absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer jus'/>
              <div className=" h-12 w-full pl-5 flex items-center">
                <h1 className='text-lg font-bold'>
                  {faq.question}
                </h1>
              </div>
            <div className='absolute top-3 right-3 mt-2 ml-6 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 '>
              <img src={RightIcons} alt="righticon" />
            </div>
            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 ml-1'>
              <div className='p-4'>
                <p>
                  {faq.answer}
                </p>
              </div>
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

export default FaqPage;