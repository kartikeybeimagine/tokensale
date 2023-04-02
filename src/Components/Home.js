import React from 'react'
import logo from "../assets/logo.6d04ea37b89ab0072e00.png"
import { useState, useEffect } from 'react';
export const Home = () => {
    const [haveWallet, sethaveWallet] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [msg, setmsg] = useState("Install Wallet");
    const [success, setsuccess] = useState(-1);
    const [successmsg, setsuccessmsg] = useState("");
    const { ethereum } = window;
    useEffect(() => {
        const { ethereum } = window;
        const checkWalletAvailability = async () => {
            if (!ethereum) {
                sethaveWallet(false);
                setmsg("Install Wallet");
            }
            else {
                sethaveWallet(true);
                setmsg("Connect Wallet");
            }
        };
        checkWalletAvailability();
    }, []);


    const connectWallet = async () => {
        try {
            if (!ethereum) {
                sethaveWallet(false);
                setmsg("Install Wallet");
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            setIsConnected(true);
            console.log(accounts);
            setmsg("Connected");
            console.log(haveWallet);
            console.log(isConnected);
            setsuccess(0);
            setsuccessmsg("Success wallet connected Successfully");
            setTimeout(() => {
                setsuccess(-1);
            }, 2000);
        } catch (error) {
            setIsConnected(false);
            setmsg("Connect Wallet");
            setsuccess(1);
            setsuccessmsg("Error while connecting Wallet");
            setTimeout(() => {
                setsuccess(-1);
            }, 2000);
        }
    };


    return (
        <>
            {/* --------------------------navbar----------------------------------------------------- */}

            <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-400/50 dark:shadow-lg dark:shadow-purple-500/80 min-h-[100vh] max-w-[100vw]">
                <nav className="max-w-[100vw] border-b top-0 left-0">
                    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                        <p className="flex items-center">
                            <img
                                src={logo}
                                className="h-16 mr-3"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
                                BITMEMOIR
                            </span>
                        </p>
                        <div className="flex md:order-2">
                            <button
                                type="button"
                                onClick={connectWallet}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {msg}
                            </button>
                        </div>
                    </div>
                </nav>
                <div
                    className={`flex  max-w-[400px] z-10 alert text-xl p-4 mb-4 ${success == -1 ? "top-[-50%]" : success == 0 ? "bg-green-700" : "bg-red-700"} text-white rounded-xl`}
                    role="alert"
                >
                    <svg
                        aria-hidden="true"
                        className="flex-shrink-0 inline w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {/* <span className="sr-only">Info</span> */}
                    <div>
                        {successmsg}
                    </div>
                </div>
                <div className="md:mt-4 mt-10">
                    <div className="w-full mx-auto max-w-[600px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <h5 className="text-3xl font-bold  text-gray-900 dark:text-white">
                                Welcome To <span className="text-purple-500">BITMEMOIR IDO</span> Sale
                            </h5>
                            <div className='flex justify-between text-white'>
                                <div className="space-y-3">
                                    <div className="font-semibold">
                                        Sale Supply
                                    </div>
                                    <div className="font-bold">
                                        1,000,000,000 BITM
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="font-semibold">
                                        Price Per Token
                                    </div>
                                    <div className="font-bold">
                                        0.025 ARB
                                    </div>
                                </div>
                            </div>
                            <div className='text-white'>
                                <div className="text-xl font-bold">
                                    Token details
                                </div>
                                <div className="text-sm font-semibold mt-3">
                                    Contract Address : 0 USDT
                                </div>
                                <div className="text-sm font-semibold mt-3">
                                    Symbol : 0 USDT
                                </div>
                                <div className="text-sm font-semibold mt-3">
                                    Decimal : 0 USDT
                                </div>
                                <div className="text-sm font-semibold mt-3">
                                    Allocated Token : 0 USDT
                                </div>
                            </div>
                            <div className='text-white text-center'>
                                <div className="text-2xl font-bold">
                                    Buy Now
                                </div>
                                <div className="text-xl font-semibold mt-3">
                                    Your Balance : 0 ARB
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:space-y-0 space-y-3 justify-between font-bold">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Amount (in ARB)</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Amount" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BITM TOKEN</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Token" required />
                                </div>

                            </div>
                            <div className="space-y-1 font-semibold text-white">
                                <p className="">Please Click the button Twice</p>
                                <p className="">First Time to Approve and Second Time to Buy</p>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Approve
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
