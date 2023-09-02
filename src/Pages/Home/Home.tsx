import React, { useState, useEffect } from 'react'
import './Home.css';
import { Col, Row, Container, Dropdown, Navbar, Offcanvas, Carousel } from "react-bootstrap";
import CommanText from '../../Components/CommanText/CommanText';
import CustomButton from 'src/Components/CustomButton/CustomButton';
import TickImg from 'src/assets/verifyTick.png';
import OfferingImg from 'src/assets/offering.jpg';
import AboutUsImg from 'src/assets/aboutUsLogo.png';
import tickIcon from 'src/assets/tick.png';
import MainFullLogo from 'src/assets/mainLogoFull.png';
import bannerGirl from 'src/assets/bannerGirl.png';
import rameshp from 'src/assets/rameshp.jpeg';
import satish from 'src/assets/satish.jpeg';
import mentor3 from 'src/assets/mentor3.jpeg';
import mentor4 from 'src/assets/mentor4.jpeg';
import pavan from 'src/assets/pavan.jpeg';
import vinod from 'src/assets/vinodMentor.jpeg';
import arvinda from 'src/assets/arvinda.jpeg'
import krishnaPranav from 'src/assets/krishnaPranav.jpeg';

import offering1 from 'src/assets/offering1.png';
import offering2 from 'src/assets/offering2.png';
import offering3 from 'src/assets/offering3.png';
import offering4 from 'src/assets/offering4.png';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AuthDialog from 'src/Components/AuthDialog/AuthDialog';
import CounsellingDialog from 'src/Components/CounsellingDialog/CounsellingDialog';
import ResetPasswordDialog from 'src/Components/AuthDialog/ResetPasswordDialog';
import { RxAvatar } from "react-icons/rx";
import { BsChevronDown, BsArrowLeft } from "react-icons/bs";
import EditProfile from 'src/Components/AuthDialog/EditProfile';
import { useQuery } from 'react-query';
import { getProfile } from 'src/Components/AuthDialog/AllApis';
import { LiaLinkedinIn } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

