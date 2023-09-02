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

    const LocalUserID = localStorage.getItem('user_Id');


    useEffect(() => {
        if (LocalUserID != 'undefined' && LocalUserID != undefined) {
            let userData: any = localStorage.getItem('user');
            let userJsonData = JSON.parse(userData);
            setUserId(userJsonData?.id)
        }
    }, [localStorage.getItem('user')])

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
        (CounclingMutate) => saveCouncling(CounclingMutate),
        {
            onSuccess: (data: any, localData: any) => {
                if (data?.status) {
                    closeDialogFn(false)
                }
                if (data?.message) {
                    showMessage({
                        msgTyp: "success",
                        message: "Thanks for expressing your intrest. Our team will get in touch with you shortly!",
                    });
                }
            },
        }
    );

    const { mutate: enrolmentMutate, isLoading: enrolmentLoader } = useMutation(
        (CounclingMutate) => saveEnrolment(CounclingMutate),
        {
            onSuccess: (data: any, localData: any) => {
                if (data?.status) {
                    closeDialogFn(false)
                }
                if (data?.message) {
                    showMessage({
                        msgTyp: "success",
                        message: "Thanks for expressing your intrest. Our team will get in touch with you shortly!",
                    });
                }
            },
        }
    );

    return (<>
        {(dialogOpen) && <div className="dialogBackdrop">
            <div className="dialogCard" style={{
                width: counclingType === 'request' ? '40%' : '62%',
                marginLeft: counclingType === 'request' ? '30%' : '19%',
            }}>
                <Row>
                    {counclingType !== 'request' && <Col xs={4} className="authDialogLeft px-4 py-5 flexCenter">

                        <div>
                            <CommanText className="mx-0 mb-3" tag="p" align="center" fontSize={16} fontWeight={500} text="Don’t Miss the Chance" colorType="light" />

                            <p className="discountTotalPrice">₹19,999 /-</p>
                            <p className="discountPrice">₹14,999 /- (25% off)</p>

                            <CommanText className="mx-0 mb-3" tag="p" align="center" fontSize={16} fontWeight={500} text="*Limited time offer till 15 September" colorType="light" />


                        </div>

                    </Col>}

                    <Col xs={counclingType === 'request' ? 12 : 12} md={counclingType === 'request' ? 12 : 8} className="m-auto">
                        <div className="flexEnd px-3 py-2">
                            <CommanText className="pointer" tag="p" text="Close" onClick={() => closeDialogFn(false)} fontSize={14} fontWeight={400} />
                        </div>

                        <div className="w-100 px-5">
                            {counclingType === 'request' ? <div className="flexStart my-3">
                                <CommanText tag="p" align="left" text="Talk to" fontSize={24} fontWeight={500} colorType="dark" />
                                <CommanText tag="p" align="left" className="mx-1" text="us" fontSize={24} fontWeight={500} colorType="primary" />
                            </div> : <div className="flexStart my-3">
                                <CommanText tag="p" align="left" text="Enroll" fontSize={24} fontWeight={500} colorType="dark" />
                                <CommanText tag="p" align="left" className="mx-1" text="Now" fontSize={24} fontWeight={500} colorType="primary" />
                            </div>}

                            {counclingType !== 'request' && <div className="isMobileView ">
                                <div className="isMobileViewOffer my-5">
                                    <CommanText className="mx-0 mb-1" tag="p" align="center" fontSize={16} fontWeight={500} text="Don’t Miss the chance to be a part Dreamers Club" colorType="primary" />

                                    <p className="discountTotalPrice">₹19,999 /-</p>
                                    <p className="discountPrice mb-1">₹14,999 /- (25% off)</p>

                                    <CommanText className="mx-0 mb-3" tag="p" align="center" fontSize={16} fontWeight={500} text="*Limited time offer till 15 September" colorType="primary" />
                                </div>
                            </div>}

                            <TextField id="name" className="w-100 my-2" name="name" label="Name" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="phoneNumber" className="w-100 my-2" name="phoneNumber" label="Mobile No" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="email" className="w-100 my-2" name="email" label="Email id" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="collage" className="w-100 my-2" name="collage" label="College" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />
                            <TextField id="additionalInfo" className="w-100 my-2" name="additionalInformation" label="Additional Information" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } />

                            <CustomButton name={counclingType !== 'request' ? "Submit" : "Request a Callback"} isLoading={enrolmentLoader || registerLoader} className="w-100 my-4" onClick={saveData} height={56} background_color="primary" />

                        </div>

                    </Col>
                </Row>
            </div>
        </div>}
    </>)
}

export default CounsellingDialog
