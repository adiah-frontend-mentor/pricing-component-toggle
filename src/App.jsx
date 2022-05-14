import { useState } from 'react';
import './App.scss';
import PriceCard from './components/price-card/PriceCard';
import Toggle from './components/toggle/Toggle';

const priceData = [
  {
    type: "Basic",
    price: {
      monthly: 19.99,
      annually: 199.99
    },
    storage: {
      capacity: 500,
      units: 'GB'
    },
    users: 2,
    sendCapacity: 3,
    promoted: false,
  },
  {
    type: "Professional",
    price: {
      monthly: 24.99,
      annually: 249.99
    },
    storage: {
      capacity: 1,
      units: 'TB'
    },
    users: 5,
    sendCapacity: 10,
    promoted: true,
  },
  {
    type: "Master",
    price: {
      monthly: 39.99,
      annually: 399.99
    },
    storage: {
      capacity: 2,
      units: 'TB'
    },
    users: 10,
    sendCapacity: 20,
    promoted: false,
  },
]

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
