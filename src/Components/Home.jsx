import React, { useState } from 'react'


const Home = () => {

    const [show, setShow] = useState([]);
    const [selected, setSelected] = useState('All')
    const [fitness, setFitness] = useState('Walking')
    const [distance, setDistance] = useState('')
    const [time, setTime] = useState('')

    const handlesubmit = () => {
        setShow([...show, { id: Date.now(), fitness, distance, time }])
        console.log(fitness)
        setDistance('');
        setTime('');
        setFitness('Walking');
    }
    const showData = selected === 'All' ? show : show.filter((item) => item.fitness.toLowerCase() === selected.toLowerCase());

    return (
        <div><h3>Select item</h3>
            <select value={fitness} onChange={(e) => setFitness(e.target.value)}>
                <option>Walking</option>
                <option>Running</option>
                <option>Cycling</option>
            </select> <br />

            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder='Enter distance' /> <br />
            <input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder='Enter time' />
            <button onClick={handlesubmit}>Add</button> <br /> <h4>Show details</h4>
            <label> Select Specific Excercise</label>

            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="All">All</option>
                <option value="running">Running</option>
                <option value="Walking">Walking</option>
                <option value="Cycling">Cycling</option>
            </select>
            <ul>
                {showData.map((item) => (
                    <li key={item.id}>
                        <p>Exercise Type:{item.fitness}</p>
                        <p>Distance:{item.distance}</p>
                        <p>Time:{item.time}</p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Home