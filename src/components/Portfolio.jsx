import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail,
    AiOutlineTwitter
} from "react-icons/ai";
import '../components/Portfolio.css';


export default function Portfolio() {
    const [theme, settheme] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [part, setPart] = useState('');
    const [button1Clicked, setButton1Clicked] = useState(true);
    const [button2Clicked, setButton2Clicked] = useState(false);
    const [button3Clicked, setButton3Clicked] = useState(false);

    // const handleButtonabout = (buttonNumber) => {
    //     switch (buttonNumber) {
    //         case 1:
    //             setButton1Clicked(true);
    //             setButton2Clicked(false);
    //             setButton3Clicked(false);
    //             break;
    //         case 2:
    //             setButton1Clicked(false);
    //             setButton2Clicked(true);
    //             setButton3Clicked(false);
    //             break;
    //         case 3:
    //             setButton1Clicked(false);
    //             setButton2Clicked(false);
    //             setButton3Clicked(true);
    //             break;
    //         default:
    //             break;
    //     }
    // };
    let buttonClickTimeout;
    const handleButtonabout = (buttonNumber) => {
        const updateStateWithDelay = (buttonNumberToUpdate) => {
            switch (buttonNumberToUpdate) {
                case 1:
                    setButton1Clicked(true);
                    setButton2Clicked(false);
                    setButton3Clicked(false);
                    break;
                case 2:
                    setButton1Clicked(false);
                    setButton2Clicked(true);
                    setButton3Clicked(false);
                    break;
                case 3:
                    setButton1Clicked(false);
                    setButton2Clicked(false);
                    setButton3Clicked(true);
                    break;
                default:
                    break;
            }
        };
    
        clearTimeout(buttonClickTimeout);
    
       
        buttonClickTimeout = setTimeout(() => {
            updateStateWithDelay(buttonNumber);
        }, 300); 
    };
    

    useEffect(() => {
        console.log(theme);
        document.body.className = theme ? 'darkTheme' : 'lightTheme';
    }, [theme])

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // function handleButtonClick() {
    //     const link = document.createElement('a');
    //     link.href = './assets/cv.pdf';
    //     link.target = '_blank';
    //     link.rel = 'noopener noreferrer';
    //     link.download = 'cv.pdf';
    //     link.click();
    // }

    const words = [
        'Flutter Developer',
        'MERN stack Developer',
        'Front-end Developer',
        'Back-end Developer',
        'Mobile App Developer',
    ];

    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skip_count = 0;
    const skip_delay = 15;
    const speed = 70;


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count === skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset === 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            setPart(words[i].substr(0, offset));
            if (skip_count === 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [i, offset, forwards, skip_count]);


    const handleNavLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
            navbarToggler.click();
        }
    };


    return (
        <>
            <div className="bgimg">
                {/* Navbar Start*/}
                {/* <Navbar expand="lg" bg="navbarbg fixed-top" className={scrolled ? 'd-none' : ''}> */}
                <Navbar expand="lg" className="navbarbg fixed-top " >
                    <Container>
                        {/* <Navbar.Brand className='d-flex'><span className="devname d-flex">Midhun.Dev&copy;</span></Navbar.Brand> */}
                        <Navbar.Brand className='d-flex'>
                            <span className="devname d-flex" style={{ verticalAlign: 'top' }}>Midhun.dev<span style={{ fontSize: '80%' }} className="ms-1"> &copy;</span></span>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={`border-0 text-center ${theme && 'p-0 rounded-1 '} `}>
                            <Nav className="ms-auto p-1">
                                <Nav.Link href="#Home" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">Home</div></Nav.Link>
                                <Nav.Link href="#About" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">About</div></Nav.Link>
                                <Nav.Link href="#Projects" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">Projects</div></Nav.Link>
                                <Nav.Link href="#Contact" className='ms-4' onClick={handleNavLinkClick}><div className="navlink">Contact</div></Nav.Link>
                                <Nav.Link className='ms-4' onClick={() => { settheme(!theme) }}>  {theme
                                    ?
                                    <svg viewBox="0 0 24 24" width="24" height="24" className="pointer navlink lightToggleIcon_pyhR" onClick={handleNavLinkClick}><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
                                    :
                                    <svg viewBox="0 0 24 24" width="24" height="24" className="pointer navlink darkToggleIcon_wfgR" onClick={handleNavLinkClick}><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
                                }</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* Navbar End*/}

                {/* Section 1 - Intro */}
                <Container id="Home" className="maincontainer" >
                    <Row>
                        <Col lg={5} md={6} sm={12} className="order-lg-2" >
                           
                            <div className="rightimg d-flex justify-content-center">
                                <Image src="./assets/dp.jpeg" alt="" className="dpimg" />
                            </div>
                        </Col>
                        <Col lg={7} md={6} sm={12} className="left-header" >
                            {/* style={{ backgroundColor: '#da3cb7' }} */}
                            <div>
                                <h1 className="leftfirsthead">Hi There!<span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span></h1>

                                <h1 className="leftsecondhead">I'm <strong className="main-name">Midhun Raj</strong></h1>
                                <div className=" "><h2 className=" welcomtext ">{part}</h2></div>

                                <p className="description">
                                    "Brief description with insights into myself, my vocational journey and what i engage in professionally."
                                </p>


                            </div>
                            <div>
                                <Row className="d-flex proicons">
                                    {theme
                                        ?
                                        <>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://github.com/MidhunrajGit0022" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillGithub size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://twitter.com/Midhun_raj0077" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiOutlineTwitter size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://www.linkedin.com/in/midhunraj0022/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillLinkedin size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://www.instagram.com/_mi_._dhun_/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillInstagram size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="mailto:midhunraj0022@gmail.com" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillMail size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                        </>
                                        :
                                        <>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://github.com/MidhunrajGit0022" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillGithub size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://twitter.com/Midhun_raj0077" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiOutlineTwitter size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://www.linkedin.com/in/midhunraj0022/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillLinkedin size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="https://www.instagram.com/_mi_._dhun_/" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillInstagram size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={1} className="social-icons">
                                                <a href="mailto:midhunraj0022@gmail.com" target="_blank" rel="noreferrer" className="home-social-icons">
                                                    <span className="social-icons">
                                                        <AiFillMail size={20} />
                                                    </span>
                                                </a>
                                            </Col>
                                        </>
                                    }
                                </Row>
                                <Row>
                                    {theme ? <>
                                        <div className="resumebtn">
                                            <a href="./assets/cv.pdf" target="_blank">
                                            <Button variant="outline-light"  type="button" className="mt-4 rounded-5">
                                                Get Resume
                                            </Button>

                                            </a>
                                        </div>
                                    </>
                                        :
                                        <div className="resumebtn">
                                             <a href="./assets/cv.pdf" target="_blank">
                                            <Button variant="outline-dark"  type="button" className="mt-4 rounded-5">
                                                Get Resume
                                            </Button>

                                            </a>
                                        </div>
                                    }
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* Section 1 Ended*/}


                {/* Section 2 - About */}
                <div>
                    <Container id="About" className="mt-5" >
                    {/* style={{ backgroundColor: '#da3cb7' }} */}
                        <Row>
                            <Col lg={7} className="order-lg-2">
                                <div className="p-5 mt-lg-5 aboutdiv">
                                    <h5 className="navheads text-secondary mb-3"><b><i>{'<--  Who am I  --/>'}</i></b></h5>
                                    <p className="aboutpara">Experienced developer adept in Flutter and MERN stack technologies
                                        (Flutter, Firebase, MongoDB, Express.js, React.js, Node.js).
                                        Skilled in frontend and backend development, with a focus on user-friendly design.
                                        Eager to collaborate and learn within a development team.</p>
                                    <Row>
                                        <Col xs={4}>
                                            <span className={`aboutcategoryhead ${button1Clicked && 'custom-underline'} `} onClick={() => handleButtonabout(1)}>Skills</span>
                                        </Col>
                                        <Col xs={4}>
                                            <span className={`aboutcategoryhead ${button2Clicked && 'custom-underline'} `}  onClick={() => handleButtonabout(2)}>Experience</span>
                                        </Col>
                                        <Col xs={4}>
                                            <span className={`aboutcategoryhead ${button3Clicked && 'custom-underline'} `}  onClick={() => handleButtonabout(3)}>Education</span>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        {
                                            button1Clicked &&
                                            <div>
                                                <Row>
                                                    <div>
                                                        <Row>
                                                            <span className="aboutrole">Web Development</span>
                                                        </Row>
                                                        <Row>
                                                            <span className="aboutcontent">Web App Development</span>
                                                        </Row>
                                                    </div>
                                                </Row>
                                                <Row>
                                                    <div className="mt-2">
                                                        <Row>
                                                            <span className="aboutrole">App Development</span>
                                                        </Row>
                                                        <Row>
                                                            <span className="aboutcontent">Android App Development</span>
                                                        </Row>
                                                    </div>
                                                </Row>
                                            </div>
                                        }
                                        {
                                            button2Clicked &&
                                            <div>
                                                <Row>
                                                    <div>
                                                        <Row>
                                                            <span className="aboutrole">2023 - Current</span>
                                                        </Row>
                                                        <Row>
                                                            <span className="aboutcontent">Softzane Solutions</span>
                                                        </Row>
                                                    </div>
                                                </Row>
                                            </div>
                                        }
                                        {
                                            button3Clicked &&
                                            <div>
                                                <Row>
                                                    <div>
                                                        <Row>
                                                            <span className="aboutrole">2018</span>
                                                        </Row>
                                                        <Row>
                                                            <span className="aboutcontent text-start">Boys High Secondary School, Punalur - Kollam, Kerala</span>
                                                        </Row>
                                                    </div>
                                                </Row>
                                                <Row>
                                                    <div className="mt-2">
                                                        <Row>
                                                            <span className="aboutrole">2018 - 2020</span>
                                                        </Row>
                                                        <Row>
                                                            <span className="aboutcontent text-start">Boys Higher Secondary School, Punalur - Kollam, Kerala</span>
                                                        </Row>
                                                    </div>
                                                </Row>
                                                <Row>
                                                    <div className="mt-2">
                                                        <Row>
                                                            <span className="aboutrole">2020 - 2023</span>
                                                        </Row>
                                                        <Row>
                                                            <span className="aboutcontent text-start">University Institute of Technology, Pathanapuram - Kollam, Kerala</span>
                                                        </Row>
                                                    </div>
                                                </Row>
                                            </div>
                                        }

                                    </Row>
                                </div>
                            </Col>
                            <Col lg={5} className="d-none d-lg-block" >
                                <>
                                   <Container  >
                                   <div className="mt-lg-5 d-flex  justify-content-center align-items-center  ">
                                    
                                        <Image src="./assets/abut.jpg" className="aboutimg my-5" alt="Aboutpic"></Image>
                                    </div>
                                   </Container>
                                   </>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* Section 2 Ended*/}

                 {/* Section 3 Tech Stack*/}
                 <div>

                 </div>
                   {/* Section 3 Ended*/}
            </div>



        </>
    )
}
