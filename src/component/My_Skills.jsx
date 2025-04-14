import React from "react";
import "./My_Skills.css"

export default function My_Skills({img, skillName}) {
    return (
        <>
        <div className="image" data-aos="fade-up">
            <div className="images" >
                <center>
                <img src={img} className="img" alt="" />
                <h2 className="text-light">{skillName}</h2>
                </center>
            </div>
        </div>
        </>
    );
}
