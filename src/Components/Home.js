import React from 'react'

export const Home = () => {
    return (
        <>
            {/* --------------------------navbar----------------------------------------------------- */}



            <nav className="bg-white  fixed w-full z-20  top-0 left-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <p className="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            BITMEMOIR
                        </span>
                    </p>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </nav>

            {/* ----------------------------- navbar ---------------------------------------------------- */}



            <div className="max-w-[500px] mx-auto">
                <div className="text-black mt-[6rem] text-center font-bold text-3xl">
                    Welcome To BITMEMOIR <span className="gradienttext">IDO Sale</span>
                </div>

                <div className="flex justify-between mt-20 max-w-[500px] mx-auto md:text-xl">
                    <div className="space-y-3">
                        <div className="font-semibold">
                            Sale Supply
                        </div>
                        <div className="font-bold">
                            1,000,000,000 CONG
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="font-semibold">
                            Price Per Token
                        </div>
                        <div className="font-bold">
                            0.025 USDT
                        </div>
                    </div>
                </div>


                <div className="mt-20 text-center">
                    <div className="text-2xl font-bold">
                        Buy Now
                    </div>
                    <div className="text-xl font-semibold mt-3">
                        Your Balance : 0 USDT
                    </div>
                </div>


                <div className="mt-20">
                    <form action="" className="flex justify-between max-w-[500px] mx-auto">
                        <div>
                            <label className="block mb-2 font-medium text-gray-900 text-xl">Enter Amount</label>
                            <input type="text" class="inp" placeholder="Enter Amount" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-xl font-medium text-gray-900">CONG Token</label>
                            <input type="text" class="inp" placeholder="Enter token" required />
                        </div>
                    </form>
                </div>

                <div className="max-w-[500px] mx-auto mt-8 space-y-1 font-semibold">
                    <p className="">Please Click the button Twice</p>
                    <p className="">First Time to Approve and Second Time to Buy</p>
                </div>
                <div className="text-black  mt-3 mb-4">
                    <button className="border px-5 py-2 text-white bg-black rounded-xl font-bold">Approve</button>
                </div>
            </div>
        </>
    )
}
