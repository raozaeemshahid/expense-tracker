import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import AddFlow from "../components/AddFlow";
import List from "../components/List";

const Home: NextPage = () => {
  const [moneyFlow, changeMoneyFlow] = useState<
    { name: string; amount: number }[]
  >([]);
  const [isAdding, changeIsAdding] = useState(false);

  const addFlow = ({ amount, name }: { name: string; amount: number }) => {
    changeMoneyFlow([...moneyFlow, { name, amount }]);
  };
  const balance = moneyFlow.reduce((partialSum, a) => partialSum + a.amount, 0);

  return (
    <>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Expense Tracker App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex h-screen justify-center bg-gray-700">
        <div className="mt-16 flex w-80 flex-col gap-2 rounded-lg bg-gray-800 p-4 text-gray-100">
          <div className="text-center">
            <h2 className="m-2 text-2xl font-bold">Expense Tracker</h2>
          </div>
          <div className="flex justify-around">
            <div className="">
              <h2 className="text-sm font-bold">Balance</h2>
              <h2 className="text-lg">
                {balance < 0 ? "-" : ""} ${Math.abs(balance)}
              </h2>
            </div>
            <button
              className="rounded-md bg-blue-600 px-3 py-[1px] hover:bg-blue-700"
              onClick={() => {
                changeIsAdding((state) => !state);
              }}
            >
              {isAdding ? "Cancel" : "Add"}
            </button>
          </div>
          {isAdding && (
            <AddFlow addFlow={addFlow} changeIsAdding={changeIsAdding} />
          )}
          <div className="flex ">
            <div className="w-full">
              <h2 className="text-sm font-bold text-gray-300">Expenses</h2>
              <h2 className="text-2xl text-red-700">
                $
                {Math.abs(
                  moneyFlow.reduce(
                    (partialSum, a) =>
                      (a.amount < 0 ? a.amount : 0) + partialSum,
                    0
                  )
                )}
              </h2>
            </div>
            <div className="w-full">
              <h2 className="text-sm font-bold text-gray-300">Income</h2>
              <h2 className="text-2xl text-green-700">
                $
                {Math.abs(
                  moneyFlow.reduce(
                    (partialSum, a) =>
                      (a.amount > 0 ? a.amount : 0) + partialSum,
                    0
                  )
                )}
              </h2>
            </div>
          </div>
          <List list={moneyFlow} />
        </div>
      </div>
    </>
  );
};
export default Home;
