import React, { useState } from 'react'
import CommanText from '../CommanText/CommanText'
import { Col } from 'react-bootstrap'
import { TextField } from '@mui/material'
import { useMutation } from 'react-query'
import { resetPassword, changePasswordApi } from './AllApis'
import { showMessage } from 'src/Utils/MessageModal'
import CustomButton from '../CustomButton/CustomButton'

interface DialogProps {
    dialogOpen?: boolean;
    closeDialogFn?: any;
}

function ResetPasswordDialog({ dialogOpen = false, closeDialogFn }: DialogProps) {

    const [PhoneNumber, setPhoneNumber] = useState<any>('')
    const [Otp, setOtp] = useState<any>('')
    const [ResetPasswordData, setResetPasswordData] = useState<any>({
        password: "",
        confirmPassword: "",
    });

    const handlePhoneChange = (e: any) => {
        setPhoneNumber(e?.target?.value)
    }

    const handleOtpChange = (e: any) => {
        setOtp(e?.target?.value)
    }

    const sendOtp = () => {
        let GetOtpData = new FormData();
        GetOtpData.append("mobile", PhoneNumber);

        getOtpMutate(GetOtpData);

    }

    const handlepasswordChange = (e: any) => {
        const { value, name } = e.target;

        let temp_registerData = { ...ResetPasswordData };
        temp_registerData = {
            ...ResetPasswordData,
            [name]: value,
        };

        setResetPasswordData(temp_registerData);
    }

    const changePassword = () => {
        let resetPasswordData = new FormData();
        resetPasswordData.append("mobile", PhoneNumber);
        resetPasswordData.append("otp", Otp);
        resetPasswordData.append("password", ResetPasswordData.password);

        changePasswordMutate(resetPasswordData);
    }

    const { mutate: changePasswordMutate, isLoading: changePasswordLoader } = useMutation(
        changePasswordApi,
        {
            onSuccess: (data: any, localData: any) => {
                closeDialogFn(false)
                if (data?.message) {
                    showMessage({
                        msgTyp: "success",
                        message: data?.message,
                    });
                }
            },
        }
    );

    const [isOtpReceived, setIsOtpReceived] = useState<boolean>(false)
    const [isOtpVeified, setIsOtpVeified] = useState<boolean>(false)

    const { mutate: getOtpMutate, isLoading: getOtpLoader } = useMutation(
        resetPassword,
        {
            onSuccess: (data: any, localData: any) => {
                if (data?.message) {
                    setIsOtpReceived(true);

                    setOtp(data?.otp_for_testing)
                    showMessage({
                        msgTyp: "success",
                        message: data?.message,
                    });
                }
            },
        }
    );


    const verifyOtp = () => {
        setIsOtpVeified(true)
    }

    return (
        <>
            {(dialogOpen) && <div className="dialogBackdrop">
                <div className="dialogCard" style={{
                    width: '40%',
                    marginLeft: '30%',
                }}>
                    <div className="flexEnd px-3 py-2">
                        <CommanText className="pointer" tag="p" text="Close" onClick={() => closeDialogFn(false)} fontSize={14} fontWeight={400} />
                    </div>

                    <div className="px-5 py-5">
                        {!isOtpReceived && <Col xs={12} className="m-auto">
                            <CommanText className="my-2" tag="p" fontSize={22} fontWeight={500} text="Enter registered number to get OTP" colorType="dark" />
                            <TextField id="phone" name="phone" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handlePhoneChange(e)
                            } className="w-100 my-2" label="Phone Number" variant="outlined" />


                            <CustomButton name="Send OTP" isLoading={getOtpLoader} className="w-100 my-3" onClick={sendOtp} height={56} background_color="primary" />
                        </Col>}

                        {(isOtpReceived && !isOtpVeified) && <Col xs={12} className="m-auto">
                            <CommanText className="my-2" tag="p" fontSize={22} fontWeight={500} text="Enter OTP sent on your phone number" colorType="dark" />
                            <TextField id="otp" name="otp" value={Otp} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleOtpChange(e)
                            } className="w-100 my-2" label="OTP" variant="outlined" />


                            <CustomButton name="Continue" className="w-100 my-3" onClick={verifyOtp} height={56} background_color="primary" />
                        </Col>}

                        {isOtpVeified && <Col xs={12} className="m-auto">
                            <CommanText className="my-2" tag="p" fontSize={22} fontWeight={500} text="Create password" colorType="dark" />

                            <TextField id="Password" type="password" name="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handlepasswordChange(e)
                            } className="w-100 my-2" label="Password" variant="outlined" />


                            <TextField id="confirmPassword" type="password" name="confirmPassword" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handlepasswordChange(e)
                            } className="w-100 my-2" label="Confirm Password" variant="outlined" />


                            <CustomButton name="Continue" className="w-100 my-3" isLoading={changePasswordLoader} onClick={changePassword} height={56} background_color="primary" />

                        </Col>}

                    </div>
                </div>
            </div>}
        </>
    )
}

export default ResetPasswordDialog
