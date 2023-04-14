'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { BsSearch } from "react-icons/bs"

export default function SearchBar({ value }) {
    const router = useRouter()
    const [key, setKey] = useState('fName')
    const [input, setInput] = useState(value)

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {
        if (input)
            router.push(`/search?value=${input}`)
    }
    return <>
        <div className="space-x-2">
            <input value={input} onChange={handleInput} className="px-2 border-x border-y rounded-md border-gray-900/70" type="text" />
            <button onClick={handleSubmit} className="px-2 bg-white border-2 border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white active:bg-indigo-600">Search
                <span><BsSearch className="inline-block mb-1 ml-1" />
                </span>
            </button>

        </div>
    </>
}