import { Button, Card, Col, Divider, Empty, Image, Row, Space, Tag } from "antd";
import { CalendarOutlined, CarFilled, ClockCircleFilled, DeleteFilled, EditFilled, MailFilled, MessageFilled, PhoneFilled, TagFilled, UserOutlined } from "@ant-design/icons";
import ReservationForm from "../components/ReservationForm";
import FormAddCar from "../components/FormAddCar";
import PageLayout from "../layouts";
import Car from "./../images/car5.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteReservation, fetchRental, setShowModalReservationEdit } from "../slice/reservations/reservationSlice";
import dayjs from "dayjs";
import ReservationFormEdit from "../components/ReservationEditForm";


const ReservationPage = () => {

    const carState = useSelector((state) => state.CAR_SLICE);
    const reservationState = useSelector((state) => state.RESERVATION_SLICE);
    const dispatch = useDispatch();

    const today = dayjs();
    const oneDayFromNow = today.add(1, 'day');

    // Filter reservations ending in one day
    const endingSoonReservations = reservationState.listReservation?.filter((rental) => {
        const endDate = dayjs(rental.endDate);
        return endDate.isSame(oneDayFromNow, 'day');
    });

    const onEditReservation = (id) => {
        dispatch(setShowModalReservationEdit(true));
    }

    useEffect(() => {
        dispatch(fetchRental())
    }, [])

    return (
        <PageLayout>
            {console.log("reservationState", reservationState.listReservation)}
            <Row gutter={[8, 8]} style={{ padding: "20px" }}>
                <Col span={16}>
                        <Row gutter={[8, 8]}>
                            {reservationState.listReservation ?
                                reservationState.listReservation?.map((rental) => {
                                    return (
                                        <Col span={24}>
                                            <Card title={<strong>{rental?.car?.brand} - {rental?.car?.model} </strong>}
                                                style={{ boxShadow: '1px 1px 1px #ffcd9f' }}
                                                extra={
                                                    <Tag icon={<CalendarOutlined />} color="#87d068"><strong>{rental?.startDate} - {rental?.endDate}</strong></Tag>
                                                }
                                            >
                                                <Row>
                                                    <Col span={10}>
                                                        <Image
                                                            width={200}
                                                            height={110}
                                                            src={Car}
                                                        />
                                                    </Col>
                                                    <Col span={14}>
                                                        <Space direction="vertical" style={{ width: '100%' }}>
                                                            <div style={{ textAlign: 'left' }}><PhoneFilled /> Renter Contact: <strong>{rental?.renterName} - {rental.renterContact}</strong></div>
                                                            <div style={{ textAlign: 'left' }}><MailFilled /> Renter Email: <strong>{rental?.renterEmail}</strong></div>
                                                            <div style={{ textAlign: 'left' }}><TagFilled /> Total Price: <strong>Rp.{rental?.totalPrice}</strong></div>
                                                            <Space style={{ display:"flex", justifyContent:"end" }}>
                                                            <div><Button icon={<EditFilled/>} type="link" onClick={() => onEditReservation(rental.id)}>EDIT</Button></div>
                                                            <div><Button icon={<DeleteFilled/>} type="link" onClick={() => dispatch(deleteReservation(rental.id))}>CANCEL</Button></div>
                                                            </Space>
                                                        </Space>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    )
                                })
                                :
                                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                                    <Empty description="No Reservations" />
                                </Col>
                            }
                        </Row>
                </Col>
                <Col span={8}>
                    <Card title="Upcoming Expirations" style={{ boxShadow: '1px 1px 1px #ffcd9f' }}>
                        {endingSoonReservations && endingSoonReservations.length > 0 ? (
                            endingSoonReservations.map((rental) => (
                                <div key={rental.id}>
                                    <Tag color={"#cd201f"}>End Date {rental.endDate}</Tag>
                                    <div>{rental.car.model} - {rental.car.brand}</div>
                                    <div>Total: Rp.{rental.car.price}</div>
                                    <div><Button type="link">{rental.renterContact} - {rental.renterName} (Remind)</Button> </div>
                                    <Divider />
                                </div>
                            ))
                        ) : (
                            <p>No cars on upcoming expirations.</p>
                        )}
                    </Card>
                </Col>
            </Row>
            <ReservationForm />
            <ReservationFormEdit/>
        </PageLayout>
    )
}

export default ReservationPage;