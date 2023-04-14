"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Form({ type, data }) {
  const [id, setId] = useState(data._id);
  const [fName, setFName] = useState(data.fName);
  const [lName, setLName] = useState(data.lName);
  const [gender, setGender] = useState(data.gender);
  const [age, setAge] = useState(data.age);
  const [familySize, setFamilySize] = useState(data.familySize);
  const [profession, setProfession] = useState(data.profession);
  const [workExp, setWorkExp] = useState(data.workExp);
  const [annualIncome, setAnnualIncome] = useState(data.annualIncome);
  const [spendingScore, setSpendingScore] = useState(data.spendingScore);

  const router = useRouter();

  const handleFName = (e) => {
    setFName(e.target.value);
  };
  const handleLName = (e) => {
    setLName(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleFamilySize = (e) => {
    setFamilySize(e.target.value);
  };
  const handleProfession = (e) => {
    setProfession(e.target.value);
  };
  const handleWorkExp = (e) => {
    setWorkExp(e.target.value);
  };
  const handleAnnualIncome = (e) => {
    setAnnualIncome(e.target.value);
  };
  const handleSpendingScore = (e) => {
    setSpendingScore(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var url = "";
    const body_data = {
      fName,
      lName,
      gender,
      age,
      familySize,
      profession,
      workExp,
      annualIncome,
      spendingScore,
    };

    if (type == 'add')
      url = "http://localhost:3000/post-record";

    else if (type == 'edit') {
      url = "http://localhost:3000/post-edit"
      body_data['id'] = id;
    }

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body_data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json()
    if (data.success) {
      console.log(data);
      router.push("/");
      router.refresh()
    }
  };
  return (
    <div className="flex bg-slate-900/40 items-center justify-center overflow-x-hidden overflow-y-auto fixed z-50 inset-0">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 border  rounded-lg w-auto h-auto"
        >
          <p className="flex justify-center text-2xl  mb-10">
            Enter New Record
          </p>

          <div className="columns-2 gap-2 py-1">
            <div>
              <label>First Name </label>
              <input
                value={fName}
                type="text"
                className="p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleFName}
              />
            </div>

            <div>
              <label>Last Name </label>
              <input
                value={lName}
                type="text"
                className="p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleLName}
              />
            </div>
          </div>
          <div className="flex col-2 gap-2 items-center space-x-2 px-1 py-3">
            <div className="">Gender:</div>
            <div className="flex space-x-1">
              <input
                checked={gender == 'male' ? 'checked' : ''}
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleGender}
              />
              <label className="">Male</label>
            </div>
            <div className="flex space-x-1">
              <input
                checked={gender == 'female' ? 'checked' : ''}
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleGender}
              />
              <label className="">Female</label>
            </div>
          </div>

          <div className="columns-2 gap-2 py-1">
            <div>
              <label>Age </label>
              <input
                value={age}
                type="number"
                className=" p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleAge}
              />
            </div>

            <div>
              <label>Family Size </label>
              <input
                value={familySize}
                type="number"
                className="p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleFamilySize}
              />
            </div>
          </div>

          <div className="columns-2 gap-2">
            <div>
              <label>Profession </label>
              <input
                value={profession}
                type="text"
                className=" p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleProfession}
              />
            </div>

            <div>
              <label>Work Exp. </label>
              <input
                value={workExp}
                type="number"
                className="p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleWorkExp}
              />
            </div>
          </div>
          <div className="columns-2 gap-2 py-1">
            <div>
              <label>Annual Income </label>
              <input
                value={annualIncome}
                type="number"
                className=" p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleAnnualIncome}
              />
            </div>

            <div>
              <label>Spending Score</label>
              <input
                value={spendingScore}
                type="number"
                className="p-1 rounded-md bg-white border-2 fount-light w-full outline-none"
                id="f_name"
                onChange={handleSpendingScore}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-10">
            <Link href="/">
              <button
                className="px-3 py-2 font-bold bg-white text-red-500 border-2 border-red-500 rounded-md tracking-wider hover:text-white hover:bg-red-500 active:bg-red-600 transition ease-in-out duration-150"
                type="submit"
              >
                Cancel
              </button>
            </Link>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
