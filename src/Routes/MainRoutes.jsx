import { Routes, Route } from "react-router-dom";
import App from '../App';
import {About} from '../components/About';
import {Home} from '../components/Home';
import {Products} from '../components/ProductsDashboard';
import {SingleProductList} from "../components/SingleProduct";

export const MainRoutes = ()=>{
    return(
        <Routes>
        <Route path="/" element={<App/>}>
            <Route path=''element={<Home/>}></Route>
            <Route path='/about'element={<About/>}></Route>
            <Route path='/products'element={<Products/>}>
                <Route path="/products/:id" element={<SingleProductList/>}></Route>
            </Route>
        </Route>
    </Routes>
    )
    
}