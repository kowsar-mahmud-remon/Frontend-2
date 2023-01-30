import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCheck } from 'react-icons/fa';
import { profileLinksObj } from '../../Utils/myProfileLinks';
import Profile from './Profile';
const ManageAccoutSideBar = () => {
    const router = useRouter()



    return (
        <div>
            <div>
            

                {
                    profileLinksObj.map((profile, i) => <div
                        key={i}
                        className="mt-4">
                            
                        <Link className={`/profile/${profile.href}` === `/profile/${profile.href}` ? "text-[#FB641B] font-bold mt-[16px] text-[24px]" : "font-bold mt-[16px] text-[24px]"} href={`/profile/${profile.href}`}><h1>{profile.title}</h1></Link>

                        {
                            profile?.links && <ul className='ml-6 mt-[16px]'>

                                {
                                    profile.links.map((p, i) => <Link
                                        key={i}
                                        href={`/profile/${p.href}`}><li className="text-[#686868]  mt-[8px]  text-[16px]">{p.title}</li></Link>)
                                }
                            </ul>
                        }

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAccoutSideBar;