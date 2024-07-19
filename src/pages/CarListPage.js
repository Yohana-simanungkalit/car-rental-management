import { Button, Card, Col, Row } from "antd";
import DataMockCar from "./DataMockCar.json";
import { CarFilled, EditFilled } from "@ant-design/icons";
import ReservationForm from "../components/ReservationForm";
import FormAddCar from "../components/FormAddCar";
import PageLayout from "../layouts";
import Car from "./../images/car1.png"
const { Meta } = Card;

const CarListPage = () => {
    return (
        <PageLayout>
            <Card title="List Cars" extra={<Button type="primary">Add New Car</Button>}>
                <Row gutter={[16,16]}>
                    {
                        DataMockCar.cars.map((car) => {
                            return (
                                <Col span={12}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={Car}
                                            />
                                        }
                                        actions={[
                                            <Button style={{backgroundColor:"orange", color:"white"}} icon={<EditFilled/>}>EDIT</Button>,
                                            <Button type="primary" icon={<CarFilled/>}>Booking</Button>
                                        ]}
                                    >
                                        <Meta
                                            title={car.brand}
                                            description={car.description}
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Card>
            <ReservationForm/>
            <FormAddCar/>
        </PageLayout>
    )
}

export default CarListPage;