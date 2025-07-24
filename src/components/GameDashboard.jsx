import { useQuery } from "@tanstack/react-query";
import { fetchGameSesions } from "../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";

export default function GameDashboard() {
  const { data, isPending } = useQuery({
    queryKey: ["sessions"],
    queryFn: fetchGameSesions,
  });

  let content;
  
  let number = 0;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (data) {
    content = (
      <div className="p-4 max-w-5xl mx-auto overflow-scroll">
        <div className=" rounded-lg ">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-purple-200">
                <th className="py-5 px-4 text-left text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="py-5 px-4 text-left text-sm font-semibold text-gray-700">
                  Player
                </th>
                {/* <th className="py-5 px-4 text-left text-sm font-semibold text-gray-700 sm:table-cell">
                  Bicycle
                </th> */}
                <th className="py-5 px-4 text-left text-sm font-semibold text-gray-700">
                  Time (S)
                </th>
              </tr>
            </thead>
            <tbody className="bg-orange-300">
              {data.sessions.map((session) => {
                number = number + 1;
                return (
                  <tr
                    key={session.id}
                    className="hover:bg-orange-200 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                         number % 2 ===  0
                            ? "bg-purple-200 text-yellow-800"
        
                            : "bg-orange-100 text-gray-800"
                        }`}
                      >
                        {number}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm font-semibold text-gray-800">
                      {session.player_name}
                    </td>
                    {/* <td className="py-3 px-4 text-sm text-gray-600 sm:table-cell">
                      {session.bike_name}
                    </td> */}
                    <td className="py-3 px-4 text-sm font-bold text-gray-900">
                      {session.time_played}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}
