import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                alt="resume pic"
                src={require("../img/resume.jpg")}
                style={{ height: "200px", borderRadius: "100px" }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Kannepally Koushik</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hardworking Software Developer with good coding skills. Superior
              understanding of a problem and coming up with a rightful solution.
              Comfortable collaborating with team members and working
              independently.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />
            <h5>Address</h5>
            <p>Nizamabad - Telangana , 503002</p>

            <h5>Phone</h5>
            <p>(+91) 7731887711</p>

            <h5>Email</h5>
            <p>kannepallykoushikkumar@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "70%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={"Present"}
              status="Currently Pursuing"
              clgName={"Gurunanak Institute of Technology"}
              degree="Btech"
              branch={"Information Technology"}
              courseWork="Data Structures, Design and Analysis of Algorithms, Communication Networks, Cloud Computing, Database Management Systems, Operating Systems"
              place="Hyderabad,India"
            />
            <hr style={{ borderTop: "3px solid #e22974" }} />
            <h2>Work Experience</h2>
            <Experience
              startYear={"August 2018"}
              endYear={"Oct 2018"}
              company="Suvidha Software Solutions"
              role="Web Developer Intern"
              description="
              	Analyzed requirements and designed, developed and implemented software applications for multiple websites.
               •	Determined coding requirements for site creation , including e-commerce capability and specialized scripts .
               •	Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari.
               •	Used programming capabilities in PHP, SQL and JavaScript and other libraries as needed.
              "
            />
            <Experience
              startYear={"March 2019"}
              endYear={"Feb 2020"}
              company="AutomateEm Pvt LTD"
              role="Software Engineer Intern"
              description="
              Designed and built a prototype using microcontroller and RFID for access control lock
              • Worked on Google Home to configure it for controlling our Home Automation product over voice.
              • Developed a Web Application as per the requirement of the company which manages the Assets and keep a
              track of Company’s Products, Sales and Customers
              • Designed and Developed a REST API for power consumption feature of a Home Automation product
              • Good on embedded system coding using Arduino and ESP8266
              • Wrote Unit Test cases and created multiple documentation
              • Proactively identified multiple use cases resulting in new feature enhancements
              • Troubleshooting and Resolution of bugs on existing features
              "
            />
            <hr style={{ borderTop: "3px solid #e22974" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" score={60} />
            <Skills skill="javascript" score={80} />
            <Skills skill="ReactJs" score={20} />
            <Skills skill="PHP" score={65} />
            <Skills skill="NodeJs" score={45} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
