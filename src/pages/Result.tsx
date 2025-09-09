const Result = () => {
  const ResultData = [
    { ans: "first ans", correctAnd: "correct first ans" },
    { ans: "sec ans", correctAnd: "correct sec ans" },
    { ans: "third ans", correctAnd: "correct third ans" },
    { ans: "fourth ans", correctAnd: "correct fourth ans" },
    { ans: "fifth ans", correctAnd: "correct fifth ans" },
    { ans: "sixth ans", correctAnd: "correct six ans" },
    { ans: "seven ans", correctAnd: "correct seven ans" },
    { ans: "eighth ans", correctAnd: "correct eighth ans" },
  ];

  // Example score calculation
  const correctCount = 2; // Replace with dynamic logic
  const totalCount = ResultData.length;
  const passFailText = correctCount / totalCount >= 0.5 ? "Pass" : "Fail";

  return (
    <div className="min-h-screen pt-15 bg-white flex flex-col items-center px-4 pb-12">
      {/* Result Heading */}
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">Result</h2>

      {/* Score Summary */}
      <h3 className="text-md sm:text-lg md:text-xl text-gray-700 ">
        You got {correctCount} right out of {totalCount}
      </h3>

      {/* Answers Comparison */}
      <div className="w-full max-w-xl bg-gray-50 rounded-xl shadow-md p-4 mb-6">
        <div className="grid grid-cols-2 gap-4 font-semibold text-gray-600 border-b pb-2 mb-2">
          <p>Your Answer</p>
          <p>Correct Answer</p>
        </div>

        {ResultData.map((data, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 text-gray-800 mb-2 bg-white rounded px-2   shadow-sm"
          >
            <p>{data.ans}</p>
            <p className=" text-blue-400">{data.correctAnd}</p>
          </div>
        ))}
      </div>

      {/* Pass / Fail */}
      <p
        className={`text-2xl font-bold mb-2 ${
          passFailText === "Pass" ? "text-green-600" : "text-red-600"
        }`}
      >
        {passFailText}
      </p>

      {/* Reset Button */}
      <button
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
