import React from 'react';
import style from "../../styles/campaignManagementTwo.module.css";

const HomePageSignIn = () => {
  return (
    <div className='lg:w-[400px] mx-auto mt-[70px] text-center'>
      <h2 className='lg:text-2xl text-lg text-[#001E00] font-bold'>See personalized recommendations</h2>
      <button className={`btn font-bold text-2xl h-[56px] mt-4 rounded-lg normal-case text-center ${style.homeSignInBg}`}>Sign in</button>
      <p className='text-base text-[#001E00] mt-4 font-medium'>New customer? <span className='text-[#287DF3]'>Start here.</span></p>
    </div>
  );
};

export default HomePageSignIn;