import React from 'react'
import CommanText from '../CommanText/CommanText'
import { Row, Col } from 'react-bootstrap'
import { TextField } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'

interface DialogProps {
    dialogOpen?: boolean;
    closeDialogFn?: any;
}

function CounsellingDialog({ dialogOpen = false, closeDialogFn }: DialogProps) {
    return (<>
        {(dialogOpen) && <div className="dialogBackdrop">
            <div className="dialogCard">
                <Row>
                    <Col xs={4} className="authDialogLeft px-4 py-5 flexCenter">

                        <div>
                            <CommanText className="mx-0 mb-3" tag="p" align="center" fontSize={16} fontWeight={500} text="Don’t Miss the Chance" colorType="light" />
                            <CommanText className="mx-0 mb-3" tag="p" align="center" fontSize={16} fontWeight={500} text="*Limited time offer" colorType="light" />

                        </div>

                    </Col>

                    <Col xs={8}>
                        <div className="flexEnd px-3 py-2">
                            <CommanText className="pointer" tag="p" text="Close" onClick={() => closeDialogFn(false)} fontSize={14} fontWeight={400} />
                        </div>




                        <div className="w-100 px-5">
                            <div className="flexStart my-3">
                                <CommanText tag="p" align="left" text="Free" fontSize={24} fontWeight={500} colorType="dark" />
                                <CommanText tag="p" align="left" className="mx-1" text="Counselling" fontSize={24} fontWeight={500} colorType="primary" />
                            </div>

                            <TextField id="outlined-basic" className="w-100 my-2" label="Name" variant="outlined" />
                            <TextField id="password-basic" className="w-100 my-2" label="Mobile No" variant="outlined" />
                            <TextField id="password-basic" className="w-100 my-2" label="Email id" variant="outlined" />
                            <TextField id="password-basic" className="w-100 my-2" label="Messages" variant="outlined" />


                            <CustomButton name="Request a Callback" className="w-100 my-4" height={56} background_color="primary" />

                        </div>







                    </Col>
                </Row>
            </div>
        </div>}
    </>)
}

export default CounsellingDialog
