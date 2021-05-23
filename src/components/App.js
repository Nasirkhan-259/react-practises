import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import MainBody from '../components/MainBody';
import LoginForm from '../components/FormBody';
import Dashboard from '../components/Dashboard';
const userLoggedIn = false ;
// function renderConditionally(){
//   if(userLoggedIn === true){
//     return <Dashboard />
//   }
//   else{
//     return <LoginForm />
//   }
// }
function App() {
  return (
    <div className="container">
      <Header />
      {/* <MainBody /> */}
      {/* {renderConditionally()} */}
      {/* <LoginForm />
      <Dashboard /> */}
      {
        userLoggedIn == true ? <Dashboard /> : <LoginForm />
      }
    </div>
  );
}

export default App;
