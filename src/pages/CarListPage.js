import { Button, Card, Col, Row } from "antd";
import DataMockCar from "./DataMockCar.json";
import { CarFilled, EditFilled, EditOutlined } from "@ant-design/icons";
const { Meta } = Card;

const CarListPage = () => {
    return (
        <>
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
                                                src={car.image}
                                            />
                                        }
                                        actions={[
                                            <EditFilled key="edit"/>,
                                            <CarFilled/>
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
        </>
    )
}

export default CarListPage;