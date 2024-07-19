import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import CarListPage from "../pages/CarListPage";
import ReservationPage from "../pages/ReservationPage";

const RouteList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<DashboardPage />} />
                <Route path="/car-list" element={<CarListPage />} />
                <Route path="/reservation-list" element={<ReservationPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteList;