import './css/App.css'
import Header from './components/Header';
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
return(
  <div className = "App">
  <Header />
  <Content />
  <Footer />
  </div>
);
}

// let User = (props) =>{
//   return(
//     <>
//     <h1>{props.where}</h1>
//     <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//     </>
//   )
// }

export default App;
