import { Input, InputNumber, Modal, Select, Form, Button } from "antd"
import TextArea from "antd/es/input/TextArea"

const FormAddCar = () => {
    return (
        <>
            <Modal open={false} title="Add New Car" footer={false}>
                <Form
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
                    }}

                >
                    <Form.Item label="Car Name" name="carName" rules={[{ required: true, message: 'Please enter the car name!' }]}>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item label="Car Type" name="carType" rules={[{ required: true, message: 'Please select the car type' }]}>
                        <Select placeholder="Type">
                            <Select.Option value="sedan">Sedan</Select.Option>
                            <Select.Option value="sports">Sports</Select.Option>
                            <Select.Option value="minivan">Minivan</Select.Option>
                            <Select.Option value="pickup">Pickup</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Brand" name="label" rules={[{ required: true, message: 'Please enter the brand!' }]}>
                        <Input placeholder="Brand" />
                    </Form.Item>
                    <Form.Item
                        label="Rental Price per Day"
                        name="rentalPrice"
                        rules={[{ required: true, message: 'Please enter the rental price!' }]}
                    >
                        <InputNumber
                            prefix="Rp"
                            placeholder="Rental Price"
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please enter the description!' }]}
                    >
                        <TextArea rows={4} placeholder="Car Description" />
                    </Form.Item>
                    <Form.Item style={{textAlign:"center"}}>
                        <Button type="primary" htmlType="submit">
                            Add Car
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    )
}

export default FormAddCar;