
import Image from 'next/image';
import tradelicense from '../../assets/images/Trade License.png'
import vt6 from '../../assets/images/sellercalender.png'
const AccountStatement = () => {
    const accountStatements = [

        {
            "title": "Trade License*",
            "No1": "No.",
            "image": "/Trade License.png",
            "No": "0469793",
            "Es1": "12 Dec 2022",
            "Es2": "12 Dec 2022"

        },
        {
            "title": "TIN Certificate*",
            "image": "/TIN Certificate.png",
            "No1": "TIN.",
            "No": "0469793",
            "Es1": "12 Dec 2022",
            "Es2": "12 Dec 2022"

        },
        {
            "title": "Vat Certificate",
            "image": "/Vat Certificate.png",
            "No1": "BIN.",
            "No": "0469793",
            "Es1": "12 Dec 2022",
            "Es2": "12 Dec 2022"

        }, {
            "title": " IRC Certificate",
            "image": "/IRC Certificate.png",
            "No1": "RFC.",
            "No": "0469793",
            "Es1": "12 Dec 2022",
            "Es2": "12 Dec 2022"

        }
        , {
            "title": "ERC Certificate",
            "image": "/ERC Certificate.png",
            "No1": "ERC.",
            "No": "0469793",
            "Es1": "12 Dec 2022",
            "Es2": "12 Dec 2022"

        },
        {
            "title": "Any Association Certificate",
            "image": "/Any Association.png",
            "No1": "No.",
            "No": "0469793",
            "Es1": "12 Dec 2022",
            "Es2": "12 Dec 2022"

        }
    ]
    return (
        <div>
            <div>
                <div className="text-lg breadcrumbs text-[#686868]">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Seller Documents </a>
                        </li>
                        <li className="text-[#001E00] font-semibold ">
                            Account Statement
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[#FB641B] font-semibold text-2xl">
                        Account Statement
                    </h1>
                </div>
            </div>
            <div className="mt-[32px]">
                <div className="max-w-[1426px] h-[1236px] bg-[#FFFFFF] shadow-small rounded-[8px]">
                    <div className="pt-[16px] mx-[16px] grid xl:grid-cols-2 grid-cols-1 gap-[16px]">
                        {
                            accountStatements.map((accountStatement) => <>
                                <div>
                                    <div className="flex items-center gap-[8px]">

                                        <h1 className="text-[#001E00] font-[400] text-[16px]">{accountStatement.title}</h1>

                                        <div className="w-[55px] h-[18px] bg-[#F2F3F7] rounded-[4px] flex justify-center items-center">
                                            <h1 className="text-[#287DF3] text-[12px]">Update</h1>
                                        </div>
                                    </div>

                                    <div className="max-w-[689px] mt-[16px] h-[277px] rounded-[8px] shadow-small border-[1px] border-solid border-[#B7B7B7] bg-[#FFFFFF]">
                                        <div className='flex justify-center pt-[16px] '>
                                            <Image src={accountStatement.image} width={178} height={245} alt=""></Image>
                                        </div>

                                    </div>

                                    <div class="grid grid-cols-3 divide-x divide-[#B7B7B7] max-w-[689px] border-[1px] border-solid h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                                        <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>{accountStatement.No1} <span className='ml-[8px]'>{accountStatement.No}</span></p></div>
                                        <div className='flex justify-between items-center px-[16px]'>
                                            <p className='text-[#707070] text-[13px]'>Es.<span className='ml-[8px]'>{accountStatement.Es1}</span></p>
                                            <Image className='h-[20px] w-[20px] '
                                                src={vt6}
                                                alt='Upload Image'
                                            />
                                        </div>
                                        <div className='flex justify-between items-center px-[16px]'>
                                            <p className='text-[#707070] text-[13px]'>Es. <span className='ml-[8px]'>{accountStatement.Es1}</span></p>
                                            <Image className='h-[20px] w-[20px] '
                                                src={vt6}
                                                alt='Upload Image'
                                            />
                                        </div>
                                    </div>
                                </div></>)
                        }

                        {/* <div>
                            <div className="flex items-center gap-[8px]">

                                <h1 className="text-[#001E00] text-[16px]">Trade License*</h1>

                                <div className="w-[55px] h-[18px] bg-[#F2F3F7] rounded-[4px] flex justify-center items-center">
                                    <h1 className="text-[#287DF3] text-[12px]">Update</h1>
                                </div>
                            </div>

                            <div className="max-w-[689px] mt-[16px] h-[277px] rounded-[8px] shadow-small border-[1px] border-solid border-[#B7B7B7] bg-[#FFFFFF]">
                                <div className='flex justify-center pt-[16px] '>
                                    <Image src={tradelicense} alt=""></Image>
                                </div>

                            </div>

                            <div class="grid grid-cols-3 divide-x divide-[#B7B7B7] max-w-[689px] border-[1px] border-solid h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                                <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>No. 0469793</p></div>
                                <div className='flex justify-between items-center px-[16px]'>
                                    <p className='text-[#707070] text-[13px]'>Es. 12 Dec 2022</p>
                                    <Image className='h-[20px] w-[20px] '
                                        src={vt6}
                                        alt='Upload Image'
                                    />
                                </div>
                                <div className='flex justify-between items-center px-[16px]'>
                                    <p className='text-[#707070] text-[13px]'>Es. 12 Dec 2024</p>
                                    <Image className='h-[20px] w-[20px] '
                                        src={vt6}
                                        alt='Upload Image'
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AccountStatement;