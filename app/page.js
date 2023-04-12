import Table from "@/components/Table";
import Link from "next/link";


export default async function Home() {
  const res = await fetch("http://localhost:3000/all-records");
  const data = await res.json();
  return (
    <div className="container mx-auto m-2 ">
      <h1 className="text-center text-3xl font-thin">CENSUS DATA</h1>
      <div className="flex justify-between mt-6">
        <div className="space-x-2">
          <input className="px-2 border-2 rounded-md bg-gray-300/30" type="text" />
          <Link href={`/search?var=${inputValue}`}>
            <button>Search</button>
          </Link>

        </div>
        <Link href="/add-record">
          <button className="btn">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
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
    </div >
  );
}