function Home() {

    const testimonial = [
        {
            image: rameshp,
            name: "Ramesh P",
            achievement: "Ramesh P | IIM Ahmedabad",
            description: "I used to think that the limited options available at college are all that I have till I met dreamers club. They changed the way I looked at my career by providing clear picture about career options and constructive feedback on my strengths and weaknesses. 1:1 discussions helped unlock my true potential."
        },
        {
            image: pavan,
            name: "Pavan Siripurapu",
            achievement: "Pavan S, IIM Bangalore",
            description: "I joined dreamers club coaching in 2018 after their bootcamp in our college. The mentors have been instrumental in helping me get admission in IIM Bangalore. Right from teaching in interesting and innovative ways to guiding me in interview process, they have been a one stop solution for me throughout my CAT journey"
        },
        {
            image: satish,
            name: "Satish Tangella",
            achievement: "Satish T | IIM Calcutta",
            description: "The support from mentors at dreamers club played an important role in my CAT preparation. Their ability to simplify problem solving techniques, the 1-on-1 talks on my improvement areas and the guidance on how to tackle interviews helped me improve in a consistent manner."
        },
        {
            image: arvinda,
            name: "Aravinda Abbireddy",
            achievement: "Aravinda A, FMS",
            description: "Dreamers club has a unique way of personalizing preparation and guidance. They keep you engaged throughout CAT journey. The best part is their mock tests analysis."
        }
    ]

    const [AuthDialogStatus, setAuthDialogStatus] = useState(false)
    const [UserData, setUserData] = useState<any>(null)

    const UserId = localStorage.getItem('user_Id');
    const userData: any = localStorage.getItem('user');

    const [DefaultActiveAccordion, setDefaultActiveAccordion] = useState("0")

    const [expand, setExpend] = useState(false)

    useEffect(() => {
        if (UserId) {
            let userData: any = localStorage.getItem('user');
            if (userData != 'undefined') {
                setUserData(JSON.parse(userData))
            }
        }
    }, [localStorage.getItem('user')])

    const { data: companyProfileData, refetch } = useQuery(
        ["userProfile"],
        () => getProfile(UserId),
        {
            retry: 1,
            refetchOnWindowFocus: false,
            enabled: UserId != 'undefined' && UserId != undefined ? true : false
        }
    );

    useEffect(() => {
        if (companyProfileData?.user) {
            localStorage.setItem("user", JSON.stringify(companyProfileData?.user));
            setUserData(companyProfileData?.user)
        }
    }, [companyProfileData])

    const handleAccordianEvent = (data: any) => {
        console.log(data)
        setDefaultActiveAccordion(data)
    }

    const closeDialog = (data: any) => {
        setAuthDialogStatus(data.status)

        if (data?.isResetPassword) {
            setResetPasswordStatus(data?.isResetPassword)
        }
    }

    const [CounsellingDialogStatus, setCounsellingDialogStatus] = useState(false)

    const closeCounDialog = (data: any) => {
        setCounsellingDialogStatus(data)
    }

    const [ResetPasswordStatus, setResetPasswordStatus] = useState(false)

    const closeResetDialog = (data: any) => {
        setResetPasswordStatus(data)
    }

    const [EditDialog, setEditDialog] = useState(false)
    const [counclingFormType, setCounclingFormType] = useState('')
    const closeEditDialog = (data: any) => {
        refetch()
        setEditDialog(data)
    }

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            {EditDialog && <EditProfile closeDialogFn={(e: any) => closeEditDialog(e)} dialogOpen={EditDialog} />}

            {ResetPasswordStatus && <ResetPasswordDialog closeDialogFn={(e: any) => closeResetDialog(e)} dialogOpen={ResetPasswordStatus} />}

            {AuthDialogStatus && <AuthDialog closeDialogFn={(e: any) => closeDialog(e)} dialogOpen={AuthDialogStatus} />}

            {CounsellingDialogStatus && <CounsellingDialog closeDialogFn={(e: any) => closeCounDialog(e)} dialogOpen={CounsellingDialogStatus} counclingType={counclingFormType} />}

            <div className="w-100">
                <Row className="mx-0 homeHeader flexBetween px-4">
                    <Col className="flexStart mx-0" xs={12} md={'auto'}>
                        <div className="mx-4 px-3 flexStart">
                            <div className="mainWebLogo">
                                <img src={MainFullLogo} width="100%" height="100%" />
                                {/* </div>

                            <div>
                                <div className="flexStart">
                                    <CommanText tag="h2" text="Dreamers" fontSize={29} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h2" text=" Club" className="mx-2" fontSize={29} fontWeight={600} colorType="dark" />
                                </div>
                                <CommanText tag="p" text="TRANSFORMING DREAMS INTO REALITY" align="left" fontSize={8} fontWeight={400} colorType="blueGray" /> */}
                            </div>
                        </div>
                    </Col>
                    <Col className="flexEnd" xs={8}>
                        <div className="isPcView">
                            <div className="flexStart">
                                <CommanText tag="h2" text="Email:" className="mx-2" fontSize={16} fontWeight={500} colorType="dark" />

                                <CommanText tag="h2" text="help@dreamersclub.co.in" className="mx-1" fontSize={16} fontWeight={400} colorType="dark" />
                            </div>
                        </div>

                        <div className="isPcView">
                            <div className="flexStart">
                                <CommanText tag="h2" text="Mob:" className="mx-2" fontSize={16} fontWeight={500} colorType="dark" />

                                <CommanText tag="h2" text="+91-7780325696" className="mx-1" fontSize={16} fontWeight={400} colorType="dark" />
                            </div>
                        </div>

                        <div className="isPcView">
                            {!UserData && <CustomButton className="mx-4" name="Log in/Sign Up" onClick={() => setAuthDialogStatus(true)} fontSize={16} fontWeight={500} height={26} />}
                        </div>

                        <div className="isPcView">
                            {UserData && <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <div className="d-flex align-items-center profileBadgeDiv"><span className="mx-2 flexStart"><RxAvatar /> <CommanText tag="h2" text={UserData?.name} textCase="capitalize" className="mx-1" fontSize={14} fontWeight={600} colorType="primary" /></span>
                                        <BsChevronDown />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setEditDialog(true)}>Edit Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setResetPasswordStatus(true)}>Change Password</Dropdown.Item>
                                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>}
                        </div>

                        <div className="isMobileView">

                            {UserData && <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <div className="d-flex align-items-center profileBadgeDiv"><span className="mx-2 flexStart"><RxAvatar /></span>
                                     </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setEditDialog(true)}>Edit Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setResetPasswordStatus(true)}>Change Password</Dropdown.Item>
                                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>}

                            {!UserData && <div className="mobileLogin" ><BiLogIn onClick={() => setAuthDialogStatus(true)} /></div> }

                            {/* <Navbar expand={expand} className="canvasBtnDiv mb-3">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                                {UserData && <div className="mx-2 flexStart"><RxAvatar /> <CommanText tag="h2" text={UserData?.name} textCase="capitalize" className="mx-1" fontSize={14} fontWeight={600} colorType="primary" /></div>}
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>

                                            {UserData && <CommanText className="w-100 pointer px-2" tag="h2" onClick={() => setEditDialog(true)} text="Edit Profile" fontSize={12} fontWeight={500} />}
                                            {UserData && <CommanText className="w-100 pointer my-3 px-2" tag="h2" onClick={() => setResetPasswordStatus(true)} text="Change Password" fontSize={12} fontWeight={500} />}
                                            {UserData && <CommanText className="w-100 pointer my-3 px-2" tag="h2" onClick={logout} text="Logout" fontSize={12} fontWeight={500} />}
                                            {!UserData && <CommanText className="w-100 pointer my-3 px-2" tag="h2" onClick={() => { setAuthDialogStatus(true);  }} text="Log in/Sign Up" fontSize={12} fontWeight={500} />}
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar> */}
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="homeContainer">
                <Row className="mx-0 homeTopBanner">
                    <Col xs={12} md={8} className="flexStart homeTopBannerInnerOne">
                        <div>

                            <div className="onlineClassDiv py-1 px-2">
                                <CommanText tag="p" text="Online CAT classes" fontSize={14} fontWeight={500} />
                            </div>

                            <CommanText tag="h1" className="font64_34" text="Transforming" fontWeight={600} />
                            <CommanText tag="h1" className="font64_34" text="Dreams Into Reality" fontWeight={600} />

                            <div className="flexStart my-4 bannerPromo">
                                <div className="flexStart">
                                    <div>
                                        <img src={TickImg} height="100%" width="100%" />
                                    </div>
                                    <CommanText tag="h4" className="mx-1" text="1:1 Mentorship" fontSize={22} fontWeight={400} colorType="dark" />
                                </div>
                                <div className="flexStart bannerPromoMx4">
                                    <div>
                                        <img src={TickImg} height="100%" width="100%" />
                                    </div>
                                    <CommanText tag="h4" className="mx-1" text="Guidance from CAT Toppers" fontSize={22} fontWeight={400} colorType="dark" />
                                </div>
                            </div>

                            <div className="flexStart my-5 bannerPromo">
                                <CustomButton name="Request a Callback" className="requestBtn" onClick={() => { setCounsellingDialogStatus(true); setCounclingFormType('request') }} fontSize={16} fontWeight={600} height={58} />

                                <div className="bannerPromoMx4">
                                    <CustomButton name="Enroll Now" className="enrollBtn" onClick={() => { setCounsellingDialogStatus(true); setCounclingFormType('enroll') }} fontSize={16} fontWeight={600} height={58} borderColor="primary" textColor="primary" background_color="transparent" buttonOutline={true} />
                                </div>

                            </div>

                        </div>
                    </Col>
                    <Col xs={4} className="position-relative h-100 homeTopImageBannerMain">
                        <div className="imageGreenCircle"></div>
                        <div className="topBannerImageContainer">
                            <img src={bannerGirl} width="100%" height="100%" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="textBannerBg w-100 flexCenter borderBox py-5">
                <CommanText tag="h4" align="center" text="Cracking CAT is 90% about getting the right guidance and the rest is about getting the basics right. We aim to make top-notch CAT coaching affordable and accessible to everyone." fontSize={24} fontWeight={400} colorType="light" />
            </div>

            <div className="homeContainer">
                <div className="ourofferingsCard px-4">
                    <div className="my-5 pt-4">
                        <div className="flexCenter">
                            <CommanText tag="h4" align="center" text="Our" fontSize={32} fontWeight={500} colorType="dark" />
                            <CommanText tag="h4" className="mx-2" align="center" text="Offerings" fontSize={32} fontWeight={500} colorType="primary" />
                        </div>

                        {/* <CommanText tag="h4" className="my-3" align="center" text="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod" fontSize={16} fontWeight={400} colorType="dark" /> */}

                    </div>

                    <div className="isMobileView">

                        <Carousel nextIcon={<BsArrowRight />} prevIcon={<BsArrowLeft />} indicators={false} interval={3000}>
                            <Carousel.Item>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering1} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Online CAT Classes" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="Attend classes without the hassle of travelling" fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering2} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Mock Analysis" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="Mocks are a key aspect of CAT preparation strategy. We help you analyze mocks and improve your performance." fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering3} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Gamified Learning" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="CAT prep should be fun. We bring interesting weekly challenges to gamify your preparation." fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering4} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="WAT/PI Guidance" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="Guidance on how to present your best version and convey your ideas in a coherent manner." fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="isPcView">
                        <Row className="mx-0 flexBetween">
                            <Col>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering1} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Online CAT Classes" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="Attend classes without the hassle of travelling" fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Col>

                            <Col>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering2} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Mock Analysis" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="Mocks are a key aspect of CAT preparation strategy. We help you analyze mocks and improve your performance." fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Col>

                            <Col>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering3} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Gamified Learning" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="CAT prep should be fun. We bring interesting weekly challenges to gamify your preparation." fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Col>

                            <Col>
                                <div className="offeringCard">
                                    <div className="offeringImg">
                                        <img src={offering4} width="100%" height="100%" />
                                    </div>

                                    <CommanText tag="h4" className="mt-3 mb-2" align="left" text="WAT/PI Guidance" fontSize={14} fontWeight={600} colorType="primary" />
                                    <CommanText tag="h4" className="lineHeight17" align="left" text="Guidance on how to present your best version and convey your ideas in a coherent manner." fontSize={12} fontWeight={400} colorType="dark" />

                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>





            <div className="homeContainer">
                <div className="my-5 pt-4">
                    <div className="flexCenter">
                        <CommanText tag="h4" align="center" text="About" fontSize={32} fontWeight={500} colorType="dark" />
                        <CommanText tag="h4" className="mx-2" align="center" text="Mentors" fontSize={32} fontWeight={500} colorType="primary" />
                    </div>

                    {/* <CommanText tag="h4" className="my-3" align="center" text="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod" fontSize={16} fontWeight={400} colorType="dark" /> */}

                </div>

                <div className="isMobileView">

                    <Carousel nextIcon={<BsArrowRight />} prevIcon={<BsArrowLeft />} indicators={false} interval={2000}>
                        <Carousel.Item>
                            <Col xs={12} className="MentorsCardMain">
                                <div className="MentorsCardMainImg">
                                    <img src={mentor4} width="100%" height="100%" />
                                </div>
                                <div className="MentorsCardMainBottom">
                                    <div className="MentorsCardMainBottomTopCard px-3">
                                        <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Ramakrishna Bhimana" colorType="light" />

                                        <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="DILR mentor. Scored 99.94%ile in CAT with 100%ile in DILR. Pursued MBA from IIM Ahmedabad." colorType="light" />
                                    </div>
                                    <a href="https://www.linkedin.com/in/ramakrishnabhimana/" target="_blank" ><div className="my-2 d-flex align-items-center">
                                        <div className="linkedIcon">
                                            <LiaLinkedinIn />
                                        </div>
                                        <CommanText tag="p" fontSize={14} text="/ramakrishnabhimana" colorType="dark" />

                                    </div>
                                    </a>
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col xs={12} className="MentorsCardMain">
                                <div className="MentorsCardMainImg">
                                    <img src={krishnaPranav} width="100%" height="100%" />
                                </div>
                                <div className="MentorsCardMainBottom">
                                    <div className="MentorsCardMainBottomTopCard px-3">
                                        <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Krishna Pranav" colorType="light" />

                                        <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="VARC mentor. He scored  99.87%ile in CAT VARC section. Pursued MBA from IIM Ahmedabad" colorType="light" />
                                    </div>
                                    <div className="my-2 d-flex align-items-center">
                                        <div className="linkedIcon">
                                            <LiaLinkedinIn />
                                        </div>
                                        <CommanText tag="p" fontSize={14} text="/PranavCSK" colorType="dark" />
                                    </div>

                                </div>
                            </Col>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Col xs={12} className="MentorsCardMain">
                                <div className="MentorsCardMainImg">
                                    <img src={vinod} width="100%" height="100%" />
                                </div>
                                <div className="MentorsCardMainBottom">
                                    <div className="MentorsCardMainBottomTopCard px-3">
                                        <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Vinod Mummidisetti" colorType="light" />

                                        <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="QA mentor. He scored 99.92%ile in QA with overall 99.82%ile in CAT. Pursued MBA from IIM Ahmedabad." colorType="light" />
                                    </div>
                                    <a href="https://www.linkedin.com/in/vinodmummidisetti/" target="_blank"><div className="my-2 d-flex align-items-center">
                                        <div className="linkedIcon">
                                            <LiaLinkedinIn />
                                        </div>
                                        <CommanText tag="p" fontSize={14} text="/VinodMummidisetti" colorType="dark" />
                                    </div>
                                    </a>
                                </div>
                            </Col>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Col xs={12} className="MentorsCardMain">
                                <div className="MentorsCardMainImg">
                                    <img src={mentor3} width="100%" height="100%" />
                                </div>
                                <div className="MentorsCardMainBottom">
                                    <div className="MentorsCardMainBottomTopCard px-3">
                                        <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Kalyan Konidala" colorType="light" />

                                        <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="QA mentor. He scored 99.79%ile in QA with overall 99.69%ile in CAT. Pursued MBA from IIM Ahmedabad." colorType="light" />
                                    </div>
                                    <a href="https://www.linkedin.com/in/kalyan-konidala-58b467140/" target="_blank"><div className="my-2 d-flex align-items-center">
                                        <div className="linkedIcon">
                                            <LiaLinkedinIn />
                                        </div>
                                        <CommanText tag="p" fontSize={14} text="/KalyanKonidala" colorType="dark" />
                                    </div>
                                    </a>

                                </div>
                            </Col>
                        </Carousel.Item>
                    </Carousel>

                </div>

                <div className="isPcView">
                    <Row className="mx-0 flexBetween">
                        <Col xs={3} className="MentorsCardMain">
                            <div className="MentorsCardMainImg">
                                <img src={mentor4} width="100%" height="100%" />
                            </div>
                            <div className="MentorsCardMainBottom">
                                <div className="MentorsCardMainBottomTopCard px-3">
                                    <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Ramakrishna Bhimana" colorType="light" />

                                    <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="DILR mentor. Scored 99.94%ile in CAT with 100%ile in DILR. Pursued MBA from IIM Ahmedabad." colorType="light" />
                                </div>

                                <a href="https://www.linkedin.com/in/ramakrishnabhimana/" target="_blank" ><div className="my-2 d-flex align-items-center">
                                    <div className="linkedIcon">
                                        <LiaLinkedinIn />
                                    </div>
                                    <CommanText tag="p" fontSize={14} text="/ramakrishnabhimana" colorType="dark" />
                                </div>
                                </a>

                            </div>
                        </Col>

                        <Col xs={3} className="MentorsCardMain">
                            <div className="MentorsCardMainImg">
                                <img src={krishnaPranav} width="100%" height="100%" />
                            </div>
                            <div className="MentorsCardMainBottom">
                                <div className="MentorsCardMainBottomTopCard px-3">
                                    <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Krishna Pranav" colorType="light" />

                                    <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="VARC mentor. He scored  99.87%ile in CAT VARC section. Pursued MBA from IIM Ahmedabad" colorType="light" />
                                </div>
                                <div className="my-2 d-flex align-items-center">
                                    <div className="linkedIcon">
                                        <LiaLinkedinIn />
                                    </div>
                                    <CommanText tag="p" fontSize={14} text="/PranavCSK" colorType="dark" />
                                </div>

                            </div>
                        </Col>

                        <Col xs={3} className="MentorsCardMain">
                            <div className="MentorsCardMainImg">
                                <img src={vinod} width="100%" height="100%" />
                            </div>
                            <div className="MentorsCardMainBottom">
                                <div className="MentorsCardMainBottomTopCard px-3">
                                    <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Vinod Mummidisetti" colorType="light" />

                                    <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="QA mentor. He scored 99.92%ile in QA with overall 99.82%ile in CAT. Pursued MBA from IIM Ahmedabad." colorType="light" />
                                </div>
                                <a href="https://www.linkedin.com/in/vinodmummidisetti/" target="_blank"><div className="my-2 d-flex align-items-center">
                                    <div className="linkedIcon">
                                        <LiaLinkedinIn />
                                    </div>
                                    <CommanText tag="p" fontSize={14} text="/VinodMummidisetti" colorType="dark" />
                                </div>
                                </a>
                            </div>
                        </Col>

                        <Col xs={3} className="MentorsCardMain">
                            <div className="MentorsCardMainImg">
                                <img src={mentor3} width="100%" height="100%" />
                            </div>
                            <div className="MentorsCardMainBottom">
                                <div className="MentorsCardMainBottomTopCard px-3">
                                    <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Kalyan Konidala" colorType="light" />

                                    <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="QA mentor. He scored 99.79%ile in QA with overall 99.69%ile in CAT. Pursued MBA from IIM Ahmedabad." colorType="light" />
                                </div>
                                <a href="https://www.linkedin.com/in/kalyan-konidala-58b467140/" target="_blank"><div className="my-2 d-flex align-items-center">
                                    <div className="linkedIcon">
                                        <LiaLinkedinIn />
                                    </div>
                                    <CommanText tag="p" fontSize={14} text="/KalyanKonidala" colorType="dark" />
                                </div>
                                </a>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>

            <div className="w-100 whyUsSection flexCenter py-5">
                <div className="homeContainer ">
                    <Row >
                        <Col xs={12} md={6}>

                            <div className="flexCenter" >
                                <CommanText tag="p" fontSize={32} fontWeight={500} text="Why" colorType="dark" />
                                <CommanText className="mx-2" tag="p" fontSize={32} fontWeight={500} text="Us ?" colorType="primary" />
                            </div>
                            <div className="aboutUsImgSection" >
                                <img src={AboutUsImg} width="100%" height="100%" />
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="whyUsLeftSection">

                                <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="Learn from the best" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Mentors who nailed CAT themselves. Each of us developed a taste for specific sections, and will be sharing our refined strategies with you. Moreover, we cracked almost all the top B-School interviews." colorType="dark" />
                                </div>

                                {/* <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="Live online classes" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Live Teaching Where Can Students Can Learn In An Engaging Manner" colorType="dark" />
                                </div> */}

                                <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="1:1 mentorship" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Mentors who have coached several students to the top B-Schools in the country (IIM - A,B,C etc.). We are passionate about mentorship and will hand-hold you through different phases of preparation." colorType="dark" />
                                </div>

                                <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="Career building" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Discuss what your goals are and we will help you reach them. Dreamers club opens gates for the vast alumni network of IIM A, B and C. People from all walks of life can guide you to reach your goal." colorType="dark" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="homeContainer testimonialMainOuter">
                <div className="my-5 pt-4">
                    <div className="flexCenter">
                        <CommanText tag="h4" align="center" text="What Our People" fontSize={32} fontWeight={500} colorType="dark" />
                        <CommanText tag="h4" className="mx-2" align="center" text="Say About Us" fontSize={32} fontWeight={500} colorType="primary" />
                    </div>
                </div>

                <div className="TestimonialContainerInner">

                    <Carousel nextIcon={<BsArrowRight />} prevIcon={<BsArrowLeft />} indicators={false} interval={2000}>

                        {testimonial?.map((val: any, ind: any) => (
                            <Carousel.Item>
                                <CommanText tag="p" align="center" text={val?.description} fontSize={16} fontWeight={300} colorType="dark" />

                                <div className="mt-5">
                                    <div className="testimonialImage p-2">
                                        <img src={val?.image} />
                                    </div>
                                    <CommanText tag="h4" align="center" text={val?.name} fontSize={20} fontWeight={500} colorType="dark" />
                                    <CommanText tag="h4" align="center" text={val?.achievement} fontSize={16} fontWeight={400} colorType="textGrey" />
                                </div>
                            </Carousel.Item>
                        ))}


                    </Carousel>


                </div>
            </div>


            <div className="homeContainer faqContainer">

                <div className="flexStart my-5">
                    <CommanText className="mx-0 faqHeading" tag="p" fontSize={32} fontWeight={500} text="FAQ's" colorType="primary" />
                    <div className="faqBorder"></div>
                </div>

                <div className="my-3">

                    {/* <Accordion defaultActiveKey={DefaultActiveAccordion}>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header onClick={() => handleAccordianEvent("0")}>Do I have to physically attend classes in a classroom?</Accordion.Header>
                            <Accordion.Body>
                                No, you don’t. The classes will be conducted in an online manner and students can attend them from wherever there are.
        </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" >
                            <Accordion.Header onClick={() => handleAccordianEvent("1")}>Are the classes going to be pre-recorded content or live?</Accordion.Header>
                            <Accordion.Body>
                                The classes will be taught in a live manner in order to make them engaging for the students.
        </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" >
                            <Accordion.Header onClick={() => handleAccordianEvent("2")}>Are there going to be mock exams?</Accordion.Header>
                            <Accordion.Body>
                                Yes, there are going to be mock exams and personalized mock analysis.
        </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" >
                            <Accordion.Header onClick={() => handleAccordianEvent("3")}>Can I reach out to mentors for support?</Accordion.Header>
                            <Accordion.Body>
                                Yes. You can schedule a meeting with mentors and get your queries answered 1-on-1
        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >

                            <CommanText tag="h2" text="Do I have to physically attend classes in a classroom?" fontSize={20} fontWeight={400} colorType="dark" />
                        </AccordionSummary>
                        <AccordionDetails>

                            <CommanText tag="h2" text="No, you don’t. The classes will be conducted in an online manner and students can attend them from wherever there are." fontSize={20} fontWeight={400} colorType="textGrey" />
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="my-3">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <CommanText tag="h2" text="Are the classes going to be pre-recorded content or live?" fontSize={20} fontWeight={400} colorType="dark" />

                        </AccordionSummary>
                        <AccordionDetails>
                            <CommanText tag="h2" text="The classes will be taught in a live manner in order to make them engaging for the students." fontSize={20} fontWeight={400} colorType="textGrey" />

                        </AccordionDetails>
                    </Accordion>
                </div>


                <div className="my-3">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <CommanText tag="h2" text="Are there going to be mock exams?" fontSize={20} fontWeight={400} colorType="dark" />

                        </AccordionSummary>
                        <AccordionDetails>
                            <CommanText tag="h2" text="Yes, there are going to be mock exams and personalized mock analysis." fontSize={20} fontWeight={400} colorType="textGrey" />

                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className="my-3">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <CommanText tag="h2" text="Can I reach out to mentors for support?" fontSize={20} fontWeight={400} colorType="dark" />

                        </AccordionSummary>
                        <AccordionDetails>
                            <CommanText tag="h2" text="Yes. You can schedule a meeting with mentors and get your queries answered 1-on-1" fontSize={20} fontWeight={400} colorType="textGrey" />

                        </AccordionDetails>
                    </Accordion>
                </div>
            </div >

            <div className="HomeFooter">

                <div className="footerTopCard flexBetween py-4">
                    <div>
                        <CommanText tag="p" className="text32_24" text="Ready to get started?" colorType="primary" fontWeight={500} />
                        <CommanText tag="p" className="text32_24" text="Free Counselling Today" colorType="dark" fontWeight={400} />
                    </div>

                    <div className="requestButtonDiv">
                        <CustomButton onClick={() => { setCounsellingDialogStatus(true); setCounclingFormType('request') }} name="Request a Callback" fontSize={16} width={225} fontWeight={600} height={58} />
                    </div>
                </div>

                <div className="homeContainer footerHomeContainer">
                    <Row>
                        <Col xs={12} md={6} >
                            <CommanText tag="p" className="mb-3" text="Contact Us" colorType="primary" fontSize={16} fontWeight={500} />

                            <div className="flexStart my-2" >
                                <CommanText tag="p" text="Email:" colorType="light" fontSize={16} fontWeight={500} />
                                <CommanText className="mx-1" tag="p" text="help@dreamersclub.co.in" colorType="light" fontSize={16} fontWeight={300} />
                            </div>

                            <div className="flexStart my-2">
                                <CommanText tag="p" text="Phone:" colorType="light" fontSize={16} fontWeight={500} />
                                <CommanText className="mx-1" tag="p" text="+91-7780325696" colorType="light" fontSize={16} fontWeight={300} />
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="subscribeDiv" >
                            <CommanText tag="p" text="Keep Learning, Keep Growing" colorType="light" fontSize={16} fontWeight={400} />
                            <CommanText tag="p" text="Get the latest course and updates" colorType="light" fontSize={14} fontWeight={300} />

                            <div className="flexStart my-3 subsCribe">
                                <input type="email" placeholder="Enter your email address" />

                                <button className="mx-3">
                                    Subscribe
                                </button>
                            </div>
                            <div className="d-flex align-items-center justify-content-end socialLoginConatiner">

                                <div className="socialLoginDiv mx-2">
                                    <FaFacebookF />
                                </div>

                                <div className="socialLoginDiv mx-2">
                                    <FaTwitter />
                                </div>

                                <div className="socialLoginDiv mx-2">
                                    <FaLinkedinIn />
                                </div>

                                <div className="socialLoginDiv mx-2">
                                    <FaInstagram />
                                </div>

                            </div>
                        </Col>
                    </Row>

                    <div className="HomeFooterBottom w-100 mt-4">
                        <CommanText className="mt-3" align="center" tag="p" text="© 2023 Dreamers Club. All rights reserved." colorType="light" fontSize={14} fontWeight={400} />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
