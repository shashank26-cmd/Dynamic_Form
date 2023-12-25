import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import Form2 from "./Pages/Form2";
import { useState } from "react";
import Result from "./Pages/Result";
import userContext from "./Context/userContext";

function App() {
  const [data, setdata] = useState({});

  return (
    <userContext.Provider value={{ data, setdata }}>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/next-component" element={<Form2 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
