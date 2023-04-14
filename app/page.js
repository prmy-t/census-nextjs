import Table from "@/components/Table";
import Link from "next/link";
import { BsPlusLg, BsSearch } from "react-icons/bs"

export default async function Home() {
  const res = await fetch("http://localhost:3000/all-records", { cache: 'no-store' });

  const data = await res.json();
  return (
    <>
      <h1 className="text-center text-3xl font-thin">CENSUS DATA</h1>
      <div className="flex justify-between mt-10 items-center">
        <div className="space-x-2">
          <input className="px-2 border-x border-y rounded-md border-gray-900/70" type="text" />
          <Link href="#">
            <button className="px-2  bg-white border-2 border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white active:bg-indigo-600">Search
              <span><BsSearch className="inline-block mb-1 ml-1" />
              </span>
            </button>
          </Link>
        </div>
        <Link href="/add-record">
          <button className="btn">
            <span>
              <BsPlusLg className="mb-1 inline-block" />
            </span>
            Add Record
          </button>
        </Link>
      </div>

      <div className="overflow-auto mt-6 rounded-md">
        {data &&
          <Table data={data} />
        }
      </div>
    </>
  );
}
