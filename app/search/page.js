'use client'

import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import { useRouter, useSearchParams } from "next/navigation"
import { BsPlusLg } from "react-icons/bs"


import { useEffect, useState } from "react";


export default function Search() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const param = searchParams.entries()
    const value = searchParams.get('value')
    const [data, setData] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`http://localhost:3000/search?value=${value}`)
            const json_data = await res.json();
            setData(json_data)
        }
        fetchApi()
    })

    return <>
        <div className="flex justify-between mt-10 items-center">
            <SearchBar value={value} />
            <button onClick={() => router.push("/add-record")} className="btn">
                <span>
                    <BsPlusLg className="mb-1 inline-block" />
                </span>
                Add Record
            </button>
        </div>

        <div className="mt-5">
            <button onClick={() => router.push("/")} className="bg-indigo-500 rounded-full px-2 text-white active:scale-75"> show all records</button>
            {data && <Table data={data} />}
        </div>
    </>
}