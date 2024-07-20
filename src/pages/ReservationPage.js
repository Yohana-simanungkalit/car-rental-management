import { Button, Card, Col, Divider, Row } from "antd";
import DataMockCar from "./DataMockCar.json";
import { CarFilled, EditFilled } from "@ant-design/icons";
import ReservationForm from "../components/ReservationForm";
import FormAddCar from "../components/FormAddCar";
import PageLayout from "../layouts";
import Car from "./../images/car1.png"
const { Meta } = Card;


const ReservationPage = () => {
    return(
        <PageLayout>
                <Row gutter={[16, 16]} style={{ padding: "40px" }}>
                    <Col span={16}>
                    <Row gutter={[16,16]}>
                    {
                        DataMockCar.cars.map((car) => {
                            return (
                                <Col span={24}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={Car}
                                            />
                                        }
                                        actions={[
                                            <Button style={{backgroundColor:"red", color:"white"}} icon={<EditFilled/>}>CANCEL</Button>,
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
                    </Col>
                    <Col span={8}>
                        <Card title="Upcoming Booked Date">
                            <h4>Car 1</h4>
                            <Divider/>
                            <h4>Car 1</h4>
                            <Divider/>
                            <h4>Car 1</h4>
                            <Divider/>
                        </Card>
                    </Col>
                </Row>

            <ReservationForm/>
            <FormAddCar/>
        </PageLayout>
    )
}

export default ReservationPage;