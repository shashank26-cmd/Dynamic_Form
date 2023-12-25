import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../Context/userContext";

function Form2() {
  const navigate = useNavigate();
  const { data, setdata } = useContext(userContext);
  const [address, setAddress] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const form1Fields = Object.values(data).filter(value => value !== '').length;
  const totalFields = 4; // Assuming 4 fields in Form1
  const percentage = (form1Fields / totalFields) * 100;

  const handleNext = async (e) => {
    e.preventDefault();

    // Update context data with new values
    await setdata({ ...data, address, phoneNo });

    navigate('/Result');
  };

  const handlePrev = () => {
    navigate('/'); // Navigate to the "Form" component
  };

  return (
    <>
      <div className="bg-violet-500 flex justify-center items-center h-screen">
        <div className="bg-white h-1/2 w-3/6 flex flex-col justify-center items-center gap-3">
          <div className="mb-3 text-center">
            <p>Percentage of Form1 fields filled: {percentage}%</p>
          </div>
          <input
            className="w-3/4 px-4 py-1 rounded-1xl border border-gray-300"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            id="address"
          />
          <input
            className="w-3/4 px-4 py-1 rounded-1xl border border-gray-300"
            type="number"
            placeholder="Enter your phoneNo"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            id="phoneNo"
          />
          <button
            className="px-9 py-2 bg-green-700 text-white border border-black"
            onClick={handleNext}
          >
            Submit
          </button>
          <button
            className="px-9 py-2 bg-blue-500 text-white border border-black"
            onClick={handlePrev}
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
}

export default Form2;
