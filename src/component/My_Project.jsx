import React from "react";
import "./My_Project.css"

export default function My_Project({img, projectName, projectDes, tech, eye, git}) {
    return (
        <>
        <div className="projectimage" data-aos="flip-left">
            <div className="projectimages">
                <center>
                <img src={img} className="projectimg" alt="" />
                <h2 className="text-light">{projectName}</h2>
                <p className="text-light p-2">{projectDes}</p>
                <p className="text-light p-2">{tech}</p>
                <div className="icon-container">
                    <p>{eye}</p>
                    <p>{git}</p>
                </div>
                </center>
            </div>
        </div>
        </>
    );
}