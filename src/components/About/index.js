import React from 'react'
import coverImage from "../../assets/cover/IMG_E2777.JPG";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover"/>
      <div className="my-2">
        <strong>
          <p>I'm a brand new Website Developer who has put his attention into this developer world. Web developing has been a complete new journey to me but also fascinating on how every single aspect operates from front end to back end.</p>
        </strong>
      </div>
    </section>
  )
}

export default About