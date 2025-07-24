import centrumImage from "../assets/centrum.jpg";
export default function DashboardHead() {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div></div>
      <h1 className="font-bold text-4xl md:text-white text-purple-800 text-center font-stretch-75% font-mono">
        Dashboard
      </h1>
      <div className="flex italic">
        <img src={centrumImage} alt="centrum" className="w-30 rounded-xl" />
      </div>
    </div>
  );
}
