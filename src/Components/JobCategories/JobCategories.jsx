import { useState, useEffect } from "react";
import { AiFillTrophy } from "react-icons/ai";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/categories.json");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl font-bold m-2">Jobs Categories</h1>
      <div className="flex flex-wrap justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="m-4 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <AiFillTrophy className="text-4xl mx-auto" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {category.category_name}
              </div>
              <p className="text-gray-700 text-base">{category.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCategories;
