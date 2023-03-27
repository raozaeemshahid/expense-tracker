import { Dispatch, SetStateAction, useState } from "react";

const AddFlow: React.FC<{
  addFlow: (props: { name: string; amount: number }) => void;
  changeIsAdding: Dispatch<SetStateAction<boolean>>;
}> = ({ addFlow, changeIsAdding }) => {
  const [name, changeName] = useState("");
  const [amount, changeAmount] = useState("");
  const [flowType, changeFlowType] = useState<"Expense" | "Income">("Expense");

  return (
    <>
      <div className="m-2 flex flex-col justify-center gap-2">
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 px-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Description"
          onChange={(e) => changeName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 px-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Amount"
          onChange={(e) => changeAmount(e.target.value)}
          value={amount}
        />
        <div className="flex justify-around">
          <div className="flex gap-1">
            <input
              type="checkbox"
              checked={flowType == "Expense"}
              onChange={(e) => {
                if (e.target.checked) changeFlowType("Expense");
              }}
            />
            <h2
              onClick={() => changeFlowType("Expense")}
              className="cursor-pointer"
            >
              Expense
            </h2>
          </div>

          <div className="flex gap-1">
            <input
              type="checkbox"
              checked={flowType == "Income"}
              onChange={(e) => {
                if (e.target.checked) changeFlowType("Income");
              }}
            />
            <h2
              onClick={() => changeFlowType("Income")}
              className="cursor-pointer"
            >
              Income
            </h2>
          </div>
        </div>
        <button
          className="w-full py-[2px] rounded-lg   bg-green-600 hover:bg-green-700"
          onClick={() => {
            let money = 0;
            if (flowType == "Income") money = parseInt(amount);
            if (flowType == "Expense") money = -1 * parseInt(amount);

            addFlow({
              amount: money,
              name,
            });
            changeName("");
            changeAmount("");
            changeIsAdding(false);
          }}
        >
          Add Flow
        </button>
      </div>
    </>
  );
};
export default AddFlow;
