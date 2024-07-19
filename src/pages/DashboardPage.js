import { Button, Col, Row } from "antd";
import PageLayout from "../layouts";
import { Link } from "react-router-dom";
import CarImage from "./../images/pngwing.com.png"

const DashboardPage = () => {
    return (
        <>
            <PageLayout>
                <Row gutter={24} style={{ marginTop: "100px" }}>
                    <Col span={12}>
                        <Row gutter={[16, 32]} style={{ alignItems: "start" }}>
                            <Col span={24}>
                                <h6>FIND YOUR CAR</h6>
                            </Col>
                            <Col span={24}>
                                <Row>
                                    <Col span={6}>
                                    </Col>
                                    <Col span={12}>
                                        <h1 style={{ alignItems: "start" }}>CAR RENTAL</h1>
                                    </Col>
                                    <Col span={6}>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <h6>EXPLORE MORE</h6>
                            </Col>
                            <Col span={24}>
                                <Button type="primary"><Link to={"/car-list"} style={{ textDecoration: "none" }}>Available Car</Link></Button>
                                <Button type="primary"><Link to={"/reservation-list"} style={{ textDecoration: "none" }}>Boooked Car</Link></Button>
                            </Col>
                            <Col span={24}>
                                <h3>Popular Booking Cars</h3>
                                <h6 style={{ marginTop: "20px" }}>Browse popular booked car and get the best moment</h6>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <img
                            src={CarImage}
                            alt="image-wayang"
                            style={{
                                width: "100%",
                                height: "70%",
                            }}
                        />
                    </Col>
                </Row>
            </PageLayout>
        </>
    )
}

export default DashboardPage;