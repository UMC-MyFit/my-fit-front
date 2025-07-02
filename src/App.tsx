import BottomNav from "./components/layouts/BottomNav";
import RecruitAnnouncement from "./components/recruiting/RecruitAnnouncement";

function App() {
  return (
    <div className="font-sans max-w-md mx-auto w-full min-h-screen">
      <RecruitAnnouncement />
      <BottomNav />
    </div>
  );
}

export default App;
