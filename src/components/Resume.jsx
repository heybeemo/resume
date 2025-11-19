import React, {useEffect, useRef} from "react";
import UnityImg from "../assets/images/unity-img.png";
import UE5Img from "../assets/images/ue5-img.png";
import GodotImg from "../assets/images/godot-img.png";
import CSharpImg from "../assets/images/c#-img.png";
import CPlusPlusImg from "../assets/images/c++-img.png";
import PhotoshopImg from "../assets/images/photoshop-img.png";
import RiderImg from "../assets/images/rider-img.png";
import GitImg from "../assets/images/git-img.png";
import VSImg from "../assets/images/vs-img.png";

const Resume = () => {
    const colors = [
        "#BCE70C",
        "#FF759C",
        "#00CC97",
        "#FFDB59",
        "#6F39FD",
        "#FF7D61",
    ];
    const progressRef = useRef(null);
    const hasAnimated = useRef(false); // Track if the animation has already run

    return (
        <>
            {/* */}
            {/* ADDED mb-5 HERE */}
            <section className="education-experience mb-5" id="resume">
                <div className="row">
                    <div className="col-12"> 
                        <div className="heading-container">
                            <h2 className="section-heading-text about-me fade_up">
                                Experience.
                            </h2>
                            <div className="line"></div>
                        </div>

                        {/* EXPERIENCE ITEM 1: GAME DESIGNER (Stacked) */}
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor"> Game Designer</p>
                                <p className="cursus university">Wildlife Studios 09/2024 - 10/2025</p>
                                <p className="cursus">
                                    Designing and balancing game mechanics and levels, calibrating player progression to create immersive player experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New Row for the remaining stacked experience items */}
                <div className="row"> 
                    
                    {/* EXPERIENCE ITEM 2: PRODUCT MANAGER (Stacked) */}
                    <div className="col-12">
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Product Manager</p>
                                <p className="cursus university">Wildlife Studios 02/2024 - 09/2024</p>
                                <p className="cursus">
                                    Associate Product Manager for Midas Merge, accountable for in-game live events. Designing and refining features, analyzing game data and working closely to art, data, PX and development teams
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE ITEM 3: PRODUCT COORDINATOR (Stacked) */}
                    <div className="col-12"> 
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Product Coordinator</p>
                                <p className="cursus university">Wildlife Studios 04/2022 - 02/2024</p>
                                <p className="cursus">
                                    Coordinating creative teams (artists, developers) to ensure project execution and efficiency. Resolving bottlenecks, aligning initiatives, and analyzing key performance indicators.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE ITEM 4: ROOM INTERACTIVE SYSTEMS (Stacked) */}
                    <div className="col-12">
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Product Manager</p>
                                <p className="cursus university">ROOM Interactive Systems 08/2020 - 03/2022</p>
                                <p className="cursus">
                                    Responsible for product management and team coordination, using gamification and high quality CGI on a serious game for medicine purposes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}
            
            {/* */}
            {/* ADDED mb-5 HERE */}
            <section className="education-experience mb-5"> 
                <div className="row">
                    {/* The entire EDUCATION block now takes up 12 columns */}
                    <div className="col-12"> 
                        <div className="heading-container">
                            <h2 className="section-heading-text about-me fade_up">
                                Education.
                            </h2>
                            <div className="line"></div>
                        </div>
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Bachelor in Architecture and Urbanism</p>
                                <p className="cursus university">
                                    UNIVERSIDADE CRUZEIRO DO SUL | 2013-2017
                                </p>
                            </div>
                        </div>
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Management 3.0 Certification</p>
                                <p className="cursus university">
                                    MGMT / 2021
                                </p>
                            </div>
                        </div>
                        {/* PSM I - CORRIGIDO: Adicionado Instituição e Data. Removida tag <p> vazia. */}
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">PSM I Certification</p>
                                <p className="cursus university">
                                    Scrum.org / 2020
                                </p>
                            </div>
                        </div>
                        {/* EBAC - CORRIGIDO: Adicionado Ano. Removida tag <p> vazia. */}
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Product Design</p>
                                <p className="cursus university">
                                    EBAC - British School of Creative Arts / 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}

            {/* */}
            <section className="design-skill-section">
                <div className="heading-container">
                    <h2 className="section-heading-text design-skill-text fade_up">
                        Skills.
                    </h2>
                    <div className="line"></div>
                </div>
                <div className="design-skill-sub-section">
                    <div className="design-skills-img-main flip_up">
                        <img src={UnityImg} alt="unity-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Unity</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={UE5Img} alt="ue5-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Google Sheets</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main adobe-xd flip_up">
                        <img src={GodotImg} alt="godot-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Adobe Flow</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={CSharpImg} alt="c#-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Workflows</p>
                        </div>
                    </div>

                    <div className="design-skills-img-main flip_up">
                        <img src={PhotoshopImg} alt="photoshop-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Photoshop</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={GitImg} alt="git-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>GIT System</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}
        </>
    );
};
export default Resume;