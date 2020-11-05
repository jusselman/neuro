import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Teaching.css';


export const Teaching = () => {
    return (
        <div className="Teaching">
            <Navbar />
            <div className="TeachingImgCtn">
            </div>
            <div className="TeachingContentCtn">
                <h1 className="TeachPrimaryHeader">TEACHING</h1>
                <h2 className="TeachingSecondaryHeader">UPCOMING</h2>
                <div>
                    <ul>
                        <li><h3><Link className="TeachingLink" to='https://docs.google.com/document/d/11tU4CO6yj3ER0U4_9Ln9vi6zPhmPv_TEQfkTqHYW0h8/edit?usp=sharing' >Winter, 2021: Cogs 202  (Cognitive Science Foundations: Computational Modeling of
    Cognition)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to='https://docs.google.com/document/d/1raZ8R1ltguMo2oKA6Cg8vJkFjuArufrMZXjt7EEkVxo/edit?usp=sharing' >Spring, 2021: Cogs 1 (Introduction to Cognitive Science)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to='https://docs.google.com/document/d/e/2PACX-1vRRl_hU9l7DvUtdRWCwEX0Z1t3K47ctad46A0ETPqKKrp2qFklXmq5pEGbUNYZROsXeHO4dwOHBkgXR/pub'>Spring, 2021: Cogs 180 (Decision Making in the Brain)</Link></h3></li>
                    </ul >
                </div >


                {/* <h3>Current</h3>
                <div>
                    <ul>
                    </ul>
                </div> */}


                <h2 className="TeachingSecondaryHeader">Past</h2>
                <div>
                    <ul>
                        <li><h3><Link className="TeachingLink" to="https://docs.google.com/document/d/11tU4CO6yj3ER0U4_9Ln9vi6zPhmPv_TEQfkTqHYW0h8/edit?usp=sharing">ng, 2020: Cogs 260 (Toward a Computational Understanding of Natural Intelligence and Behavior: Models, Algorithms, and Theories)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://docs.google.com/document/d/1raZ8R1ltguMo2oKA6Cg8vJkFjuArufrMZXjt7EEkVxo/edit?usp=sharing"> toer, 2020: Cogs 180 (Decision Making in the Brain)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://docs.google.com/document/d/e/2PACX-1vRRl_hU9l7DvUtdRWCwEX0Z1t3K47ctad46A0ETPqKKrp2qFklXmq5pEGbUNYZROsXeHO4dwOHBkgXR/pub">
                            Fall, 2019: Cogs 1 (Introduction to Cognitive Science)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://docs.google.com/document/d/e/2PACX-1vSs-UMxgD6sMC6MvzBQ86CXxLKbnPQ4fBNqpHEk8i4BtSEv9cNn8yfi9GaMhggE7LVV_wbWy4Dmaxcu/pub">
                            Fall, 2019: Cogs 202 (Cognitive Science Foundations: Computational Modeling of
    Cognition)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://docs.google.com/document/d/1iyJsS6NfCSV5508KAGdjOvOLl5-QSDaZ4LK_AXbAqKM/edit?usp=sharing">
                            Spring, 2019: Cogs 202 (Cognitive Science Foundations: Computational Modeling of
    Cognition)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://piazza.com/ucsd/winter2018/cogs118d/home">
                            Winter, 2018: Cogs 118D (Mathematical Statistics for Behavioral
    Data Analysis)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://piazza.com/ucsd/winter2018/cogs243/home">
                            Winter, 2018: Cogs 243 (Statistical Inference and Data Analysis)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs180/sp17/">
                            Spring, 2017: Cogs 180 (Neural Coding in Sensory Systems)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs118d/wi17/">
                            Winter, 2017: Cogs 118D (Mathematical Statistics for Behavioral Data
    Analysis)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs243/wi17/">
                            Winter, 2017: Cogs 243 (Statistical Inference and Data Analysis)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs202/sp16/">
                            Spring, 2016: Cogs 202 (Cognitive Science Foundations: Computational
    Modeling of Cognition)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs180/sp16/">
                            Spring, 2016: Cogs 180 (Neural Coding in Sensory Systems)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs202/sp14/">
                            Spring, 2014: Cogs 202 (Cognitive Science Foundations: Computational
    Modeling of Cognition)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs180/sp14/">
                            Spring, 2014: Cogs 180 (Neural Coding in Sensory Systems)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs1/sp13">
                            Spring, 2013: Cogs 1 (Introduction to Cognitive
    Science)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="https://thiscourse.com/ucsd/cogs202/sp13/">
                            Spring, 2013: Cogs 202 (Cognitive Science
                            Foundations: Computational Modeling of
    Cognition)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs160_sp12/index.html">
                            Spring, 2012: Cogs 160 (Neural Coding in Sensory
    Systems)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs202_sp12/index.html">
                            Spring, 2012: Cogs 202 (Cognitive Science
                            Foundations: Computational Modeling of
    Cognition)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs200_fa11/schedule.html">
                            Fall, 2011: Cogs 200 (Cognition under Uncertainty)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs1_sp11/index.html">
                            Spring, 2011: Cogs 1 (Introduction to Cognitive
    Science)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs160_sp11/index.html">
                            Spring, 2011: Cogs 160 (Neural Coding in Sensory Systems)
    </Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="http://yulab.ucsd.edu/~yulab/wiki/index.php/Cogs_260:_Statistical_Methods_and_Applications_in_Cognitive_Science">
                            Fall, 2010: Cogs 260 (Statistical Methods and
                            Applications in Cognitive Science)
    </Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs160_sp10/cogs160_272.html">
                            Spring, 2010: Cogs 160/272 (Neural Coding in Sensory Systems)
    </Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs118A_wi10/cogs118A.html">
                            Winter, 2010: Cogs 118A (Natural Computation I)
    </Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs1_wi09/cogs1.html">
                            Winter, 2009: Cogs 1 (Introduction to Cognitive
    Science)</Link></h3></li>
                        <li><h3><Link className="TeachingLink" to="Teaching/Cogs118A_wi09/cogs118A.html">
                            Winter, 2009: Cogs 118A (Natural Computation I)</Link>
                        </h3></li>
                    </ul>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Teaching;
