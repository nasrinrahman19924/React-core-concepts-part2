export default function Friend({ friend }){
    
    console.log(friend);
    const{name, username, email }= friend;

    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <h4>UserName: {username}</h4>
            <h4>Email: {email}</h4>
            
        </div>
    )
}