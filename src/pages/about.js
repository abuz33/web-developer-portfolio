import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/about.module.css"

const About = () => {
  console.log(styles)
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <div classNameNames={styles.col_about} style={{ marginTop: "20px" }}>
          <h3>WHO AM I?</h3>
          <p>
            I’m a self-motivated, creative developer and teacher with five years
            of teaching experience, specializing in digital content with a keen
            interest in personal development. Nowadays I focused on getting
            better at my profesion and eager to learn all about data and data
            science.
          </p>
        </div>

        <div className={styles.resume}>
          <div className={styles.container}>
            <div className={styles.col_1}>
              <h2 className={styles.text_cente}>My Experience</h2>
              <ul className={styles.timeline}>
                <li>
                  <div className={styles.items}>
                    <h4>
                      <span> 2018 -</span> Vice Principal
                    </h4>
                    <p>
                      We have participated in different olympiads and got some
                      medals. <br />
                      <br />
                      <b>Company </b> Ronaki Hawler Education Company <br />
                      <b>Duration </b> 07/2018 – 06/2019 <br />
                      <b>Location </b> Arbil/Iraq <br />
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.items}>
                    <h4>
                      <span> 2016 -</span> Mathematics Teacher
                    </h4>
                    <p>
                      I worked for the company for three years. I have taken
                      lots of Achievement Certificates from the company. During
                      my years there, I have become first in a knowledge contest
                      between my colleagues. We have organized several social
                      cultural, educational weeks for students to learn about
                      new topic and some intersting information about diffenrent
                      cultures and lessons. <br />
                      <br />
                      <b>Company </b> Ronaki Hawler Education Company <br />
                      <b>Duration </b> 07/2016 – 06/2019 <br />
                      <b>Location </b> Arbil/Iraq <br />
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.items}>
                    <h4>
                      <span> 2014 -</span> Mathematics Teacher
                    </h4>
                    <p>
                      I was working as Mathematics Teacher for two years. We
                      have organized math weeks during my work there. We have
                      had Project Olympiad. <br />
                      <br />
                      <b>Company </b> Salahaddin Ayyubi Education Company <br />
                      <b>Duration </b> 06/2014 – 07/2016 <br />
                      <b>Location </b> Sulaymaniah/Iraq <br />
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.items}>
                    <h4>
                      <span> 2013 -</span> Mathematics Teacher
                    </h4>
                    <p>
                      I was an intern teacher for the company. It was such a
                      great year for me. <br />
                      <br />
                      <b>Company </b> Fezalar Education Institute <br />
                      <b>Duration </b> 09/2013 – 06/2014 <br />
                      <b>Location </b> Arbil/Iraq <br />
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.col_2}>
              <h2 className={styles.text_center}>My Education</h2>
              <ul className={styles.timeline}>
                <li>
                  <div className={styles.items}>
                    <h4>
                      <span> 2013 -</span> Bachelor of Mathematics Education
                    </h4>
                    <p>
                      I have completed my Bachelor degree with my master degree.
                      <br />
                      <br />
                      <b>Institute </b> Yuzuncu Yil University <br />
                      <b>Duration </b> 09/2008 – 07/2013 <br />
                      <b>Location </b> Van/Turkey <br />
                    </p>
                  </div>
                </li>

                <li>
                  <div className={styles.items}>
                    <h4>
                      <span> 2007 -</span> High School
                    </h4>
                    <p>
                      I have completed my High school with honor degree.
                      <br />
                      <br />
                      <b>School </b> Mine Gunasti High School <br />
                      <b>Duration </b> 06/2004 – 07/2007 <br />
                      <b>Location </b> Mersin/Turkey <br />
                    </p>
                  </div>
                </li>

                <li>
                  <div className={styles.items}>
                    <h4>
                      <span> 2004 -</span> Secondary School
                    </h4>
                    <p>
                      I have completed my Secondary with Third place. <br />
                      <br />
                      <b>School </b> Naciye Filizay Secondary School <br />
                      <b>Duration </b> 07/2001 – 06/2004 <br />
                      <b>Location </b> Mersin/Turkey <br />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
