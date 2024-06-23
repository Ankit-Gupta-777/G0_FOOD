import Navigationbar from '../src/components/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Heading } from './components/heading';
import { Bakery } from './components/bakery';
import { FruitAndVegetables } from './components/fruitAndVegetables';
import { MeatAndSeafood } from './components/meatAndSeafood';
import { BiscuitAndSnacks } from './components/biscuitAndSnacks';
import { Beverage } from './components/beverage';
import Contact from './components/contact';


function App() {
  return (
    <BrowserRouter>
     <Navigationbar/>
     <Heading/>
    <Routes>
      <Route path='/' element={<FruitAndVegetables/>}/>
      <Route path='/BAKERY' element={<Bakery/>} />
      <Route path='/FRUITS AND VEGETABLES' element={<FruitAndVegetables/>}/>
      <Route path='/MEAT AND SEAFOOD' element={<MeatAndSeafood/>}/>
      <Route path='/BEVERAGE' element={<Beverage/>}/>
      <Route path='/BISCUIT AND SNACKS' element={<BiscuitAndSnacks/>}/>
      <Route path='/contact' element={<Contact/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
