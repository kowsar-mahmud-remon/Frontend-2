import Image from 'next/image'
import img1 from '../../assets/images/rightnavSeller/Group 1752.png'
import img2 from '../../assets/images/rightnavSeller/Group 1753.png'
import img3 from '../../assets/images/rightnavSeller/Vector (5).png'
import img4 from '../../assets/images/rightnavSeller/Vector (6).png'
import img5 from '../../assets/images/rightnavSeller/Vector (7).png'


const SellerRightNav = () => {
    const images = [img3, img1, img4, img5, img2];
    return (
      <div className="relative hidden md:block ">
        <div className="fixed top-0 right-0 z-50 h-screen w-[100px] bg-white shadow-xl">
          <div className="flex flex-col items-center">
            {images.map((image) => (
              <>
                <Image src={image} alt="" className='my-8'/>
              </>
            ))}
          </div>
        </div>
      </div>
    );
};

export default SellerRightNav;