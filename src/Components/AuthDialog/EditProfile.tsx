import React, { useState, useEffect } from 'react'
import CommanText from '../CommanText/CommanText'
import { Col } from 'react-bootstrap'
import { TextField } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'
import { editProfileApi, getProfile } from './AllApis'
import { showMessage } from 'src/Utils/MessageModal'
import { useMutation, useQuery } from 'react-query'

interface DialogProps {
    dialogOpen?: boolean;
    closeDialogFn?: any;
}

function EditProfile({ dialogOpen = false, closeDialogFn }: DialogProps) {

    const [EditData, setEditData] = useState<any>({
        name: "",
        email: "",
        phoneNumber: ""
    });

    const [UserId, setUserId] = useState('')

    useEffect(() => {
        let userData: any = localStorage.getItem('user');
        let userJsonData = JSON.parse(userData);
        setUserId(userJsonData?.id)
        setEditData({
            ...EditData,
            name: userJsonData?.name,
            email: userJsonData?.email,
            phoneNumber: userJsonData?.mobile
        })
    }, [])

    const handleInputChange = (e: any) => {
        const { value, name } = e.target;

        let temp_registerData = { ...EditData };
        temp_registerData = {
            ...EditData,
            [name]: value,
        };

        setEditData(temp_registerData);
    }

    const { data: companyProfileData, refetch } = useQuery(
        ["userProfile"],
        () => getProfile(UserId),
        {
            retry: 1,
            refetchOnWindowFocus: false,
            enabled: UserId ? true : false
        }
    );

    useEffect(() => {
        if (companyProfileData?.user) {
            localStorage.setItem("user", JSON.stringify(companyProfileData?.user));
        }
    }, [companyProfileData])

    const editProfile = () => {
        let registerFormData = new FormData();
        registerFormData.append("name", EditData.name);
        registerFormData.append("email", EditData.email);

        editUserMutate(registerFormData);
    }

    const { mutate: editUserMutate, isLoading: registerLoader } = useMutation(
        (editUserMutate) => editProfileApi(editUserMutate, UserId),
        {
            onSuccess: (data: any, localData: any) => {
                closeDialogFn(false)
                if (data?.message) {
                    showMessage({
                        msgTyp: "success",
                        message: "Profile has been updated successfully",
                    });
                }
            },
        }
    );

    return (
        <>
            {(dialogOpen) && <div className="dialogBackdrop">
                <div className="dialogCard">
                    <div className="flexEnd px-3 py-2">
                        <CommanText className="pointer" tag="p" text="Close" onClick={() => closeDialogFn(false)} fontSize={14} fontWeight={400} />
                    </div>

                    <div className="px-5 py-5">
                        <Col xs={12}>

                            <TextField id="phone" name="phone" disabled value={EditData?.phoneNumber} className="w-100 my-2" label="Phone Number" variant="outlined" />

                            <TextField id="name" name="name" value={EditData?.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } className="w-100 my-2" label="Phone No." variant="outlined" />

                            <TextField id="email" name="email" value={EditData?.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleInputChange(e)
                            } className="w-100 my-2" label="Email" variant="outlined" />


                            <CustomButton name="Continue" className="w-100 my-3" onClick={editProfile} height={56} background_color="primary" />
                        </Col>
                    </div>

                </div>
            </div>}
        </>
    )
}

export default EditProfile
