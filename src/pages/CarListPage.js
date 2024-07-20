import { Button, Card, Col, Row, Tag } from "antd";
import DataMockCar from "./DataMockCar.json";
import { CarFilled, EditFilled, TagFilled } from "@ant-design/icons";
import ReservationForm from "../components/ReservationForm";
import FormAddCar from "../components/FormAddCar";
import PageLayout from "../layouts";
import Car from "./../images/car1.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, setShowModalCar, setShowModalCarEdit } from "../slice/cars/carSlice";
import { setShowModalReservation } from "../slice/reservations/reservationSlice";
import FormEditCar from "../components/FormEditCar";
import { useEffect } from "react";
const { Meta } = Card;

const CarListPage = () => {

    const carState = useSelector((state) => state.CAR_SLICE);
    const reservationState = useSelector((state) => state.RESERVATION_SLICE);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, [])

    return (
        <PageLayout>
            <Row gutter={[16, 16]} style={{ padding: "20px" }}>
                {
                    carState.listCar?.map((car) => {
                        return (
                            <Col span={8}>
                                <Card
                                    title={`${car.brand} -${car.model}`}
                                    style={{ boxShadow: '1px 1px 1px #ffcd9f' }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={Car}
                                        />
                                    }
                                    actions={
                                        [
                                            <Button style={{ backgroundColor: "orange", color: "white" }} icon={<EditFilled />} onClick={() => dispatch(setShowModalCarEdit(true))}>EDIT</Button>,
                                            <Button type="primary" icon={<CarFilled />} onClick={() => dispatch(setShowModalReservation(true))}>BOOKING</Button>
                                        ]}
                                >
                                    <Meta
                                        title={<Tag color="green" icon={<TagFilled />}>Rp. {car.price}</Tag>}
                                        description={`Year of car: ${car.year}`}
                                    />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            <ReservationForm />
            <FormAddCar />
            <FormEditCar />
        </PageLayout>
    )
}

export default CarListPage;