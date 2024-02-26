

const Banner = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="max-w-6xl mx-auto flex items-center">
        <img src="https://via.placeholder.com/400x200" alt="Banner Image" className="w-1/2 rounded-lg shadow-lg" />
        <div className="w-1/2 px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Career@HUB</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="#" className="mt-4 inline-block px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
