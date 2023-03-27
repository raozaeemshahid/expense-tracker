import { useState } from "react";

const List: React.FC<{ list: { name: string; amount: number }[] }> = ({
  list,
}) => {
  const [searchQuery, changeSearchQuery] = useState("");
  return (
    <>
      <div>
        <div className="my-3">
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 px-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search"
            onChange={(e) => changeSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
        {list.length > 0 &&
          list
            .filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((flow) => (
              <div
                key={`${Math.random()}`}
                className={`m-1 border-r-4 bg-gray-700 shadow-md shadow-gray-900 ${
                  flow.amount < 0 ? "border-red-700" : "border-green-700"
                } flex`}
              >
                <div className="mx-2 flex w-full justify-between p-1">
                  <h2>{flow.name}</h2>
                  <h2>${Math.abs(flow.amount)}</h2>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};
export default List;
