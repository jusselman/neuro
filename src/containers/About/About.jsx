import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export const About = () => {
    return (
        <div>
            <div className="About">
                <div className="AboutImgCtn">
                </div>
                <div className="AboutRow">
                    <div className="AboutImg">
                        <img src='https://i.imgur.com/u9aGzBG.jpg' className="AboutProfileImg" alt="avatar" />
                    </div>
                    <p className="AboutDesc1">PI: Angela Yu<br></br>Associate Professor<br></br>ajyu@ucsd.edu</p>
                    <p className="AboutDesc2">SSRB 246<br></br>Department of Cognitive Science<br></br>University of California San Diego</p>
                </div>
                <div className="AboutRowContent">
                    <h1 className="AboutContentHeader">
                        About
                    </h1>
                    <p className="AboutContent">
                        My lab uses mathematically rigorous and algorithmically diverse tools to
                        understand the nature of representation and computations that give rise to
                        intelligent behavior, with particular with regard to the challenges posed
                        by inferential uncertainty and the opportunities afforded by volitional
                        control. Using diverse machine learning and statistical tools, such as
                        Bayesian statistical modeling, control theory, reinforcement learning,
                        and information theory, we develop theoretical frameworks and mathematical
                        models to explain disparate aspects of cognition: perception, attention,
                        decision-making, learning, cognitive control, active sensing, economic
                        choice, and social interactions. My lab mainly specializes in theoretical
                        modeling, but also utilizes various experimental methods, e.g. behavior,
                        eye-tracking, fMRI, to help develop and validate the theoretical concepts.
                        In addition, we collaborate with a number of experimentalists on a range of
                        topics related to human and animal cognition, including neural and psychiatric
                        impairments.
                    </p>
                </div>
                <Link to="/" className="AboutHomeLink">Home</Link>
            </div>
        </div>
    )
}

export default About;
