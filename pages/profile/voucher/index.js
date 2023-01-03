

const Voucher = () => {
    return (
        <div>
            <h1 className="text-2xl py-4 text-orange-600">Voucher</h1>
            <div className="card   shadow-xl">
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Active</th>
                                <th>Uses</th>
                                <th>Voucher Code</th>
                                <th>Valid From</th>
                                <th>Valid Until</th>
                                <th>Value</th>

                            </tr>
                        </thead>




                    </table>
                </div>
                <p><span className="text-white bg-orange-600">1</span></p>
            </div>

        </div>
    );
};

export default Voucher;