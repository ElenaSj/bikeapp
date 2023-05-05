import React from 'react';

const StationDetail = props => {
    const station=props.station
    
console.log("station id",station.id)
    return (
        <div className="col">
        {!station.id && <p>Please select a station from the list to view detailed info</p>}

        {!!station.id &&
            <h2>{station.nameFi}</h2>
        }
        </div>
    )

}

export default StationDetail