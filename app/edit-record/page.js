"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Form from "@/components/Form";

export default function EditRecord({ }) {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [fetched, setFetched] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/edit-record?id=" + id, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
      const customer = await res.json();
      setData(customer);
      setFetched(true);
    }
    fetchData();
  }, [])


  return (<>
    {fetched && <Form type="edit" data={data} />}
  </>

  );
}
