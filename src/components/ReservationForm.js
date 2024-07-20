import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setShowModalReservation } from "../slice/reservations/reservationSlice";
const { Option } = Select;

const ReservationForm = () => {

    const reservationState = useSelector((state) => state.RESERVATION_SLICE);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const availableCars = [
        { id: 1, name: 'Toyota Corolla' },
        { id: 2, name: 'Honda Civic' },
        { id: 3, name: 'Ford Mustang' },
        // Add more cars as needed
    ];

    return (
        <Modal open={reservationState.isModalReservationOpen} onCancel={() => dispatch(setShowModalReservation(false))} title="Booking Your Car" footer={false}>
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
                    label="Select Car"
                    name="selectedCar"
                    rules={[{ required: true, message: 'Please select a car!' }]}
                >
                    <Select placeholder="Select a car to rent">
                        {availableCars.map((car) => (
                            <Option key={car.id} value={car.name}>
                                {car.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

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
                    label="Renter Name"
                    name="renterName"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                    <Input placeholder="Your Name" />
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

                <Form.Item
                    label="Photo ID"
                    name="photoId"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[{ required: false, message: 'Please upload your photo ID!' }]}
                >
                    <Upload name="photoId" listType="picture" beforeUpload={() => false}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Additional Documents"
                    name="documents"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="documents" beforeUpload={() => false} multiple>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item style={{textAlign:"center"}}>
                    <Button type="primary" htmlType="submit">
                        Rent Car
                    </Button>
                </Form.Item>
            </Form>
        </Modal >
    )
}

export default ReservationForm;