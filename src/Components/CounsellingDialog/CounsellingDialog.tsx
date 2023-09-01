import React, { useState, useEffect } from 'react'
import CommanText from '../CommanText/CommanText'
import { Row, Col } from 'react-bootstrap'
import { TextField } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'
import { saveCouncling, saveEnrolment } from '../AuthDialog/AllApis'
import { useMutation } from 'react-query'
import { showMessage } from 'src/Utils/MessageModal'

interface DialogProps {
    dialogOpen?: boolean;
    closeDialogFn?: any;
    counclingType?: string;
}

function CounsellingDialog({ dialogOpen = false, closeDialogFn, counclingType }: DialogProps) {
    const [UserId, setUserId] = useState('')

    useEffect(() => {
        let userData: any = localStorage.getItem('user');
        let userJsonData = JSON.parse(userData);
        setUserId(userJsonData?.id)
    }, [])

    const [Councling, setCouncling] = useState<any>({
        name: "",
        phoneNumber: "",
        email: "",
        additionalInformation: "",
        collage: "",
    });

    const handleInputChange = (e: any) => {

        let temp_CounclingData = { ...Councling };

        const { value, name } = e.target;

        temp_CounclingData = {
            ...Councling,
            [name]: value,
        };

        setCouncling(temp_CounclingData);
    }

    const saveData = () => {
        let counclingForm = new FormData();
        counclingForm.append("name", Councling.name);
        counclingForm.append("email", Councling.email);
        counclingForm.append("mobile", Councling.phoneNumber);
        counclingForm.append("message", Councling.additionalInformation);
        counclingForm.append("college", Councling.collage);

        if (counclingType === 'request') {
            CounclingMutate(counclingForm)
        } else {
            enrolmentMutate(counclingForm)
        }
    }

    const { mutate: CounclingMutate, isLoading: registerLoader } = useMutation(
        (CounclingMutate) => saveCouncling(CounclingMutate, UserId),
        {
            onSuccess: (data: any, localData: any) => {

                closeDialogFn(false)
                if (data?.message) {
                    showMessage({
                        msgTyp: "success",
                        message: "Request sent successfully",
                    });
                }
            },
        }
    );

    const { mutate: enrolmentMutate, isLoading: enrolmentLoader } = useMutation(
        (CounclingMutate) => saveEnrolment(CounclingMutate, UserId),
        {
            onSuccess: (data: any, localData: any) => {
                closeDialogFn(false)
                if (data?.message) {
                    showMessage({
                        msgTyp: "success",
                        message: "User enroll successfully",
                    });
                }
            },
        }
    );

    return (<>
        {(dialogOpen) && <div className="dialogBackdrop">
            <div className="dialogCard">
                <Row>
                    {counclingType !== 'request' && <Col xs={4} className="authDialogLeft px-4 py-5 flexCenter">

                        <div>
                            <CommanText className="mx-0 mb-3" tag="p" align="center" fontSize={16} fontWeight={500} text="Don’t Miss the Chance" colorType="light" />
                            <CommanText className="mx-0 mb-3" tag="p" align="center" fontSize={16} fontWeight={500} text="*Limited time offer" colorType="light" />

                        </div>

                    </Col>}

                    <Col xs={8} className="m-auto">
                        <div className="flexEnd px-3 py-2">
                            <CommanText className="pointer" tag="p" text="Close" onClick={() => closeDialogFn(false)} fontSize={14} fontWeight={400} />
                        </div>

                        <div className="w-100 px-5">
                            <div className="flexStart my-3">
                                <CommanText tag="p" align="left" text="Free" fontSize={24} fontWeight={500} colorType="dark" />
                                <CommanText tag="p" align="left" className="mx-1" text="Counselling" fontSize={24} fontWeight={500} colorType="primary" />
                            </div>

                            <TextField id="outlined-basic" className="w-100 my-2" name="name" label="Name" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="password-basic" className="w-100 my-2" name="phoneNumber" label="Mobile No" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="password-basic" className="w-100 my-2" name="email" label="Email id" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="password-basic" className="w-100 my-2" name="additionalInformation" label="Additional Information" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="password-basic" className="w-100 my-2" name="collage" label="Collage" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />


                            <CustomButton name="Request a Callback" isLoading={enrolmentLoader || registerLoader} className="w-100 my-4" onClick={saveData} height={56} background_color="primary" />

                        </div>

                    </Col>
                </Row>
            </div>
        </div>}
    </>)
}

export default CounsellingDialog
