import React from 'react';
 // eslint-disable-next-line
// const React=require('react')
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import App from './App';
ReactDOM.render(
    <BrowserRouter>
{/* <Route path="/"  component={App} /> */}
<App/>
</BrowserRouter>,
document.getElementById('root'))
;