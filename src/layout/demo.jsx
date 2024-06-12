import React from "react";

export default function demo() {
  return (
    <div class="page-wrapper">
      <div class="auto-container">
        <div
          className="table-container"
          width="100vw"
          style={{ marginTop: "300px" }}
        >
          <table
            bgcolor="white"
            align="center"
            border={0}
            cellSpacing={20}
            cellPadding={20}
            width={900}
          >
            <tbody>
              <tr cellPadding>
                {/*===============*/}
                {/* Image Section */}
                {/*===============*/}
                <td bgcolor="#1E2837" align="center">
                  <img height={200} src="./myImg.png" alt="my picture" />
                </td>
                {/*==============*/}
                {/* Name Section */}
                {/*==============*/}
                <td bgcolor="#1E2837" align="center">
                  <fieldset>
                    <legend>
                      <h1>
                        <font color="white">Hycient Onyeukwu</font>
                      </h1>
                    </legend>
                    <h3>
                      <font color="white">Professional Fitness Coach</font>
                    </h3>
                  </fieldset>
                </td>
              </tr>
              <tr>
                {/*==================*/}
                {/* About_me Section */}
                {/*==================*/}
                <td bgcolor="#71BDBD" width="35%">
                  <h2>Profile</h2>
                  <p>
                    I am a professional athletics coach with 30 years of
                    Experience coaching athletes for international athletic
                    competitions. I uplold principles of hardwork, dedication,
                    commitment and perseverance to bring out the best in my
                    students
                  </p>
                  <br />
                  <div className="contact-section">
                    <h2>Contact</h2>
                    <p>
                      <a href="https://hycient.vercel.app">
                        <font color="blue">https://hycient.vercel.app</font>
                      </a>
                    </p>
                    <p>
                      <a href="tel:+2348102693805">+2348102693805</a>
                    </p>
                    <p>
                      <a href="mailto:onyeukwuhycient@gmail.com">
                        onyeukwuhycient@gmail.com
                      </a>
                    </p>
                    <p>Location: PortHarcourt, Nigeria</p>
                  </div>
                  <br />
                  <div className="technical-skillset">
                    <table width="100%" cellPadding={7}>
                      <tbody>
                        <tr>
                          <td bgcolor="black" colSpan={2}>
                            <font color="white">Technical Skillset</font>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <ul>
                              <li>
                                <p>Fishing</p>
                              </li>
                              <li>
                                <p>Running</p>
                              </li>
                              <li>
                                <p>Reading</p>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <ul>
                              <li>
                                <p>Hiking</p>
                              </li>
                              <li>
                                <p>Jogging</p>
                              </li>
                              <li>
                                <p>Jumping</p>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
                {/*=================*/}
                {/* Details Section */}
                {/*=================*/}
                <td bgcolor="white" width="70%" cellSpacing={20}>
                  <div className="education">
                    <table cellPadding={7} width="100%">
                      <tbody>
                        <tr bgcolor="#1E2837">
                          <th colSpan={2}>
                            <font color="white">Education</font>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <h4>2014 - 2020</h4>
                          </td>
                          <td>
                            <h4> Bachelor's Degree</h4>
                            <p>University of The People</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <br />
                  <div className="work-experience">
                    <table cellPadding={7} width="100%">
                      <tbody>
                        <tr bgcolor="#1E2837">
                          <th colSpan={2}>
                            <font color="white">Work Experience</font>
                          </th>
                        </tr>
                        <tr>
                          <th align="left">Swimming Intern</th>
                        </tr>
                        <tr>
                          <td>
                            Athletics Academy New Jersey January 2018 -
                            September 2019{" "}
                          </td>
                        </tr>
                        <tr>
                          <th align="left">Swimming Instructor</th>
                        </tr>
                        <tr>
                          <td>
                            Olympics Academy New York March 2021 - February 2022
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <br />
                  <div className="education">
                    <table cellPadding={7} style={{ width: "100%" }}>
                      <tbody>
                        <tr bgcolor="#1E2837">
                          <th colSpan={2}>
                            <font color="white">Awards</font>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <h4>January 2014</h4>
                          </td>
                          <td>
                            <h4>High Jump - First Position</h4>
                            <p>First position in high jump NUGA Games</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h4>May 2016</h4>
                          </td>
                          <td>
                            <h4>Sky Diving - Second Position</h4>
                            <p>Overall second best, fall Skydiving</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer width="100%" bgcolor="red">
          <p align="center" width="100%">
            A demonstration pet project, building a resume template with plain
            HTML, without the use of CSS stylesheet or inline styling.
            <br />
            <br />
            <b align="center">
              The source code to this project can be found in{" "}
              <a
                target="_blank"
                href="https://github.com/Hycient195/html-resume"
              >
                <font color="blue">the link contained here</font>
              </a>
            </b>
          </p>
        </footer>
      </div>
    </div>
  );
}
