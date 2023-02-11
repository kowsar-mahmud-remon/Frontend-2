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
    <div className="w-full rounded shadow-xl p-8 min-h-screen">
      <div className="flex flex-wrap md:justify-start justify-center">
        {datas.map((data) => (
          <>
            <div className="w-[183px] p-2 mr-6 mb-6 shadow-xl rounded-lg">
              <Image src={data.img} alt="" />
              <h3 className="font-[500] text-center">{data.name}</h3>
              <div className="flex justify-center mt-1">
                <Link
                  href="/ProductInvoiceDetails"
                  className="p-1 bg-blue-100 text-blue-600 rounded text-[12px] text-center"
                >
                  View Invoices
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductInvoices;
