

const AddressBook = () => {
    return (
        <div>
            <div className=" mx-auto justify-between flex">
                <h1 className="text-2xl text-orange-600">Address Book</h1>
                <h1><span className="text-orange-600">+</span> Add New Address</h1>
            </div>
            <div className="card w-2/3 pt-4 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 pb-72  bg-base-100 shadow-xl">

                <div className="p-2 mb-2 rounded-lg border-black border-2 address-card mr-4">  
                    <div className="flex justify-between">
                        <h1 className="font-semibold">Abdul Korim</h1>
                        <p className='text-sky-600'>Edit</p>
                    </div>
                    <p className="py-3">+8801728178063</p>
                    <p>Bashundhara City Shopping complex, 3 no</p>

                    <p className='text-sky-600'>Office</p>
                </div>
                <div className="p-2 mr-4 mb-2 rounded-lg  border-black border-2">
                    <div className="flex justify-between">
                        <h1 className="font-semibold">Abdul Korim</h1>
                        <p className='text-sky-600'>Edit</p>
                    </div>
                    <p className="py-3">+8801728178063</p>
                    <p>Bashundhara City Shopping complex, 3 no</p>

                    <p className='text-sky-600'>Office</p>
                </div>


            </div>
        </div>
    );
};

export default AddressBook;