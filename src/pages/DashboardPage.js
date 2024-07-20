import { Button, Col, Row, Space } from "antd";
import PageLayout from "../layouts";
import { Link } from "react-router-dom";
import CarImage from "./../images/car5.png"
import { RightOutlined } from "@ant-design/icons";

const DashboardPage = () => {
    return (
        <>
            <PageLayout>
                <Row gutter={24} style={{ marginTop: "80px" }}>
                    <Col span={12}>
                        <Row gutter={[16, 16]} style={{ alignItems: "start" }}>
                            <Col span={24}>
                                <h3>FIND YOUR CAR</h3>
                            </Col>
                            <Col span={24}>
                                <Row>
                                    <Col span={6}>
                                    </Col>
                                    <Col span={12}>
                                        <h1 style={{ alignItems: "start", fontFamily: "serif" }}>CAR RENTAL</h1>
                                    </Col>
                                    <Col span={6}>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <h3>EXPLORE MORE !</h3>
                            </Col>
                            <Col span={24}>
                                <Space>
                                    <Button iconPosition="end" style={{backgroundColor:"#e07f24", color:"white"}} icon={<RightOutlined/>}><Link to={"/car-list"} style={{ textDecoration: "none" }}>Available Car </Link></Button>
                                    <Button iconPosition="end" style={{backgroundColor:"black", color:"white"}} icon={<RightOutlined/>}><Link to={"/reservation-list"} style={{ textDecoration: "none" }}>Boooked Car</Link></Button>
                                </Space>
                            </Col>
                            <Col span={24}>
                                <h3>Popular Booking Cars</h3>
                                <h4 style={{ marginTop: "10px" }}>Browse popular car and get the best moment</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <img
                            src={CarImage}
                            alt="image-wayang"
                            style={{
                                width: "100%",
                                height: "90%",
                            }}
                        />
                    </Col>
                </Row>
            </PageLayout>
        </>
    )
}

export default DashboardPage;