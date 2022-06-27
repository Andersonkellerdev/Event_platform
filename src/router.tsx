import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribles } from "./pages/Subscribes";


export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Subscribles/>} />
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
        </Routes>
    )
}