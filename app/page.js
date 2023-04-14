import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs"

export default async function Home() {
  const res = await fetch("http://localhost:3000/all-records", { cache: 'no-store' });

  const data = await res.json();
  return (
    <>

      <div className="flex justify-between mt-10 items-center">
        <SearchBar />
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
