import React, { useEffect, useState } from 'react';

const FetchLocalJSON = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/MockData/activities.json')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Failed to fetch JSON');
                }
                // console.log("api call success");
                return response.json();
            })
            .then(data => setData(data.activities))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Activities</h1>
            {data ? (
                <ul>
                    {data.map(activity => (
                        <li key={activity.id}>
                            <h2>{activity.name}</h2>
                            <p>Type: {activity.type}</p>
                            <p>Duration: {activity.duration_minutes} minutes</p>
                            <p>Location: {activity.location}</p>
                            <p>Date: {activity.date} at {activity.time}</p>
                            <p>Instructor: {activity.instructor}</p>
                            <p>Rating: {activity.rating}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default FetchLocalJSON;