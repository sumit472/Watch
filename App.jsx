import ClockName from './components/Clock_Heading';
import ClockSlogan from './components/Slogan';
import CurrentTime from './components/Current_Time';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
function App() {
  return <center>
    <div class="Container">
      <ClockName></ClockName>

      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>

    </div>
  </center>
}
export default App;