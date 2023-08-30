import React from 'react'
import { Row, Col, Tabs, Tab } from 'react-bootstrap'
import CommanText from '../CommanText/CommanText'
import { BsCheckCircleFill } from "react-icons/bs";
import { TextField } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';

interface DialogProps {
    dialogOpen?: boolean;
    closeDialogFn?: any;
}

function AuthDialog({ dialogOpen = false, closeDialogFn }: DialogProps) {
    return (<>
        {(dialogOpen) && <div className="dialogBackdrop">
            <div className="dialogCard">
                <Row>
                    <Col xs={4} className="authDialogLeft px-4 py-5">

                        <CommanText className="mx-0 mb-3" tag="p" fontSize={32} fontWeight={600} text="Why Us" colorType="light" />

                        <div className="my-1">
                            <div className="flexStart my-1">
                                <div className="authTickIcon">
                                    <BsCheckCircleFill />
                                </div>

                                <CommanText className="mx-2 mt-2" tag="p" fontSize={16} fontWeight={600} text="Learn from the best" colorType="light" />
                            </div>
                            <CommanText tag="p" fontSize={12} fontWeight={400} text="Mentors Who Have Coached Several Students To The Top B-Schools In The Country (Iim-A,B,C Etc.)." colorType="light" />
                        </div>

                        <div className="my-1">
                            <div className="flexStart my-1">
                                <div className="authTickIcon">
                                    <BsCheckCircleFill />
                                </div>

                                <CommanText className="mx-2 mt-2" tag="p" fontSize={16} fontWeight={600} text="Live online classes" colorType="light" />
                            </div>
                            <CommanText tag="p" fontSize={12} fontWeight={400} text="Live Teaching Where Can Students Can Learn In An Engaging Manner" colorType="light" />
                        </div>

                        <div className="my-1">
                            <div className="flexStart my-1">
                                <div className="authTickIcon">
                                    <BsCheckCircleFill />
                                </div>

                                <CommanText className="mx-2 mt-2" tag="p" fontSize={16} fontWeight={600} text="1:1 mentorship" colorType="light" />
                            </div>
                            <CommanText tag="p" fontSize={12} fontWeight={400} text="Mentors That Support You Through Your Preparation" colorType="light" />
                        </div>

                        <div className="my-1">
                            <div className="flexStart my-1">
                                <div className="authTickIcon">
                                    <BsCheckCircleFill />
                                </div>

                                <CommanText className="mx-2 mt-2" tag="p" fontSize={16} fontWeight={600} text="Career building" colorType="light" />
                            </div>
                            <CommanText tag="p" fontSize={12} fontWeight={400} text="Discuss what your goals are and how best to approach them" colorType="light" />
                        </div>

                    </Col>

                    <Col xs={8}>
                        <div className="flexEnd px-3 py-2">
                            <CommanText className="pointer" tag="p" text="Close" onClick={() => closeDialogFn(false)} fontSize={14} fontWeight={400} />
                        </div>


                        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">

                            <Tab eventKey={1} title="Login">

                                <div className="w-100 px-5">
                                    <CommanText className="my-3" tag="p" align="center" text="Login to your DremersClub Account" fontSize={16} fontWeight={400} colorType="textGrey" />


                                    <TextField id="outlined-basic" className="w-100 my-2" label="Email id" variant="outlined" />
                                    <TextField id="password-basic" className="w-100 my-2" label="Password" variant="outlined" />

                                    <CustomButton name="Login" className="w-100 my-3" height={56} background_color="primary" />

                                    <CommanText className="my-y pointer" tag="p" align="center" text="Forgot Password?" fontSize={16} fontWeight={400} colorType="primary" />
                                </div>
                            </Tab>

                            <Tab eventKey={2} title="Sign Up">
                                <div className="w-100 px-5">
                                    <CommanText className="my-3" tag="p" align="center" text="Create a Free DremersClub Account" fontSize={16} fontWeight={400} colorType="textGrey" />


                                    <TextField id="outlined-basic" className="w-100 my-2" label="Name" variant="outlined" />
                                    <TextField id="password-basic" className="w-100 my-2" label="Email id" variant="outlined" />

                                    <Row>
                                        <Col><TextField id="outlined-basic1" className="w-100 my-2" label="Create Password" variant="outlined" /></Col>
                                        <Col><TextField id="password-basic2" className="w-100 my-2" label="Confirm Password" variant="outlined" /></Col>
                                    </Row>
                                    <CustomButton name="Register" className="w-100 my-3" height={56} background_color="primary" />

                                 </div>
                            </Tab>
                        </Tabs>






                    </Col>
                </Row>
            </div>
        </div>}
    </>
    )
}

export default AuthDialog
