import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../Context/userContext";

function Result() {
  const navigate = useNavigate();
  const { data, setdata } = useContext(userContext);

  const handleSubmit = () => {
    // Clearing all fields
    
    setdata({});
    navigate('/');
  };

  // Use useEffect to log the updated data after the state is updated
  useEffect(() => {
    console.log("Updated Data:", data);
  }, [data]);

  // Calculate the total percentage
  const totalFields = 4;
  const filledFields = Object.values(data).filter(value => value !== '').length;
  const totalPercentage = (filledFields / totalFields) * 100;

  return (
    <>
      <div className="bg-violet-500 flex justify-center items-center h-screen">
        <div className="bg-white h-1/2 w-3/6 flex flex-col justify-center items-center gap-3">
          <div className="mb-3 text-center">
            {/* Display the total percentage of filled fields */}
            <p>Total Percentage of Form1 and Form2 fields filled: {totalPercentage}%</p>
          </div>
          <button
            className="px-9 py-2 bg-green-700 text-white border border-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Result;
