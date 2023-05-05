import { useEffect, useState } from 'react'
import axios from 'axios'

const Journeys = ({ journeys }) => {
    let journeyrows = journeys.map(j => {
        return (
        <tr>
            <td>{j.departureStation}</td>
            <td>{j.returnStation}</td>
            <td>{j.duration}</td>
            <td>{j.distance}</td>
        </tr>
        )
    })
    
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">From (station name)</th>
                        <th scope="col">To (station name)</th>
                        <th scope="col">Duration (minutes)</th>
                        <th scope="col">Distance (kilometers)</th>
                    </tr>
                </thead>
                <tbody>
                    { journeyrows }
                </tbody>
            </table>
        </>
    )
}

const JourneyList = () => {
    const [journeys, getJourneys] = useState([])

    useEffect(() => {
        axios.get('/api/journeys')
            .then(response => getJourneys(response.data))
    },[])

    return (
        <div>
            <h2>Bike journeys</h2>
            <Journeys journeys={journeys} />
        </div>
    )

}

export default JourneyList