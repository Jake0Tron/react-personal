import React, { Component } from 'react';
import './resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div className="ResumeHeader">
          <div className="ResumeHeaderTitle">Jake Deacon</div>
          <div className="ResumeHeaderSubTitle">Software Developer</div>
        </div>

        <div className="ResumeContent">
          <div className="ResumeObjective">
            <div className="Title">Objective</div>
            <div className="Content">To gain experience and to continue learning and improving my skills in an agile-based software development team.</div>
          </div>
          <div className="SplitGroup">
            <div className="ResumeCharacteristics">
              <div className="Title">Characteristics</div>
              <div className="Content">
                <ul>
                  <li>Critical thinker with strong problem solving skills</li>
                  <li>Strong communication skills</li>
                  <li>Pays close attention to detail</li>
                  <li>Team player who works well unsupervised</li>
                  <li>Fast Learner</li>
                </ul>
              </div>
            </div>
            <div className="ResumeAchievements">
              <div className="Title">Summary of Achievements</div>
              <div className="Content">
                <ul>
                  <li>Received an Act For Impact reward in TD Securities for work on Diamond Onboarding</li>
                  <li>Released Mobile Game “Marionette Melee” to Google Play and Apple store</li>
                  <li>Nominated for Co-op Student of the Year Award 2015</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ResumeSkills">
            <div className="Title">Languages/Paradigms I've Worked With</div>
            <div className="Content">
              <div>
                <div className="ContentTableRow">
                </div>
                <div className="ContentTableRow">
                  <div className="ContentTableCell">AngularJS</div>
                  <div className="ContentTableCell">React</div>
                  <div className="ContentTableCell">Vagrant</div>
                </div>
                <div className="ContentTableRow">
                  <div className="ContentTableCell">Microsoft SQL Server Management Studio</div>
                  <div className="ContentTableCell">NPM/Bower/Yarn/Maven</div>
                  <div className="ContentTableCell">Artillery Load Testing Framework</div>
                </div>
                <div className="ContentTableRow">
                  <div className="ContentTableCell">Linux/Unix/Bash File Management and Scripting</div>
                  <div className="ContentTableCell">C ,C++, C#</div>
                  <div className="ContentTableCell">Java, Junit &amp; JDBC</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ResumeEducation">
            <div className="Title">Education</div>
            <div className="SubTitle">September 2012 – April 2016</div>
            <div className="Content">
              Honours Bachelor of Technology – Software Development – Seneca College – Toronto, ON.
  Graduated with a 3.7GPA
            </div>
          </div>
          <div className="ResumeExperience">
            <div className="Title">Work Experience</div>
            <div className="SubTitle">
              Technology Solutions Associate | FIDCM IT – Derivatives, Valuations and Trading Risk
                </div>
            <div className="Content">
              August 2017 – February 2018
                </div>
            <div className="Content">
              <ul>
                <li>Worked on an Agile team to design, develop a progressive web app for Trader Risk Management</li>
                <li>Aided in migrating the progressive web app from legacy to a new Angular framework</li>
                <li>Automated developer onboarding process to reduce environment setup time from weeks to days</li>
                <li>Contributed to increasing test coverage and generating coverage reports for Transparency Trader</li>
                <li>Implemented Artillery Load testing solution to aid in simulating server load and performance monitoring</li>
              </ul>
            </div>
            <div className="SubTitle">
              Technology Solutions Associate | CBAW – Business Banking Information Management
            </div>
            <div className="Content">
              February 2016 - August 2017
                </div>
            <div className="Content">
              <ul>
                <li>Participated in and contributed to Agile Ceremonies to aid in planning and coordination of projects</li>
                <li>Assisted in automation of data workflow process for Commercial Management Reporting Software Tableau dashboards using Python and PowerShell</li>
                <li>Contributed in the formative stages of Small Business Banking Management Reporting Software by developing and coordinating Oozie workflows to extract data from TD’s Big Data Platform</li>
                <li>Designed Extraction Queries in Hive and coordinated Sqooping of data into MSSQL to be used for Tableau Visualization through Oozie</li>
                <li>Implemented a Python-based Unit testing framework in “Behave” to test functionality of various SSIS ETL processes</li>
                <li>Utilized Liquibase as a means of database creation and automated migration</li>
              </ul>
            </div>
            <div className="SubTitle">
              Technology Solutions Associate | TD Securities – Equities Technology
            </div>
            <div className="Content">
              July 2016 – February 2017
            </div>
            <div className="Content">
              <ul>
                <li>Implemented entitlement capabilities and preference management in TD Securities Ripple Trader Application</li>
                <li>Contributed to TD’s Diamond Onboarding initiative by implementing XML Feed Configuration capabilities and error handling</li>
                <li>Earned Act for Impact award for efforts on Diamond Onboarding process</li>
                <li>Designed and created an Active Directory Searcher to handle spreadsheets of user information that need to be validated against TD’s Active Directory</li>
                <li>Implemented Duplicate checking capabilities for ETF Model Manager to aid in the Claymore/iShares rebranding process</li>
                <li>Learned TIBCO Rendezvous networking protocol, implemented C# library for TD Securities' Ripple Trading Software</li>
              </ul>
            </div>
          </div>
          <div className="ResumeInterests">
            <div className="Title">Interests</div>
            <div className="Content">
              UI Design, App Development, Augmented Reality, Running, Soccer, Hockey, Baseball, Gaming, Game Design, ESports
            </div>
          </div>
        </div>
        <div className="ResumeFooter">
        </div>
      </div >

    );
  }
}

export default Resume;
