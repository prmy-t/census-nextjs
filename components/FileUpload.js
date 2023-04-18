'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function FileUpload() {
    const router = useRouter();
    const [files, setFiles] = useState(null)
    const fileHandler = (e) => {
        setFiles(e.target.files[0]);
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if (files !== null) {
            const formData = new FormData();
            formData.append('file', files);
            const res = await fetch("http://localhost:3000/file-upload", {
                method: "POST",
                body: formData,
            })
            const data = await res.json();
            if (data.success)
                router.refresh();
        }

    }
    return (
        <form onSubmit={submitHandler} encType="multipart/form-data" className="flex justify-end items-center gap-5">
            <button className="btn" type="submit">Submit</button>
            <input className="file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-indigo-600 hover:file:bg-indigo-100 file:cursor-pointer active:file:bg-indigo-300" type="file" id="fileUpload" onChange={fileHandler} multiple />


        </form>)
}