export default function GameDashboard (){
  // API calling
  const riderData = [
    { id: 1, rank: 1, playerName: "Peter", bicycle: "Canyon", time: "2:45:18" },
    { id: 2, rank: 2, playerName: "Mike", bicycle: "Specialized Tarmac", time: "2:47:32" },
    { id: 3, rank: 3, playerName: "Maxwel", bicycle: "Trek Madone", time: "2:49:15" },
    { id: 4, rank: 4, playerName: "David", bicycle: "Cervelo S5", time: "2:51:42" },
    { id: 5, rank: 5, playerName: "John", bicycle: "Giant Propel", time: "2:53:27" },
    { id: 6, rank: 6, playerName: "Maurice", bicycle: "Giant Propel", time: "2:50:20" }
  ];

  return (
     <div className="p-4 max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Player</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 hidden sm:table-cell">Bicycle</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {riderData.map((rider) => (
              <tr key={rider.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-gray-900">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                    rider.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                    rider.rank === 2 ? 'bg-blue-100 text-blue-800' :
                    rider.rank === 3 ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {rider.rank}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm font-semibold text-gray-800">
                  {rider.playerName}
                </td>
                <td className="py-3 px-4 text-sm text-gray-600 hidden sm:table-cell">
                  {rider.bicycle}
                </td>
                <td className="py-3 px-4 text-sm font-bold text-gray-900">
                  {rider.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

