import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Sign_up from '../views/Sign_Up/Sign_Up'
import App from '../App';
import Log_In from '../views/Log_In/Log_In';
import Products from '../views/Products/Products';

function main(){
    return (
        <BrowserRouter>
            <Route exact path="/" component = {Products} />
            <Route exact path="/app" component = {App} />
            <Route exact path="/sign_up" component = {Sign_up} />
            <Route exact path="/log_in" component = {Log_In} />
        </BrowserRouter>
    )
}
export default main