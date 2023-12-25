import { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import userContext from "../Context/userContext";

function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, setdata } = useContext(userContext);

  // Use useEffect to set data when location state is available
  useEffect(() => {
    if (location.state) {
      setdata(location.state);
    }
  }, [location.state, setdata]);

  const [name, setname] = useState(data.name || '');
  const [email, setemail] = useState(data.email || '');

  const handleNext = (e) => {
    e.preventDefault();
    setdata({ name, email });
    navigate('/next-component');
  };

  return (
    <>
      <div className="bg-violet-500 flex justify-center items-center h-screen">
        <div className="bg-white h-1/2 w-3/6 flex flex-col justify-center items-center gap-3 ">
          <input
            className="w-3/4 px-4 py-1 rounded-1xl border border-gray-300"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            name="name"
            id="Name"
          />
          <input
            className="w-3/4 px-4 py-1 rounded-1xl border border-gray-300"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            name="email"
            id="Email"
          />
          <button
            className="px-9 py-2 bg-green-700 text-white border border-black"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
