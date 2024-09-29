/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from 'react';


export default function Home() {


  const inputBillRef = useRef<HTMLElement | any>(null);

  const inputPersonsRef = useRef<HTMLElement | any>(null);

  const inputSetBill = useRef<HTMLElement | any>(null);

  const inputSetPeople = useRef<HTMLElement | any>(null);

  const inputPercentageRef = useRef<HTMLElement | any>(null)

  const billValueRef = useRef<number>(0);

  const numberOfPeople = useRef<number>(0);

  const percentageTip = useRef<number>(0);

  const [alertEmptyValue, setAlertEmptyValue] = useState<boolean>(false);

  const [tipAmount, setTipAmount] = useState(0);

  const [tipPerPerson, setTipPerPerson] = useState<number>(0);

  function calculateTip() {
    const generateTipAmount = percentageTip.current !== 0 ? billValueRef.current * (percentageTip.current / 100) : 0;
    if (Number.isNaN(generateTipAmount)) setTipAmount(0)
    else setTipAmount(generateTipAmount);
  }

  function calculateTipEachPerson() {
    if (billValueRef.current <= 0 || numberOfPeople.current <= 0) {
      return;
    }
    const tip: number = billValueRef.current * (percentageTip.current > 0 ? percentageTip.current / 100 : 0);
    const tipPerPerson: number = tip / numberOfPeople.current;
    if (Number.isNaN(tipPerPerson)) setTipPerPerson(0);
    else setTipPerPerson(tipPerPerson);
    if (numberOfPeople.current === 0 || Number.isNaN(numberOfPeople.current)) {
      inputPersonsRef.current.classList.add("deniedInputState");
      setAlertEmptyValue(true);
    } else {
      inputPersonsRef.current.classList.remove("deniedInputState");
      setAlertEmptyValue(false);
    }
  }

  function resetValue() {
    percentageTip.current = 0;
    numberOfPeople.current = 0;
    inputSetBill.current.value = '';
    inputSetPeople.current.value = '';
    inputPercentageRef.current.value = '';
    setTipAmount(0)
    setTipPerPerson(0);
  }


  return (
    <div className="flex flex-col gap-5">
      <h1 className="uppercase font-bold text-center text-2xl text-veryDarkCyan tracking-[10px]">spli<br />tter</h1>
      <div className="bg-white w-80 p-6 rounded-md grid grid-cols-1 md:grid-cols-2 md:w-[750px] md:gap-7">
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
                ref={inputSetBill}
                onChange={(e) => {
                  billValueRef.current = e.target.valueAsNumber;
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
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >5%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 10;
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >10%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 15;
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >15%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 25;
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >25%</button>
              <button
                className="w-full h-10 flex items-center justify-center bg-veryDarkCyan text-white text-2xl font-semibold rounded-md hover:bg-strongCyan hover:text-veryDarkCyan hover:duration-700 hover:ease-in-out"
                onClick={() => {
                  percentageTip.current = 50;
                  calculateTip();
                  calculateTipEachPerson()
                }}
              >50%</button>
              <input type="number"
              ref={inputPercentageRef}
                onChange={(e) => {
                  percentageTip.current = e.target.valueAsNumber;
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
                ref={inputSetPeople}
                type="number"
                onChange={(e) => {
                  numberOfPeople.current = e.target.valueAsNumber;
                  calculateTipEachPerson()
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