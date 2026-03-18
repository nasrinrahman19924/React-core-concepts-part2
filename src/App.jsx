// import Counter from './Counter';
// import Batsman from './Batsman';
// import Blower from './Blower';

import Users from './users';
import Posts from './Posts';
import './App.css'
import { Suspense } from 'react';
import Friends from './Friends';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json());

// const fetchFriends =async () =>{
//  const res = await fetch('https://jsonplaceholder.typicode.com/users')
//  return res.json();
// }

const fetchPosts =async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();

}




function App() {
  
//   function handleClick() {
//     alert('I am clicked')
//   }
  
//   const handleClick3 = () =>{
//     alert('Here Clicked')
//   }

// const handleAdd5 =(num) =>{
//   const newNum = num+5;
//   alert(newNum)
// }


// const friendsPromise = fetchFriends();
const postsPromise = fetchPosts();


  return (
    
    
    <>
          
          <h1>Get started</h1>


          <Suspense fallback={<h4>Posts are coming.....</h4>}>
            <Posts  postsPromise={ postsPromise}></Posts>
          </Suspense>
         
          
         {/* <Suspense fallback={<h3>Loading...</h3>}>
           <Users fetchUsers={fetchUsers}></Users>
         </Suspense> */}
{/* 
          <Suspense fallback={<h3>Friends are Coming........</h3>}>
             <Friends friendsPromise={friendsPromise}></Friends>
          </Suspense> */}
          
          
          {/* <Blower></Blower>
          <Batsman></Batsman>

          <Counter></Counter> */}
{/*           
      <div className=''>
            <button onclick="handleClick()">Click Me</button>
          
          
          <button onClick={handleClick}>Click Me</button>
          <button onClick={ function handleClick2(){ alert('Clicked here')}}>Click Me</button>
          <button onClick={handleClick3}>Click Me</button>
          <button onClick={() =>{ alert('Clicked here')}}>Click Me</button>
          <button onClick={handleAdd5(15)}>Click Me</button>
          <button onClick={() => handleAdd5(12)}>Click Me</button>
    
      </div> */}

     


      
      
    </>
  )
}

export default App
