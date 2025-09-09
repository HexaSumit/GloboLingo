import { useNavigate, useSearchParams } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { useState } from "react";

const Learn = () => {

  const [searchParams] = useSearchParams();
  //lang contains the code of the language(like hi for hindi)
  const lang = searchParams.get('lang');

  
  const navigate=useNavigate()

  const [count, setCount] = useState<number>(1)
  const handleNext = (): void => {
    if(count<8) setCount((prev) => prev + 1)
    else navigate(`/quiz`)
  }

  const handlePrev = (): void => {
    if (count > 1) setCount((prev) => prev - 1)
  }

  return (
    <div className=" pt-25 flex flex-col items-center justify-center gap-5">
      <h3 className=" font-semibold ">Learning Made Easy with GloboLingo</h3>

      {/* LEARNING PAGE STARTS HERE  */}
      <div className=" flex flex-col gap-5 ">
        <span ><MdOutlineKeyboardBackspace size={40} onClick={handlePrev} /></span>
        <div className=" flex items-center text-size-base">
          <p className=" mr-10">{count} -</p>
          <div className=" flex items-center justify-center gap-5">
            <p className=" ">Word : <span className=" text-textcolor">Meaning</span></p>
            <span><HiMiniSpeakerWave size={30} className=" text-speaker-color mt-2" /></span>
          </div>
        </div>
        <button className=" mt-10 px-10 py-1 bg-button-bg hover:bg-hoverbtn" onClick={handleNext}>{count<8? 'Next':'Move to Quiz'}</button>
      </div>
    </div>
  )
}

export default Learn