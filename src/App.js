import './App.css'
import Header from './components/Header';
import Footer from './components/Footer'
import Insta from './components/ClassComponents';
function App() {
  const name = 'Abhinand Shaji'
  const place = 'Kochi'
  const id = 'aStar'
  return (
    <div>
      <Header/>
      <h1 style={{color:'blue',backgroundColor:'yellow'}}>Abhinand Shaji</h1>
      <p>Iam {name}. Iam a Computer Science student</p>
      <h4 className='bg'>Roll number 4</h4>
      <PrintFav/>
      <Insta data={id}/>
      <Footer data={place} />
    </div>
  );
}

function PrintFav() {
  return(<h4 className='bg'>40</h4>)
}

export default App;
