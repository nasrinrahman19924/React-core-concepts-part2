import Counter from './Counter';
import Batsman from './Batsman';
import Blower from './Blower';
import './App.css'



function App() {
  
  function handleClick() {
    alert('I am clicked')
  }
  
  const handleClick3 = () =>{
    alert('Here Clicked')
  }

const handleAdd5 =(num) =>{
  const newNum = num+5;
  alert(newNum)
}




  return (



    <>
          <h1>Get started</h1>

          <Blower></Blower>
          <Batsman></Batsman>

          <Counter></Counter>
          
      <div className=''>
            <button onclick="handleClick()">Click Me</button>
          
          
          <button onClick={handleClick}>Click Me</button>
          {/* <button onClick={ function handleClick2(){ alert('Clicked here')}}>Click Me</button> */}
          <button onClick={handleClick3}>Click Me</button>
          <button onClick={() =>{ alert('Clicked here')}}>Click Me</button>
          <button onClick={handleAdd5(15)}>Click Me</button>
          <button onClick={() => handleAdd5(12)}>Click Me</button>
    
      </div>

     


      
      
    </>
  )
}

export default App
