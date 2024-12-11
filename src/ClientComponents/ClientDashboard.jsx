import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogoutButton from "../../Logout";

const ClientDashboard = () => {
  const { clientId } = useParams();
  const [data, setData] = useState({ client: null, transactions: [], error: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientResponse = await fetch(`https://mobileback-d8at.onrender.com/user/client/${clientId}`);
        const client = await clientResponse.json();

        const transactionsResponse = await fetch(
          `https://mobileback-d8at.onrender.com/user/client/${clientId}/transactions`
        );
        const transactions = await transactionsResponse.json();

        setData({ client, transactions, error: null });
      } catch (error) {
        setData({ client: null, transactions: [], error: error.message });
      }
    };

    fetchData();
  }, [clientId]);

  const { client, transactions, error } = data;

  if (error) return <div>Error: {error}</div>;
  if (!client) return <div>Loading...</div>;

  return (
    <div>
    <div className="text-white flex flex-col gap-6 min-h-[180px] py-8 px-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide">
  <div>
    <h1 className="font-bold text-lg">WELCOME {client.firstName} {client.lastName}!</h1>
    <p className="text-gray-300">Email: {client.email}</p>
  </div>
  <div>
    <div className="h-0.5 bg-gray-500 my-6"></div>
    <p>ACCOUNT NUMBER: {client.accountNumber}</p>
    <p>TOTAL BALANCE: ${client.balance}</p>
  </div>
  <div className="flex justify-end">
    <LogoutButton />
  </div>
</div>

      <h2 className="text-center mt-2 font-extrabold">TRANSACTION HISTORY</h2>
      <div className="overflow-x-auto mt-5">
  <table className="table-auto  border-collapse border border-gray-300 w-full text-sm text-left bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white">
    <thead className="bg-gray-800">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Date</th>
        <th className="border border-gray-300 px-4 py-2">Description</th>
        <th className="border border-gray-300 px-4 py-2">Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((txn) => (
        <tr key={txn.id} className="hover:bg-gray-700">
          <td className="border border-gray-300 px-4 py-2">
            {new Date(txn.transactionDate).toLocaleDateString()}
          </td>
          <td className="border border-gray-300 px-4 py-2">{txn.description}</td>
          <td
            className={`border border-gray-300 px-4 py-2 font-semibold ${
              txn.transactionType === "credit" ? "text-green-600" : "text-red-600"
            }`}
          >
            {txn.transactionType === "credit" ? "+" : "-"}${Number(txn.amount).toFixed(2)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default ClientDashboard;
