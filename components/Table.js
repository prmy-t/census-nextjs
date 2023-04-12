'use client';

import { useRouter } from "next/navigation";

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
    router.push("/");
    if (data.msg == "success") {
      console.log("into if");
    }
  }
  return (
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
          <th>Actions</th>
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
                <button onClick={() => editHandler(customer._id)} className="px-2 py-1 bg-white border-2 border-indigo-500 rounded-md text-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600">
                  <span><svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                  </span>
                  Edit</button>

                <button onClick={() => deleteHandler(customer._id)} className="px-2 py-1 bg-white border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white active:bg-red-600">
                  <span>
                    <svg className="w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                  </span>
                  Delete</button>

              </td>
            </tr>

          )




        })}



      </tbody>
    </table>
  );
}
