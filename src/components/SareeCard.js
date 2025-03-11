import React from "react";
import { Link, useNavigate } from "react-router-dom";

function truncateText(text, wordLimit) {
  const words = text.split(" ");
  var newText = "";
  if (words.length > wordLimit) {
    newText = words.slice(0, wordLimit).join(" ") + "...";
  }else{
    newText = text;
  }

  return newText;
}


export default function SareeCard({imageName, title, description, target}) {

  const navigate = useNavigate();

    return (
      <div className="saree-main-page-card">
        <img src={imageName} alt={title} onClick={()=>navigate(target)}/>
        <div className="body">
        <div className="body-container">
            <div className="title">{title}</div>
            <div className="description">{truncateText(description, 25)}</div>
            <div className="view-more">
                <Link to={target}>View More</Link>
            </div>
          </div>
            
        </div>       
      </div>
    );
}