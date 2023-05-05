import React from 'react';

import StationDetail from './station_detail'
import StationList from './station_list'

const StationContainer = () => {

    return <div className="row">
        <StationList />
        <StationDetail />
    </div>
}

export default StationContainer