import React from 'react';

export default class ExtraStats extends React.Component {

    render() {
        let { data } = this.props;
        return (
            <div>
                <div className=''>
                    <div className="card-group" style={{ marginTop: 0 }}>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Latest Increase</h5>
                                <p className="card-text">{data.latestIncrease}&nbsp;</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Average Cases</h5>
                                <p className="card-text">{data.latestAverage} per day&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="card-group" style={{ marginTop: 0 }}>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">For more info</h5>
                                <p className="card-text"><a href="https://sacoronavirus.co.za/">sacoronavirus.co.za</a></p>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Last Updated</h5>
                                <p className="card-text">{data.lastChecked.date}&nbsp; {data.lastChecked.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}