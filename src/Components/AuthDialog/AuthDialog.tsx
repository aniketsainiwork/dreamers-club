import React, { useState } from 'react'
import { Row, Col, Tabs, Tab } from 'react-bootstrap'
import CommanText from '../CommanText/CommanText'
import { BsCheckCircleFill } from "react-icons/bs";
import { TextField } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';
import { useMutation } from 'react-query';
import { showMessage } from 'src/Utils/MessageModal';
import { loginApi, postRegisterData } from './AllApis';
import ResetPasswordDialog from './ResetPasswordDialog';

interface DialogProps {
    dialogOpen?: boolean;
    closeDialogFn?: any;
}

function AuthDialog({ dialogOpen = false, closeDialogFn }: DialogProps) {

    const [loginData, setLoginData] = useState<any>({
        email: "",
        password: "",
    });

    const [registerData, setRegisterData] = useState<any>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: ""
    });

    const [registerDataError, setRegisterDataError] = useState<any>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: ""
    });

    const handleInputChange = (e: any) => {

        let temp_loginData = { ...loginData };

        const { value, name } = e.target;

        temp_loginData = {
            ...loginData,
            [name]: value,
        };

        setLoginData(temp_loginData);
    }

    const loginUser = () => {
        let loginFormData = new FormData();
        loginFormData.append("email", loginData.email);
        loginFormData.append("password", loginData.password);

        loginUserMutate(loginFormData);
    }

    const { mutate: loginUserMutate, isLoading: loginLoader } = useMutation(loginApi, {
        onSuccess: (data: any, localData: any) => {
            localStorage.setItem("authToken", data?.token);
            localStorage.setItem("user_Id", data?.user?.id);
            localStorage.setItem("user", JSON.stringify(data?.user));

            closeDialogFn({ status: false, isResetPassword: false })
            if (data?.message) {
                showMessage({
                    msgTyp: "success",
                    message: data?.message,
                });
            }

        }
    });

    const handleRegisterInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        let temp_registerData = { ...registerData };
        temp_registerData = {
            ...registerData,
            [name]: value,
        };

        setRegisterData(temp_registerData);
        // setRegisterDataError(checkIfError(registerData));
    };

    const registerUser = () => {
        let registerFormData = new FormData();
        registerFormData.append("name", registerData.name);
        registerFormData.append("email", registerData.email);
        registerFormData.append("mobile", registerData.phoneNumber);
        registerFormData.append("password", registerData.password);

        registerUserMutate(registerFormData);
    }

    const { mutate: registerUserMutate, isLoading: registerLoader } = useMutation(
        postRegisterData,
        {
            onSuccess: (data: any, localData: any) => {

                localStorage.setItem("authToken", data?.token);
                localStorage.setItem("user_Id", data?.user?.id);
                localStorage.setItem("user", JSON.stringify(data?.user));

                closeDialogFn({ status: false, isResetPassword: false })
                if (data?.message) {
                    showMessage({
                        msgTyp: "success",
                        message: data?.message,
                    });
                }
            },
        }
    );

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
                            <CommanText className="pointer" tag="p" text="Close" onClick={() => closeDialogFn({ status: false, isResetPassword: true })} fontSize={14} fontWeight={400} />
                        </div>


                        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">

                            <Tab eventKey={1} title="Login">

                                <div className="w-100 px-5">
                                    <CommanText className="my-3" tag="p" align="center" text="Login to your DremersClub Account" fontSize={16} fontWeight={400} colorType="textGrey" />


                                    <TextField id="outlined-basic" name="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleInputChange(e)
                                    } className="w-100 my-2" label="Email id" variant="outlined" />
                                    <TextField id="password-basic" name="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleInputChange(e)
                                    } className="w-100 my-2" label="Password" variant="outlined" />

                                    <CustomButton name="Login" isLoading={loginLoader} className="w-100 my-3" onClick={loginUser} height={56} background_color="primary" />

                                    <CommanText className="my-y pointer" tag="p" align="center" onClick={() => { closeDialogFn({ status: false, isResetPassword: true }) }} text="Forgot Password?" fontSize={16} fontWeight={400} colorType="primary" />
                                </div>
                            </Tab>

                            <Tab eventKey={2} title="Sign Up">
                                <div className="w-100 px-5">
                                    <CommanText className="my-3" tag="p" align="center" text="Create a Free DremersClub Account" fontSize={16} fontWeight={400} colorType="textGrey" />


                                    <TextField id="outlined-basic" className="w-100 my-2" label="Name" name="name" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleRegisterInputChange(e)
                                    } />
                                    <TextField id="password-basic" className="w-100 my-2" label="Email id" name="email" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleRegisterInputChange(e)
                                    } />
                                    <TextField id="password-basic" className="w-100 my-2" label="Phone No." name="phoneNumber" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleRegisterInputChange(e)
                                    } />
                                    <Row>
                                        <Col><TextField id="outlined-basic1" className="w-100 my-2" label="Create Password" name="password" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleRegisterInputChange(e)
                                        } /></Col>
                                        <Col><TextField id="password-basic2" className="w-100 my-2" label="Confirm Password" name="confirmPassword" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleRegisterInputChange(e)
                                        } /></Col>
                                    </Row>
                                    <CustomButton name="Register" className="w-100 my-3" isLoading={registerLoader} height={56} onClick={registerUser} background_color="primary" />

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
