import DashboardHead from "./components/DashboardHead";
import GameDashboard from "./components/GameDashboard";

function App (){

  return (
   <div className="p-4">
    <DashboardHead/>
    <GameDashboard/>
   </div>
  );
};

export default App;


// // import { TrophyIcon, FireIcon, ShieldCheckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'

// const App = () => {
//   // Mock data - replace with your API data
//   const playerData = [
//     {
//       id: 1,
//       rank: 1,
//       username: "ShadowSlayer",
//       avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//       level: 85,
//       levelProgress: 92,
//       killDeathRatio: 4.2,
//       winRate: 78,
//       playtimeHours: 342,
//       status: "online"
//     },
//     {
//       id: 2,
//       rank: 2,
//       username: "NeonNinja",
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//       level: 83,
//       levelProgress: 45,
//       killDeathRatio: 3.8,
//       winRate: 72,
//       playtimeHours: 298,
//       status: "ingame"
//     },
//     {
//       id: 3,
//       rank: 3,
//       username: "PixelHunter",
//       avatar: "https://randomuser.me/api/portraits/men/22.jpg",
//       level: 80,
//       levelProgress: 12,
//       killDeathRatio: 3.5,
//       winRate: 68,
//       playtimeHours: 276,
//       status: "online"
//     }
//   ];

//   const formatPlaytime = (hours) => {
//     if (hours < 1) return '<1h';
//     if (hours < 24) return `${hours}h`;
//     return `${Math.floor(hours/24)}d ${hours%24}h`;
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
//           <thead className="bg-gray-750">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-purple-400 uppercase tracking-wider">Rank</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-purple-400 uppercase tracking-wider">Player</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-purple-400 uppercase tracking-wider">Level</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-purple-400 uppercase tracking-wider">K/D Ratio</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-purple-400 uppercase tracking-wider">Win Rate</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-purple-400 uppercase tracking-wider">Playtime</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-purple-400 uppercase tracking-wider">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-700">
//             {playerData.map((player) => (
//               <tr key={player.id} className="hover:bg-gray-750 transition-colors">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className={`flex items-center ${
//                     player.rank === 1 ? 'text-yellow-400' : 
//                     player.rank <= 3 ? 'text-purple-400' : 'text-gray-300'
//                   }`}>
//                     {/* <TrophyIcon className="h-5 w-5 mr-2" /> */}
//                     #{player.rank}
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <img className="h-10 w-10 rounded-full border-2 border-purple-500" src={player.avatar} alt={player.username} />
//                     <div className="ml-4">
//                       <div className="text-sm font-medium text-white">{player.username}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <div className="w-full">
//                       <div className="text-sm text-white mb-1">Lvl {player.level}</div>
//                       <div className="w-full bg-gray-700 rounded-full h-1.5">
//                         <div 
//                           className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full" 
//                           style={{ width: `${player.levelProgress}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center text-red-400">
//                     {/* <FireIcon className="h-5 w-5 mr-1" /> */}
//                     <span className="text-sm font-medium">{player.killDeathRatio.toFixed(2)}</span>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center text-green-400">
//                     {/* <ShieldCheckIcon className="h-5 w-5 mr-1" /> */}
//                     <span className="text-sm font-medium">{player.winRate}%</span>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center text-blue-400">
//                     {/* <ClockIcon className="h-5 w-5 mr-1" /> */}
//                     <span className="text-sm font-medium">{formatPlaytime(player.playtimeHours)}</span>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     player.status === 'online' ? 'bg-green-500/20 text-green-400' :
//                     player.status === 'ingame' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
//                   }`}>
//                     {player.status === 'ingame' ? 'In Game' : player.status.charAt(0).toUpperCase() + player.status.slice(1)}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;