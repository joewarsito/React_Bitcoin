import React from 'react';
import axios from 'axios';

class ToIdr extends React.Component {
    state = { rupiah: "", btc: "", infousd: "" }

    componentDidMount() {
        const url = "https://blockchain.info/ticker";
        axios.get(url).then(
            (x) => {
                this.setState({
                    infousd: x.data.USD.buy
                })
            }
        )
    }

    onHandleChange = (e) => {
        var val = e.target.value;
        this.setState({
            btctemp: val * this.state.infousd,
            btc: val,
        })
    }

    display() {
        if (this.state.btc) {
            return (
                <h2>BTC {this.state.btc} = Rp {Math.floor(this.state.btctemp * 14000)} </h2>
            )
        }
        else {
            return (
                <h2>Silakan input nominal bitcoin</h2>
            )
        }

    }

    render() {
        return (
            <div>
                <div className="container text-center">
                    <h2>Konversi Bitcoin ke Rupiah</h2>
                    <p>Kurs 1 USD = 14.000 IDR </p>
                    <input type="number" className="form-control" placeholder="Ketik nominal bitcoin.." onChange={this.onHandleChange} />
                    {this.display()}
                </div>
            </div>
        )
    }
}

export default ToIdr;