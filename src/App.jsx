import { useState } from 'react';
import './App.scss';
import PriceCard from './components/price-card/PriceCard';
import Toggle from './components/toggle/Toggle';

import priceData from './data';

function App() {

  const [pricing, setPricing] = useState('annual');

  const priceCards = priceData.map(price => (
    <PriceCard
      data={price}
      pricing={pricing}
    />
  ))

  const togglePricing = () => {
    setPricing(oldPricing => oldPricing === 'annual' ? 'month' : 'annual');
  }

  return (
    <div className="page-wrapper">
      <h1 className='page-wrapper__title'>Our Pricing</h1>
      <div className="pricing-toggle">
        <p className='pricing-toggle__label'>Annually</p>
        <Toggle 
          handleClick={togglePricing}
        />
        <p className='pricing-toggle__label'>Monthly</p>
      </div>
      <div className="cards">
        {priceCards}  
      </div>
    </div>
  );
}

export default App;
