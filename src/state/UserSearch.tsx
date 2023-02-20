import {useState} from 'react'

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Michael', age: 20},
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })

        setUser(foundUser)
    }
    return (
        <>
            <h3>User Search</h3>
            <ul>
                {users.map(user => <li key={user.name}>{user.name}</li>)}
            </ul>   
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name} 
                {/* // user is defined then print out the name */}
                {user && user.age} 
                {/* // user is defined then print out the name */}
            </div>
        </>

    )
}

export default UserSearch