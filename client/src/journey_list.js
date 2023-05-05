import { useEffect, useState } from 'react'
import axios from 'axios'

const Journeys = ({ journeys }) => {
    let journeyrows = journeys.map(j => <p key={j.id}>From {j.departureStation} to {j.returnStation} Duration {j.duration} Distance {j.distance}</p>)
    return journeyrows
}

const JourneyList = () => {
    const [journeys, getJourneys] = useState([])

    useEffect(() => {
        axios.get('/api/journeys')
            .then(response => getJourneys(response.data))
    })

    return (
        <div>
            <h2>Pyörämatkat</h2>
            <Journeys journeys={journeys} />
        </div>
    )

}

export default JourneyList