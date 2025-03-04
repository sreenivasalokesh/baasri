import React from "react";
import { Link } from "react-router-dom";

export default function SareeCard({imageName, title, description, target}) {

    return (
      <div className="saree-main-page-card">
        <img src={imageName} alt={title} />
        <div className="body">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="view-more">
                <Link to={target}>VIEW MORE</Link>
            </div>
            
        </div>       
      </div>
    );
}