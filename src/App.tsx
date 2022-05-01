import './App.css';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Profile  age={12} />  
      <Profile name = "Shahid" age={40} status="Designer"/>  
      <Profile name = "Hamza" age={20} status="Developer"/>  
      <Profile name = "Shawn" age={21} status="Developer"/> 
      <Profile name = "Jhon" age={25} status="Developer">
        <span style={{color:"green"}}>Salary - 5cr</span>
      </Profile>
    </div>
  ); 
}

export default App;
