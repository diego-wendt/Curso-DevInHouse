import { Sidebar, MainContent } from "../components";

export const Home = () => {


  return (
    <div className="root-container">
      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- MainContent --> */}
      <MainContent />
    </div>
  );
};