import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  const router = useRouter();

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 1) {
        router.push("liveChatTwo");
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <p className='mt-8 text-[40px] xl:text-[48px] font-bold text-[#001E00]'>{seconds}</p>
    </div>
  );
};

export default Timer;