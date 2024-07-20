import { Button, Card, Col, Row } from "antd";
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
            <Card title="List Booked Car">
                <Row gutter={[16,16]}>
                    <Col span={16}>
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
                    </Col>
                    <Col span={8}>
                        <Card title="Tanggal Lewat">
                            <h1>List Booking </h1>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <ReservationForm/>
            <FormAddCar/>
        </PageLayout>
    )
}

export default ReservationPage;