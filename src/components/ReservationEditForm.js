import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postNewReservation, setShowModalReservation, setShowModalReservationEdit } from "../slice/reservations/reservationSlice";
import { useEffect } from "react";
const { Option } = Select;

const ReservationFormEdit = () => {

    const reservationState = useSelector((state) => state.RESERVATION_SLICE);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        const payload = {
            "car": {
                // data car
            },
            ...values,
            startDate: values.startDate.format('YYYY-MM-DD'),
            endDate: values.endDate.format('YYYY-MM-DD'),
        }
        // payload ditambahhkan juga data car yang di booking
        console.log('Form Payload:', payload);
        dispatch(postNewReservation(payload));
    };

    useEffect(() => {
        form.resetFields();
    }, [reservationState.isModalReservationOpen])

    return (
        <Modal open={reservationState.isModalReservationEditOpen} onCancel={() => dispatch(setShowModalReservationEdit(false))} title="Edit Your Reservation" footer={false}>
            <Form
                form={form}
                onFinish={onFinish}
                initialValues={{
                    // Add any initial values here if needed
                }}
                name="wrap"
                labelCol={{
                    flex: '110px',
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                    flex: 1,
                }}
                colon={false}
                style={{
                    maxWidth: 600,
                    marginTop: 30,
                }}>
                <Form.Item
                    label="Rental Start Date"
                    name="startDate"
                    rules={[{ required: true, message: 'Please select a start date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Rental End Date"
                    name="endDate"
                    rules={[{ required: true, message: 'Please select an end date!' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Nik"
                    name="nik"
                    rules={[{ required: true, message: 'Please input nik!' }]}
                >
                    <Input placeholder="Your Nik" />
                </Form.Item>
                <Form.Item
                    label="Renter Name"
                    name="renterName"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                    <Input placeholder="Your Name" />
                </Form.Item>

                <Form.Item
                    label="Renter Contact"
                    name="renterContact"
                    rules={[
                        { required: true, message: 'Please enter your number phone!' },
                    ]}
                >
                    <Input placeholder="Your  Number" />
                </Form.Item>
                <Form.Item
                    label="Renter Email"
                    name="renterEmail"
                    rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email!' },
                    ]}
                >
                    <Input placeholder="Your Email" />
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }}>
                    <Button type="primary" htmlType="submit">
                        Rent Car
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}

export default ReservationFormEdit;