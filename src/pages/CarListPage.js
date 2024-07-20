import { Button, Card, Col, Row } from "antd";
import DataMockCar from "./DataMockCar.json";
import { CarFilled, EditFilled } from "@ant-design/icons";
import ReservationForm from "../components/ReservationForm";
import FormAddCar from "../components/FormAddCar";
import PageLayout from "../layouts";
import Car from "./../images/car1.png"
import { useDispatch, useSelector } from "react-redux";
import { setShowModalCar, setShowModalCarEdit } from "../slice/cars/carSlice";
import { setShowModalReservation } from "../slice/reservations/reservationSlice";
import FormEditCar from "../components/FormEditCar";
const { Meta } = Card;

const CarListPage = () => {

    const carState = useSelector((state) => state.CAR_SLICE);
    const reservationState = useSelector((state) => state.RESERVATION_SLICE);
    const dispatch = useDispatch();

    return (
        <PageLayout>
            <Card title="List Cars" extra={<Button type="primary" onClick={() => dispatch(setShowModalCar(true))}>Add New Car</Button>}>
                <Row gutter={[16, 16]}>
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
                                            <Button style={{ backgroundColor: "orange", color: "white" }} icon={<EditFilled />} onClick={() => dispatch(setShowModalCarEdit(true))}>EDIT</Button>,
                                            <Button type="primary" icon={<CarFilled />} onClick={() => dispatch(setShowModalReservation(true))}>BOOKING</Button>
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
            <ReservationForm />
            <FormAddCar />
            <FormEditCar />
        </PageLayout>
    )
}

export default CarListPage;