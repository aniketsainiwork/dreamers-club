import React, { useState } from 'react'
import './Home.css';
import { Col, Row, Container } from "react-bootstrap";
import CommanText from '../../Components/CommanText/CommanText';
import CustomButton from 'src/Components/CustomButton/CustomButton';
import TickImg from 'src/assets/verifyTick.png';
import OfferingImg from 'src/assets/offering.jpg';
import AboutUsImg from 'src/assets/aboutUsLogo.png';
import tickIcon from 'src/assets/tick.png';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AuthDialog from 'src/Components/AuthDialog/AuthDialog';
import CounsellingDialog from 'src/Components/CounsellingDialog/CounsellingDialog';

function Home() {

    const [AuthDialogStatus, setAuthDialogStatus] = useState(false)

    const closeDialog = (data: any) => {
        setAuthDialogStatus(data)
    }

    const [CounsellingDialogStatus, setCounsellingDialogStatus] = useState(false)

    const closeCounDialog = (data: any) => {
        setCounsellingDialogStatus(data)
    }

    return (
        <>
            {AuthDialogStatus && <AuthDialog closeDialogFn={(e: any) => closeDialog(e)} dialogOpen={AuthDialogStatus} />}

            {CounsellingDialogStatus && <CounsellingDialog closeDialogFn={(e: any) => closeCounDialog(e)} dialogOpen={CounsellingDialogStatus} />}

            <div className="w-100">
                <Row className="mx-0 homeHeader flexBetween px-4">
                    <Col className="flexStart">
                        <div className="mx-4 px-3">
                            <div className="flexStart">
                                <CommanText tag="h2" text="Dreamers" fontSize={29} fontWeight={600} colorType="primary" />
                                <CommanText tag="h2" text=" Club" className="mx-2" fontSize={29} fontWeight={600} colorType="dark" />
                            </div>
                            <CommanText tag="p" text="TRANSFORMING MBA DREAMS INTO REALITY" align="left" fontSize={8} fontWeight={400} colorType="blueGray" />
                        </div>
                    </Col>
                    <Col className="flexEnd">
                        <div className="flexStart">
                            <CommanText tag="h2" text="Email:" className="mx-2" fontSize={16} fontWeight={500} colorType="dark" />

                            <CommanText tag="h2" text="help@dreamersclub.co.in" className="mx-1" fontSize={16} fontWeight={400} colorType="dark" />
                        </div>

                        <div className="flexStart">
                            <CommanText tag="h2" text="Mob:" className="mx-2" fontSize={16} fontWeight={500} colorType="dark" />

                            <CommanText tag="h2" text="+91-7780325696" className="mx-1" fontSize={16} fontWeight={400} colorType="dark" />
                        </div>

                        <CustomButton className="mx-4" name="Log in/Sign Up" onClick={() => setAuthDialogStatus(true)} fontSize={16} fontWeight={500} height={26} />
                    </Col>
                </Row>
            </div>

            <div className="homeContainer">
                <Row className="mx-0 flexBetween homeTopBanner">
                    <Col xs={7} className="flexStart">
                        <div>

                            <CommanText tag="h1" text="Transforming" fontSize={64} fontWeight={600} />
                            <CommanText tag="h1" text="Dreams Into Reality" fontSize={64} fontWeight={600} />

                            <div className="flexStart my-4">
                                <div className="flexStart">
                                    <div>
                                        <img src={TickImg} height="100%" width="100%" />
                                    </div>
                                    <CommanText tag="h4" className="mx-1" text="1:1 Mentorship" fontSize={22} fontWeight={400} colorType="dark" />
                                </div>
                                <div className="flexStart mx-4">
                                    <div>
                                        <img src={TickImg} height="100%" width="100%" />
                                    </div>
                                    <CommanText tag="h4" className="mx-1" text="Guidance From Cat Toppers" fontSize={22} fontWeight={400} colorType="dark" />
                                </div>
                            </div>

                            <div className="flexStart my-5">
                                <CustomButton name="Request a Callback" onClick={() => setCounsellingDialogStatus(true)} fontSize={16} width={225} fontWeight={600} height={58} />

                                <div className="mx-3">
                                    <CustomButton name="Enroll Now" onClick={() => setCounsellingDialogStatus(true)} fontSize={16} width={164} fontWeight={600} height={58} borderColor="primary" textColor="primary" background_color="transparent" buttonOutline={true} />
                                </div>

                            </div>

                        </div>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
            </div>

            <div className="textBannerBg w-100 flexCenter px-5">
                <CommanText tag="h4" className="px-5 mx-5" align="center" text="Cracking CAT is 90% about getting the right guidance and the rest is about getting the basics right. We aim to make top-notch CAT coaching affordable and accessible to everyone." fontSize={24} fontWeight={400} colorType="light" />
            </div>

            <div className="homeContainer">
                <div className="my-5 pt-4">
                    <div className="flexCenter">
                        <CommanText tag="h4" align="center" text="Our" fontSize={32} fontWeight={500} colorType="dark" />
                        <CommanText tag="h4" className="mx-2" align="center" text="Offerings" fontSize={32} fontWeight={500} colorType="primary" />
                    </div>

                    <CommanText tag="h4" className="my-3" align="center" text="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod" fontSize={16} fontWeight={400} colorType="dark" />

                </div>

                <Row className="mx-0 flexBetween">
                    <Col>
                        <div className="offeringCard">
                            <div className="offeringImg">
                                <img src={OfferingImg} width="100%" height="100%" />
                            </div>

                            <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Online CAT Classes" fontSize={14} fontWeight={600} colorType="primary" />
                            <CommanText tag="h4" align="left" text="Attend classes without the hassle of traveling" fontSize={12} fontWeight={500} colorType="textGrey" />

                        </div>
                    </Col>

                    <Col>
                        <div className="offeringCard">
                            <div className="offeringImg">
                                <img src={OfferingImg} width="100%" height="100%" />
                            </div>

                            <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Mock Analysis" fontSize={14} fontWeight={600} colorType="primary" />
                            <CommanText tag="h4" align="left" text="Mocks are a key aspect of CAT preparation strategy. We help you analyze mocks and improve your performance." fontSize={12} fontWeight={500} colorType="textGrey" />

                        </div>
                    </Col>

                    <Col>
                        <div className="offeringCard">
                            <div className="offeringImg">
                                <img src={OfferingImg} width="100%" height="100%" />
                            </div>

                            <CommanText tag="h4" className="mt-3 mb-2" align="left" text="Gamified Learning" fontSize={14} fontWeight={600} colorType="primary" />
                            <CommanText tag="h4" align="left" text="CAT prep should be fun. We bring interesting weekly challenges to gamify your preparation." fontSize={12} fontWeight={500} colorType="textGrey" />

                        </div>
                    </Col>

                    <Col>
                        <div className="offeringCard">
                            <div className="offeringImg">
                                <img src={OfferingImg} width="100%" height="100%" />
                            </div>

                            <CommanText tag="h4" className="mt-3 mb-2" align="left" text="WAT/PI Guidance" fontSize={14} fontWeight={600} colorType="primary" />
                            <CommanText tag="h4" align="left" text="Guidance on how to present your best version and convey your ideas in a coherent manner." fontSize={12} fontWeight={500} colorType="textGrey" />

                        </div>
                    </Col>
                </Row>
            </div>





            <div className="homeContainer">
                <div className="my-5 pt-4">
                    <div className="flexCenter">
                        <CommanText tag="h4" align="center" text="About" fontSize={32} fontWeight={500} colorType="dark" />
                        <CommanText tag="h4" className="mx-2" align="center" text="Mentors" fontSize={32} fontWeight={500} colorType="primary" />
                    </div>

                    <CommanText tag="h4" className="my-3" align="center" text="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod" fontSize={16} fontWeight={400} colorType="dark" />

                </div>

                <Row className="mx-0 flexBetween">
                    <Col xs={3} className="MentorsCardMain">
                        <div className="MentorsCardMainImg">
                            <img src={OfferingImg} width="100%" height="100%" />
                        </div>
                        <div className="MentorsCardMainBottom">
                            <div className="MentorsCardMainBottomTopCard px-3">
                                <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Ramakrishna Bhimana" colorType="light" />

                                <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="DILR mentor. Scored 99.94% ile in CAT with 100%ile in DILR. Pursued MBA from IIM Ahmedabad." colorType="light" />
                            </div>
                            <CommanText tag="p" className="my-2" fontSize={14} text="/ramakrishnabhimana" colorType="dark" />
                        </div>
                    </Col>

                    <Col xs={3} className="MentorsCardMain">
                        <div className="MentorsCardMainImg">
                            <img src={OfferingImg} width="100%" height="100%" />
                        </div>
                        <div className="MentorsCardMainBottom">
                            <div className="MentorsCardMainBottomTopCard px-3">
                                <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Ramakrishna Bhimana" colorType="light" />

                                <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="DILR mentor. Scored 99.94% ile in CAT with 100%ile in DILR. Pursued MBA from IIM Ahmedabad." colorType="light" />
                            </div>
                            <CommanText tag="p" className="my-2" fontSize={14} text="/ramakrishnabhimana" colorType="dark" />
                        </div>
                    </Col>

                    <Col xs={3} className="MentorsCardMain">
                        <div className="MentorsCardMainImg">
                            <img src={OfferingImg} width="100%" height="100%" />
                        </div>
                        <div className="MentorsCardMainBottom">
                            <div className="MentorsCardMainBottomTopCard px-3">
                                <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Ramakrishna Bhimana" colorType="light" />

                                <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="DILR mentor. Scored 99.94% ile in CAT with 100%ile in DILR. Pursued MBA from IIM Ahmedabad." colorType="light" />
                            </div>
                            <CommanText tag="p" className="my-2" fontSize={14} text="/ramakrishnabhimana" colorType="dark" />
                        </div>
                    </Col>

                    <Col xs={3} className="MentorsCardMain">
                        <div className="MentorsCardMainImg">
                            <img src={OfferingImg} width="100%" height="100%" />
                        </div>
                        <div className="MentorsCardMainBottom">
                            <div className="MentorsCardMainBottomTopCard px-3">
                                <CommanText tag="p" align="center" className="my-2" fontSize={16} fontWeight={500} text="Ramakrishna Bhimana" colorType="light" />

                                <CommanText tag="p" align="center" className="my-2" fontSize={12} fontWeight={400} text="DILR mentor. Scored 99.94% ile in CAT with 100%ile in DILR. Pursued MBA from IIM Ahmedabad." colorType="light" />
                            </div>
                            <CommanText tag="p" className="my-2" fontSize={14} text="/ramakrishnabhimana" colorType="dark" />
                        </div>
                    </Col>

                </Row>
            </div>

            <div className="w-100 whyUsSection flexCenter py-5">
                <div className="homeContainer ">
                    <Row >
                        <Col>

                            <div className="flexCenter" >
                                <CommanText tag="p" fontSize={32} fontWeight={500} text="Why" colorType="dark" />
                                <CommanText className="mx-2" tag="p" fontSize={32} fontWeight={500} text="Us" colorType="primary" />
                            </div>
                            <div className="aboutUsImgSection" >
                                <img src={AboutUsImg} width="100%" height="100%" />
                            </div>
                        </Col>

                        <Col>
                            <div className="whyUsLeftSection">

                                <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="Learn from the best" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Mentors Who Have Coached Several Students To The Top B-Schools In The Country (Iim-A,B,C Etc.)." colorType="dark" />
                                </div>

                                <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="Live online classes" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Live Teaching Where Can Students Can Learn In An Engaging Manner" colorType="dark" />
                                </div>

                                <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="1:1 mentorship" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Mentors That Support You Through Your Preparation" colorType="dark" />
                                </div>

                                <div className="my-5">
                                    <div className="flexStart my-1">
                                        <div className="tickIcon">
                                            <img src={tickIcon} width="100%" height="100%" />
                                        </div>

                                        <CommanText className="mx-2" tag="p" fontSize={24} fontWeight={600} text="Career building" colorType="dark" />
                                    </div>
                                    <CommanText tag="p" fontSize={16} fontWeight={400} text="Discuss what your goals are and how best to approach them" colorType="dark" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="homeContainer">
                <div className="my-5 pt-4">
                    <div className="flexCenter">
                        <CommanText tag="h4" align="center" text="What Our People" fontSize={32} fontWeight={500} colorType="dark" />
                        <CommanText tag="h4" className="mx-2" align="center" text="Say About Us" fontSize={32} fontWeight={500} colorType="primary" />
                    </div>
                </div>

                <div className="TestimonialContainerInner">
                    <CommanText tag="p" align="center" text="Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren," fontSize={16} fontWeight={300} colorType="textGrey" />

                    <div className="mt-5">
                        <div className="testimonialImage p-2">
                            <img src={OfferingImg} />
                        </div>
                        <CommanText tag="h4" align="center" text="Navya" fontSize={20} fontWeight={500} colorType="dark" />
                        <CommanText tag="h4" align="center" text="MBA, IIM Guwahati" fontSize={16} fontWeight={400} colorType="textGrey" />
                    </div>

                </div>
            </div>


            <div className="homeContainer faqContainer">

                <div className="flexStart my-5">
                    <CommanText className="mx-0 faqHeading" tag="p" fontSize={32} fontWeight={500} text="FAQ's" colorType="primary" />
                    <div className="faqBorder"></div>
                </div>

                <div className="my-3">
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
                            aria-controls="panel3a-content"
                            id="panel3a-header"
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
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <CommanText tag="h2" text="Do I have to physically attend classes in a classroom?" fontSize={20} fontWeight={400} colorType="dark" />

                        </AccordionSummary>
                        <AccordionDetails>
                            <CommanText tag="h2" text="No, you don’t. The classes will be conducted in an online manner and students can attend them from wherever there are." fontSize={20} fontWeight={400} colorType="textGrey" />

                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

            <div className="HomeFooter">

                <div className="footerTopCard flexBetween">
                    <div>
                        <CommanText tag="p" text="Ready to get started?" colorType="primary" fontSize={32} fontWeight={500} />
                        <CommanText tag="p" text="Talk to us Today" colorType="dark" fontSize={32} fontWeight={400} />
                    </div>

                    <CustomButton onClick={() => setCounsellingDialogStatus(true)} name="Request a Callback" fontSize={16} width={225} fontWeight={600} height={58} />

                </div>

                <div className="homeContainer footerHomeContainer">
                    <div className="w-100 flexBetween">
                        <Col>
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
                        <Col>
                            <CommanText tag="p" text="Keep Learning, Keep Growing" colorType="light" fontSize={16} fontWeight={400} />
                            <CommanText tag="p" text="Get the latest course and updates" colorType="light" fontSize={14} fontWeight={300} />

                            <div className="flexStart my-3 subsCribe">
                                <input type="email" placeholder="Enter your email address" />

                                <button className="mx-3">
                                    Subscribe
                                </button>
                            </div>
                        </Col>
                    </div>

                    <div className="HomeFooterBottom w-100 mt-4">
                        <CommanText className="mt-3" align="center" tag="p" text="© 2023 Dreamers Club. All rights reserved." colorType="light" fontSize={14} fontWeight={400} />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
