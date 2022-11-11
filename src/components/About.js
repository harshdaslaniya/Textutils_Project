import React from 'react'

export default function About(props) {
    
    return (
        <div className='container' >
        <h1  style= {props.s1}>About US</h1>
        <div className="accordion "  id="accordionExample">
            <div className="accordion-item" style={props.s1}>
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={props.s2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Project Details.....
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  This project<strong>Textutils</strong> is for customize the text that user provide and for that verity of function is given in this Project. 
                </div>
              </div>
            </div>
            <div className="accordion-item" style={props.s1}>
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={props.s2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Project Functionality.....
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                In the <strong>Textutils</strong>many type of function and summary of text are given.If we talk about main function that are provided is Darkmode, text preview, copy text, and also download text in '.txt' file.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={props.s1}>
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={props.s2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  About ME.....
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Hi guys 👋 myself <strong>Harsh Daslaniya😁</strong>.I am doing my graduation in Information technology🧑🏻‍💻. If you want to contact me you can go through contact-us.
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
