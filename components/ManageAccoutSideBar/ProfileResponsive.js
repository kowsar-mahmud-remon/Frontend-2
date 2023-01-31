import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import profileLinksResponsiveObj from '../../Utils/myProfileLinksResponsive';
const ProfileResponsive = () => {
    return (
        <div>
            <div className='flex items-center gap-[13px]'>
                 <FaArrowLeft className=''></FaArrowLeft>
                <h1 className='text-[20px]  font-[500] text-[#001E00]'>Profile</h1>
            </div>
            <div>
                {
                    profileLinksResponsiveObj?.map((profile, i) => <div
                        key={i}
                       className='flex flex-col' >

                        <Link className="text-[#001E00] ml-[56px] mt-[14px] font-[400]  text-[16px]" href={`/profile/${profile.href}`}><ul><li>{profile.title}</li></ul></Link>
                        <p className=" h-[0px] left-[24px] mt-[14px] top-[229px] border-[2px] border-solid  border-[#F2F2F2] w-[340px] "></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProfileResponsive;