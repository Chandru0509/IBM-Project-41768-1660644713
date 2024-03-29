import {useState} from 'react';
const AddUserForm=(props)=>{
    const initialFormState={id:null , name:'', username:''}
    const [user,setUser]=useState(initialFormState)
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})
    }
    return(
        <form onSubmit={
            event=>{
                event.preventDefault()
                if(!user.name || !user.username) return;
                props.addUser(user)
                setUser(initialFormState)
            }
        }>
            <label>NAME</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name}/>
            
            <br/>
            <br/>

            <label>USER NAME</label>
            <input type="text" onChange={handleInputChange} name="username" value={user.username}/>

            <br/>
            <br/>

            <button>Add new user</button>
        </form>
    )
}
export default AddUserForm;