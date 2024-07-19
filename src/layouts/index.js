import { Button, Col, Divider, Row, Space } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const PageLayout = (props) => {
    return (
        <>
            <Row className="layout-wrap">
                <Col span={24}>
                    <Row>
                        <Col span={6} style={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={logo}
                                alt="logo"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginRight: "10px"
                                }}
                            />
                            <span>
                                <h4>CAR RENTAL</h4>
                            </span>
                        </Col>
                        <Col span={17}>
                            <div className="menu-layout">
                                <Row>
                                    <Col span={24}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                                            <Button type="dashed" style={{ flex: 1 }}>
                                                <Link to="/" style={{ textDecoration: 'none', width: '100%', display: 'block', textAlign: 'center' }}>Dashboard</Link>
                                            </Button>
                                            <Button type="dashed" style={{ flex: 1 }}>
                                                <Link to="/car-list" style={{ textDecoration: 'none', width: '100%', display: 'block', textAlign: 'center' }}>Available Car</Link>
                                            </Button>
                                            <Button type="dashed" style={{ flex: 1 }}>
                                                <Link to="/reservation-list" style={{ textDecoration: 'none', width: '100%', display: 'block', textAlign: 'center' }}>Booked Car</Link>
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Col span={24} style={{ width: "100%", height: "100%", padding: "45px" }}>
                        {props.children}
                    </Col>
                </Col>
            </Row>
        </>
    )
}

export default PageLayout;