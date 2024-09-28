/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from 'react';


export default function Home() {


  const inputBillRef = useRef<unknown | any>();

  const inputPersonsRef = useRef<unknown | any>();

  const people = useRef<number>(0);

  const percentageTip = useRef<number>(0);

  const [alertEmptyValue, setAlertEmptyValue] = useState<boolean>(false);

  const [billValue, setBillValue] = useState<number>(0);

  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);

  const [tipAmount, setTipAmount] = useState(0);

  const [tipPerPerson, setTipPerPerson] = useState<number>(0);

  function calculateTip() {
    const generateTipAmount = percentageTip.current !== 0 ? billValue * (percentageTip.current / 100) : 0;
    if (Number.isNaN(generateTipAmount)) setTipAmount(0)
    else setTipAmount(generateTipAmount);
    console.log(generateTipAmount)
  }

  function calculateTipEachPerson() {
    if (billValue <= 0 || people.current <= 0) {
      return;
    }
    const tip: number = billValue * (percentageTip.current > 0 ? percentageTip.current / 100 : 0);
    const tipPerPerson: number = tip / people.current;
    if (Number.isNaN(tipPerPerson)) setTipPerPerson(0);
    else setTipPerPerson(tipPerPerson);
    if (people.current === 0 || Number.isNaN(people.current)) {
      inputPersonsRef.current.classList.add("deniedInputState");
      setAlertEmptyValue(true);
    } else {
      inputPersonsRef.current.classList.remove("deniedInputState");
      setAlertEmptyValue(false);
    }
  }

  function resetValue() {
    percentageTip.current = 0;
    people.current = 0;
    setBillValue(0);
    setNumberOfPeople(0);
    setTipAmount(0)
    setTipPerPerson(0);
  }


  return (
    <div className="flex flex-col gap-5">
      <h1 className="uppercase font-bold text-center text-2xl text-veryDarkCyan tracking-[10px]">spli<br />tter</h1>
      <div className="bg-white w-80 p-6 rounded-md grid grid-cols-1 md:grid-cols-2 md:w-[650px] md:gap-7">
        <div className="flex flex-col gap-5 w-full h-full">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="capitalize font-bold text-veryDarkCyan tracking-wide">bill</label>
            <div ref={inputBillRef} className="w-full h-11 flex items-center justify-center bg-veryLightGrayishCyan rounded-md">
              <span className="h-full flex items-center justify-between p-2">
                <Image
                  width={10}
                  height={10}
                  alt="dolar icon"
                  src="./images/icon-dollar.svg"
                />
              </span>
              <input
                type="number"
                value={billValue}
                onChange={(e) => {
                  setBillValue(e.target.valueAsNumber);
                }}
                onFocus={() => inputBillRef.current.classList.add("activeInputRef")}
                onBlur={() => inputBillRef.current.classList.remove("activeInputRef")}
                className="outline-none w-full h-full border-none bg-transparent text-right text-2xl text-veryDarkCyan font-semibold p-2" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="capitalize font-bold text-veryDarkCyan tracking-wide">Select tip</h2>
            <div className="grid grid-cols-2 place-items-start gap-4 md:grid-cols-3">
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 5;
                  console.log(percentageTip.current);
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >5%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 10;
                  console.log(percentageTip.current);
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >10%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 15;
                  console.log(percentageTip.current);
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >15%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 25;
                  console.log(percentageTip.current);
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >25%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 50;
                  console.log(percentageTip.current);
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >50%</button>
              <input type="number"
                onChange={(e) => {
                  percentageTip.current = e.target.valueAsNumber;
                  console.log(percentageTip.current);
                  calculateTip();
                  calculateTipEachPerson()
                }}
                placeholder="custom"
                className="w-full h-10 bg-veryLightGrayishCyan text-veryDarkCyan text-2xl font-semibold rounded-md text-right outline-none placeholder:uppercase placeholder:text-center placeholder:text-lg placeholder:text-veryDarkCyan" />
            </div>

          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full flex items-center justify-between">
              <label htmlFor="" className="capitalize font-bold text-veryDarkCyan tracking-wide">number of people</label>
              <p className="text-red-600 text-xs font-medium" style={{ display: alertEmptyValue ? "block" : "none" }}>
                Can&apos;t be zero
              </p>
            </div>
            <div
              ref={inputPersonsRef}
              className="w-full h-11 flex items-center justify-center bg-veryLightGrayishCyan rounded-md">
              <span className="h-full flex items-center justify-between p-2">
                <Image
                  width={10}
                  height={10}
                  alt="dolar icon"
                  src="./images/icon-person.svg"
                />
              </span>
              <input
                ref={inputPersonsRef}
                type="number"
                value={numberOfPeople}
                onChange={(e) => {
                  people.current = e.target.valueAsNumber;
                  setNumberOfPeople(people.current)
                  calculateTipEachPerson()
                  console.log(numberOfPeople)
                }}
                onFocus={() => inputPersonsRef.current.classList.add("activeInputRef")}
                onBlur={() => inputPersonsRef.current.classList.remove("activeInputRef")}
                className="outline-none w-full h-full border-none bg-transparent text-right text-2xl text-veryDarkCyan font-semibold p-2" />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-veryDarkCyan flex flex-col justify-between gap-6 p-4 rounded-lg">
          <div className="flex flex-col gap-5">
            <div className="flex items-center w-full justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold capitalize text-sm">tip amount</h3>
                <small className="text-grayishCyan text-xs font-semibold">/ person</small>
              </div>
              <span className="text-strongCyan text-3xl font-black before:content-['$']">{tipPerPerson.toFixed(2)}</span>
            </div>
            <div className="flex items-center w-full justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold capitalize text-sm">total</h3>
                <small className="text-grayishCyan text-xs font-semibold">/ person</small>
              </div>
              <span className="text-strongCyan text-3xl font-black before:content-['$']">{tipAmount.toFixed(2)}</span>
            </div>
          </div>
          <button
            className="w-full h-9 flex items-center justify-center uppercase text-veryDarkCyan font-extrabold bg-strongCyan rounded-md cursor-pointer hover:text-veryDarkCyan hover:bg-lightGrayishCyan hover:duration-500 hover:ease-in-out"
            onClick={() => resetValue()}
          >reset</button>
        </div>
      </div>
    </div>
  )
}