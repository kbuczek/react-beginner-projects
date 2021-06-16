import react, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="singleQuestion">
      <header onClick={() => setShowInfo(!showInfo)}>
        <h5>{title}</h5>
        <div className="icon">
          {showInfo ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
        </div>
      </header>
      {showInfo && <p className="content">{info}</p>}
    </div>
  );
};

export default SingleQuestion;
