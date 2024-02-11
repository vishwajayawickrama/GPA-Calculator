import "./App.css";
import BasicInformation from "./components/BasicInformation";

function App() {
  return (
    <>
      <div className="flex justify-center items-center mt-4 bg-blue-500 p-4 m-5">
        <h1 className="text-3xl font-bold">GPA Calculator</h1>
      </div>
      <BasicInformation />
    </>
  );
}

export default App;
