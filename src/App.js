
import ProfilePicture from './Component/Profile/ProfilePicture'
import './App.css';
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="side"><div className="res"><ProfilePicture/>
        <FullName/></div></div>
        <div className='rigth'><Address/></div>
      </header>
    </div>
  );
}

export default App;
