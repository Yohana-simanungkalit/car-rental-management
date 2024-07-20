import { Button, Card, Col, Empty, Row, Tag } from "antd";
import { CarFilled, EditFilled, PlusOutlined, TagFilled } from "@ant-design/icons";
import ReservationForm from "../components/ReservationForm";
import FormAddCar from "../components/FormAddCar";
import PageLayout from "../layouts";
import Car from "./../images/car5.png"
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, fetchCars, getDetailCar, setShowModalCar, setShowModalCarEdit } from "../slice/cars/carSlice";
import { setShowModalReservation } from "../slice/reservations/reservationSlice";
import FormEditCar from "../components/FormEditCar";
import { useEffect } from "react";
const { Meta } = Card;

const CarListPage = () => {

    const carState = useSelector((state) => state.CAR_SLICE);
    const reservationState = useSelector((state) => state.RESERVATION_SLICE);
    const dispatch = useDispatch();

    const editCar = (id) => {
        dispatch(setShowModalCarEdit(true));
        dispatch(getDetailCar(id))
    }

    useEffect(() => {
        dispatch(fetchCars());
    }, [])

    return (
        <PageLayout>
            <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
                <Button type="primary" icon={<PlusOutlined />} onClick={() => dispatch(setShowModalCar(true))}>Add New Car</Button>
            </div>
            <Row gutter={[16, 16]} style={{ padding: "20px" }}>
                {
                    carState.listCar ?
                        carState.listCar?.map((car) => {
                            return (
                                <Col span={8}>
                                    <Card
                                        extra={<Button style={{ backgroundColor: "red", color: "white" }} onClick={() => dispatch(deleteCar(car.id))}>Delete</Button>}
                                        title={`${car?.brand} -${car?.model}`}
                                        style={{ boxShadow: '1px 1px 1px #ffcd9f' }}
                                        cover={
                                            <img
                                                alt="example"
                                                src={Car}
                                                height={210}
                                            />
                                        }
                                        actions={
                                            [
                                                <Button type="link" icon={<EditFilled />} onClick={() => editCar(car.id)}>EDIT</Button>,
                                                <Button type="link" icon={<CarFilled />} onClick={() => dispatch(setShowModalReservation(true))}>BOOKING</Button>
                                            ]}
                                    >
                                        <Meta
                                            title={<space> <div>Price for 1 day</div> <Tag color="green" icon={<TagFilled />}>Rp. {car?.price}</Tag></space>}
                                            description={`Year of car: ${car?.year}`}
                                        />
                                    </Card>
                                </Col>
                            )
                        })
                        :
                        <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                            <Empty description="No Available Car" />
                        </Col>
                }
            </Row>
            <ReservationForm />
            <FormAddCar />
            <FormEditCar />
        </PageLayout>
    )
}

export default CarListPage;