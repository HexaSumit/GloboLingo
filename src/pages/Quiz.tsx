import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [QuizCounter, setQuizCounter] = useState(1);

  const navigate=useNavigate()
  const handleNextQuiz=():void=>{
    if(QuizCounter<8) setQuizCounter((prev)=>prev+1)
    else navigate(`/result`)
  }

  return (
    <div className="min-h-screen pt-15 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Quiz Container */}
      <div className="bg-gray-800/80 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-md sm:max-w-lg lg:max-w-xl w-full text-center border border-gray-700">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          Quiz
        </h2>

        {/* Question Counter */}
        <p className="text-gray-200 mb-6 text-base sm:text-lg md:text-xl">
          {QuizCounter}- <span className="text-indigo-300">Word</span>
        </p>

        {/* Options Form */}
        <form className="text-left">
          <p className="text-gray-300 mb-4 font-medium text-sm sm:text-base md:text-lg">
            Meaning:
          </p>

          {["Option 1", "Option 2", "Option 3", "Option 4"].map(
            (opt, index) => (
              <label
                key={index}
                className="flex items-center mb-3 cursor-pointer text-gray-200 hover:text-indigo-300 transition text-sm sm:text-base md:text-lg"
              >
                <input
                  type="radio"
                  name="choice"
                  value={`option${index + 1}`}
                  className="mr-3 accent-indigo-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                {opt}
              </label>
            )
          )}

          {/* Next Button */}
          <button
            type="button"
            className="mt-6 w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 text-sm sm:text-base md:text-lg"
            onClick={handleNextQuiz}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quiz;
