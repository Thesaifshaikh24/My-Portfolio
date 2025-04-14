import React, { Component} from "react";
import "./Skills.css"
import My_Skills from "./My_Skills";

class Skills extends React.Component{
    
    constructor(){
        super()

        this.state=({
            id: 1,
            name: 'john',

        })
    }

    render(){
        
        const Skill=[
            {
                id: 1,
                img:'images/mongo.png',
                skillName:'MongoDB'
            },

            {
                id: 2,
                img:'images/node.png',
                skillName:'Nodejs'
            },

            {
                id: 3,
                img:'images/express.png',
                skillName:'Express'
            },

            {
                id: 4,
                img:'images/mongoose.png',
                skillName:'Mongoose'
            },

            {
                id: 5,
                img:'images/react.png',
                skillName:'React'
            },

            {
                id: 6,
                img:'images/javascript.png',
                skillName:'JavaScript'
            },

            {
                id: 7,
                img:'images/html.png',
                skillName:'HTML'
            },

            {
                id: 8,
                img:'images/css.png',
                skillName:'CSS'
            },

            {
                id: 9,
                img:'images/github.png',
                skillName:'GitHub'
            }
        ]
        return (
            <>
            <section id="skills">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <hr className="text-light" />
                            <center>
                                <h1 className="about text-light" data-aos="zoom-in"><i class="bi bi-pc-display-horizontal"></i> Skills</h1>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                            {
                                Skill.map((val,index)=>{
                                    return(
                                        <>
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="row">
                                                <My_Skills
                                                img={val.img}
                                                skillName={val.skillName
                                                }
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
                <hr  className="text-light"/>
            </section>
            </>
        )
    }

}

export default Skills