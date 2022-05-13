import './price-card.scss';

const PriceCard = () => {
  return (
	<div className='price-card'>
		<h2 className='price-card__heading'>Basic</h2>
		<div className="price-card__price-wrapper">
			<span className="price-card__dollars">$</span>
			<p className="price-card__price">199.99</p>
		</div>
		<ul className="price-card__features-list">
			<li className="price-card__feature">500 GB Storage</li>
			<li className="price-card__feature">2 Users Allowed</li>
			<li className="price-card__feature">Send up to 3 GB</li>
		</ul>
		<button className="price-card__cta">Learn More</button>
	</div>
  )
}

export default PriceCard