"use client"

import { useState } from "react";


export default function Counter() {


    const [initCount, setInitCount] = useState(10);
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");






    const constAddHandler = () => {
        setInitCount(initCount + 1);
    }
    const constSubHandler = () => {
        if (initCount === 0) return
        setInitCount(initCount - 1);
    }

    const addBtnHandler = () => {
        if (!Number(number)) {

            setError("Please Enter a Number")

            setTimeout(() => {
                setError("");
            }, 3000);

        }
        else {
            setInitCount(initCount + Number(number))
            setNumber("")
        }
    }

    const subBtnHandler = () => {
        if (!Number(number)) {

            setError("Please Enter a Number")

            setTimeout(() => {
                setError("");
            }, 3000);

        }
        else {
            setInitCount(initCount - Number(number))
            setNumber("")
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-4xl font-bold mb-4 text-center">{initCount}</h1>

                    <label htmlFor="number" className="block mb-2 text-lg font-medium">
                        Enter Number:
                    </label>
                    <input
                        type="text"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="border border-gray-300 rounded-md p-3 w-full mb-4 text-lg"
                        placeholder="Type a number" />

                    {error && <p className="text-red-600 font-bold mb-4 text-center">{error}</p>}

                    <div className="flex flex-col md:flex-row justify-between mb-4">
                        <button
                            onClick={addBtnHandler}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-2 md:mb-0 md:mr-2 w-full md:w-auto">
                            Add
                        </button>
                        <button
                            onClick={subBtnHandler}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full md:w-auto">
                            Subtract
                        </button>
                    </div>



                    <div className="flex flex-col md:flex-row justify-between">
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
                            onClick={constAddHandler}>
                            Increment
                        </button>
                        <button
                            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 w-full md:w-auto"
                            onClick={constSubHandler}>
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}