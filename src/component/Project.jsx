import React, { Component} from "react";
import "./Project.css";
import My_Project from "./My_Project";


class projects extends React.Component{
    
    constructor(){
        super()

        this.state=({
            id: 1,
            name: 'john',

        })
    }

    render(){  
        const Project=[
            {
                id: 1,
                img:'images/wellfood.png',
                projectName: <i className="name">Wellfood</i>,
                projectDes: "WellFood is a simple and clean food delivery website where users can explore healthy meals and place orders easily. The design is responsive and user-friendly, built using modern frontend tools.",
                tech: "Tech Stack: HTML, CSS, Bootstrap, JavaScript, React",
                eye: <a href="https://saif-wellfood.netlify.app/" target='_blank' rel='noopener noreferrer'><i className="bi bi-eye-fill eye"></i></a>,
                git: <a href="https://github.com/Thesaifshaikh24/Wellfood" target='_blank' rel='noopener noreferrer'><i className="bi bi-github git"></i></a>
            },

            {
                id: 2,
                img:'images/portfolio.png',
                projectName: <i className="name">Portfolio</i>,
                projectDes: "This is my personal website where I share my work, skills, and projects. It also has a contact form that sends messages straight to my email.",
                tech: "Tech Stack: HTML, CSS, Bootstrap, JavaScript, React",
                eye: <i className="bi bi-eye-fill eye"></i>,
                git: <i className="bi bi-github git"></i>
            },

            {
                id: 3,
                img:'images/classyshop.png',
                projectName: <i className="name">Classyshop</i>,
                projectDes: "ClassyShop is an online shopping website where users can explore products, add them to the cart, and place orders. It's built using the MERN stack and has a clean, easy-to-use interface.",
                tech: "Tech Stack: HTML, CSS, Tailwind CSS, JavaScript, React Vite, MongoDB, Express.js, Node.js",
                eye: <i className="bi bi-eye-fill eye" onClick={()=> alert("Coming soon! I'm still working on this project.")}></i>,
                git: <i className="bi bi-github git" onClick={()=> alert("GitHub repo not available yet!")}></i>
            },

            {
                id: 4,
                img:'images/flimcity.jpg',
                projectName: <i className="name">filmcity</i>,
                projectDes: "FilmCity is a simple website where people can easily book pre-wedding shoots, videos, and photo sessions. It offers different packages and easy booking.",
                tech: "Tech Stack: HTML, CSS, Bootstrap, JavaScript, React, MongoDB, Express.js, Node.js",
                eye: <i className="bi bi-eye-fill eye" onClick={()=> alert("Coming soon! I'm still working on this project.")}></i>,
                git: <i className="bi bi-github git" onClick={()=> alert("GitHub repo not available yet!")}></i>
            },
        ]
  return (
    <>
    <section id='projects'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <center>
                    <h1 className="project text-light" data-aos="zoom-in"><i class="bi bi-pc-display-horizontal"></i> Projects</h1>
                    </center>
                </div>
            </div>
        </div>
        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="row">
                                    {
                                        Project.map((val,index)=>{
                                            return(
                                                <>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="row">
                                                        <My_Project
                                                        img={val.img}
                                                        projectName={val.projectName}
                                                        projectDes={val.projectDes}
                                                        tech={val.tech}
                                                        eye={val.eye}
                                                        git={val.git}
                                                        />
                                                    </div>
                                                </div>
                                                </>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
    </section>
      
    </>
  )
}
}

export default projects