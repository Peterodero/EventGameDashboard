import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardHead from "./components/DashboardHead";
import GameDashboard from "./components/GameDashboard";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DashboardHead />
      <GameDashboard />
    </QueryClientProvider>
  );
}

export default App;
