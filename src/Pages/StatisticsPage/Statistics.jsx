import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center">
          <Link to="/home"><button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go To Home 
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
