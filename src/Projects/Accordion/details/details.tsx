import react, { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import "./details.css";

interface Details {
    summary: string;
}

const Details: React.FunctionComponent<Details> = (props) => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div className="details">
            <header onClick={() => setShowContent(!showContent)}>
                <div className={`details-icon ${showContent && "details-icon-rotate"}`}>
                    <IoChevronDown />
                </div>
                <div className="details-summary">{props.summary}</div>
            </header>
            <div className={`details-content ${showContent && "details-content-show"}`}>{props.children}</div>
        </div>
    );
};

export default Details;
