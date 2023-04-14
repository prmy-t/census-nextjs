'use client';

import { useRouter } from "next/navigation";
import { BsPencil, BsTrash } from "react-icons/bs"


export default function Table({ data }) {
  const router = useRouter();

  const editHandler = async (id) => {
    router.push("/edit-record?id=" + id)

  }
  const deleteHandler = async (id) => {
    const res = await fetch("http://localhost:3000/delete-by-id", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

    })
    const data = await res.json()
    if (data.msg == "success")
      router.refresh();
  }


  return (
    <>
      {data && <div className="flex justify-end">
        Total records : {data.length}
      </div>}
      <table className="w-full table-auto">
        <thead className="bg-gray-300">
          <tr className="text-left">
            <th className="p-2">No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Family Size</th>
            <th>Profession</th>
            <th>Work Exp.</th>
            <th>Annual Income</th>
            <th>Spending Score</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => {
            return (
              <tr key={customer._id} className={index % 2 == 0 ? ` bg-gray-300/30` : ``}>
                <td className="px-2 py-3">{index + 1}</td>
                <td >{customer.fName}</td>
                <td>{customer.lName}</td>
                <td>{customer.gender}</td>
                <td>{customer.age}</td>
                <td>{customer.familySize}</td>
                <td>{customer.profession}</td>
                <td>{customer.workExp}</td>
                <td>{customer.annualIncome}</td>
                <td>{customer.spendingScore}</td>
                <td className="column-2  space-x-3">
                  <button onClick={() => editHandler(customer._id)} className="px-2 bg-white border-2 border-indigo-500 rounded-md text-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600">

                    Edit
                    <span><BsPencil className="inline-block ml-1 mb-1" />
                    </span>
                  </button>

                  <button onClick={() => deleteHandler(customer._id)} className="px-2 bg-white border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white active:bg-red-600">

                    Delete
                    <span>
                      <BsTrash className="inline-block ml-1 mb-1" />

                    </span>
                  </button>

                </td>
              </tr>

            )




          })}



        </tbody>
      </table>
    </>
  );
}
