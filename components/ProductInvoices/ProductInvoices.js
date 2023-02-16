import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/tomato.png";
const ProductInvoices = () => {
  const datas = [
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
    {
      img: img1,
      name: "Tomato (Local) 500 ±30 gm",
    },
  ];
  return (
    <div className="w-full mt-7">

      <div className="lg:max:w-[1426px] mx-auto text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Products</p>
          <p className='text-[#001E00] font-medium'>{">"} Product Invoices</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Product Invoices</p>
      </div>

      <div className="rounded shadow-xl p-6 min-h-screen mt-8">
        <div className="flex flex-wrap gap-4 md:justify-start justify-center">
          {datas.map((data) => (
            <>
              <div className="w-[183px] p-2 shadow-xl rounded-lg">
                <Image src={data.img} alt="" />
                <h3 className="font-[500] text-center text-base mt-4">{data.name}</h3>
                <div className="flex justify-center pb-4 mt-4">
                  <Link
                    href="productInvoiceDetails"
                    className=" bg-[#EAF2FE] text-[#287DF3] rounded text-[13px] text-center"
                  >
                    <button className="py-1 px-[13px]">View Invoices</button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>


    </div>
  );
};

export default ProductInvoices;
