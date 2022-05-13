import './App.scss';
import PriceCard from './components/price-card/PriceCard';
import Toggle from './components/toggle/Toggle';

function App() {
  return (
    <div className="page-wrapper">
      <h1 className='page-wrapper__title'>Our Pricing</h1>
      <div className="pricing-toggle">
        <p className='pricing-toggle__label'>Annually</p>
        <Toggle />
        <p className='pricing-toggle__label'>Monthly</p>
      </div>
      <div className="cards">
        <PriceCard />
        <PriceCard />
        <PriceCard />        
      </div>
    </div>
  );
}

export default App;
