import { Input, InputNumber, Modal, Select, Form, Button, DatePicker } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useDispatch, useSelector } from "react-redux"
import { setShowModalCar, setShowModalCarEdit } from "../slice/cars/carSlice";
import { useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import dayjs from "dayjs";
import { postNewReservation } from "../slice/reservations/reservationSlice";

const FormEditCar = () => {

    const carState = useSelector((state) => state.CAR_SLICE);
    const dispatch = useDispatch();
    const [form] = useForm();

    const onFinish = (values) => {
        const transformedValues = {
            ...values,
            year: values.year.format('YYYY') // Convert year to string
        };
        console.log('Form Payload:', transformedValues);
        dispatch(postNewReservation(transformedValues));
    };

    useEffect(() => {
        form.resetFields();
    }, [carState.isModalCarEditOpen])

    useEffect(() => {
        if (carState.detailCarById) {
            form.setFieldsValue({
                model: carState.detailCarById.model,
                brand: carState.detailCarById.brand,
                color: carState.detailCarById.color,
                year: carState.detailCarById.year ? dayjs(carState.detailCarById.year) : null,
                registrationNumber: carState.detailCarById.registrationNumber,
                price: carState.detailCarById.price,
            });
        }
    }, [carState.detailCarById])

    return (
        <>
            <Modal open={carState.isModalCarEditOpen} onCancel={() => dispatch(setShowModalCarEdit(false))} title="Edit Car" footer={false}>
                <Form
                    form={form}
                    name="wrap"
                    labelCol={{
                        flex: '170px',
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
                    }}
                    onFinish={onFinish} // Handle form submission
                >
                    <Form.Item label="Car Model" name="model" rules={[{ required: true, message: 'Please enter the model of car!' }]}>
                        <Input placeholder="Model" />
                    </Form.Item>
                    <Form.Item label="Car Brand" name="brand" rules={[{ required: true, message: 'Please select the brand of car' }]}>
                        <Input placeholder="Brand" />
                    </Form.Item>
                    <Form.Item label="Color" name="color" rules={[{ required: true, message: 'Please enter the color!' }]}>
                        <Input placeholder="Color" />
                    </Form.Item>
                    <Form.Item label="Year" name="year" rules={[{ required: true, message: 'Please enter the year!' }]}>
                        <DatePicker picker="year" />
                    </Form.Item>
                    <Form.Item label="Registration Number" name="registrationNumber" rules={[{ required: true, message: 'Please enter the registration number!' }]}>
                        <Input placeholder="Registration Number" />
                    </Form.Item>
                    <Form.Item
                        label="Rental Price per Day"
                        name="price"
                        rules={[{ required: true, message: 'Please enter the rental price!' }]}
                    >
                        <InputNumber
                            prefix="Rp"
                            placeholder="Rental Price"
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                    <Form.Item style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit">
                            Add Car
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    )
}

export default FormEditCar;