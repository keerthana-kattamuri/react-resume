import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="p-4">
        <div className="row">
          <div className="col-sm-12 col-lg-4 leftPanel text-center p-2">
            <img
              src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="profile image"
              width="300px"
              height="300px"
            />
            <h5>Name: Keerthana</h5>
            <h5>Mobile: 9635412874</h5>
            <h5>Email: keerthana.kattamuri@gmailcom</h5>
            <h5>Addres: Vizag</h5>
          </div>
          <div className="col-sm-12 col-lg-8 rightPanel p-2">
            <div className="row">
              <h5 className="col-12">Career objective:</h5>
              <p className="col-12">
                To secure a challenging position in a reputable organization to
                expand my learnings, knowledge, and skill.{" "}
              </p>
            </div>
            <div className="row">
              <h5 className="col-12"> Educational Details</h5>
              <div class="mx-auto">
                <table class="table table-bordered table-light">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name of the institute</th>
                      <th scope="col">Percentage</th>
                      <th scope="col">Year of passing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Vignan's Institute of Information Technology</td>
                      <td>9.14</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Sri Chaitanya Junior college</td>
                      <td>92%</td>
                      <td>2018</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Delhi Public School</td>
                      <td>7.2</td>
                      <td>2016</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <h5 className="col-12">Technical skills</h5>
              <ul type="square">
                <li>C Programing</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="row">
              <h5 className="col-12">Certificates</h5>
              <ul>
                <li>Programming essentials in C - Cisco</li>
                <li>Programming essentials in Python - Python institute</li>
                <li>
                  NPTEL certification on The Joy Of Computing Using Python
                </li>
                <li>Introduction To HTML5 - Coursera</li>
                <li>Introduction to CSS3 - Coursera</li>
                <li>Communication skills by TCS Ion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
