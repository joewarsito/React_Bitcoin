import React from 'react';
import { Route, Link } from 'react-router-dom';
import Currency from './Currency';
import ToBtc from './ToBtc';
import ToIdr from './ToIdr';


class Utama extends React.Component {
    render() {
        return (
            <div>
                <div className="container text-center p-4">
                    <Link to="/"><img className="my-3" alt="ok" style={{ width: "300px", height: "150px" }} src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG17.png" /></Link>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <Link to="/bitcoin_today" className="btn bg-warning">Bitcoin Hari Ini</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ke_bitcoin" className="btn bg-warning">Rupiah Ke Bitcoin</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ke_rupiah" className="btn bg-warning">Bitcoin Ke Rupiah</Link>
                        </li>
                    </ul>
                </div>

                <div id="route">
                    <Route exact path="/" component={"Home"}></Route>
                    <Route path="/bitcoin_today" component={Currency}></Route>
                    <Route path="/to_idr" component={ToIdr}></Route>
                    <Route path="/to_btc" component={ToBtc}></Route>
                </div>
            </div>
        )
    }
}


export default Utama;