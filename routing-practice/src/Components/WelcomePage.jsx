import { useState, useEffect } from 'react'


export default function WelcomePage() {
    const [name, setName] = useState('Chakane');
    const [age, setAge] = useState(29)

    return(
        <>
            <section>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <p>My name is: {name}</p>
            </section>
            <section>
                <input value={age} onChange={e => setAge(e.target.value)}/>
                <p>My age is: {age}</p>
            </section>
        </>
    )
    
    return(
        <>
            <div className='mainBody'>
                <div>Page1</div>
                <div>Page2</div>
            </div>

       
        </>
    )
}