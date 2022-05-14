import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './price-card.scss';

const PriceCard = ({data, pricing}) => {
  return (
	<div className={`price-card ${data.promoted ? 'price-card--promoted' : ''}`}>
		<h2 className='price-card__heading'>{data.type}</h2>

		<div className="price-card__price-wrapper">
			<span className="price-card__dollars">$</span>
			<SwitchTransition>
				<CSSTransition
					key={pricing}
					timeout={400}
					classNames={'price-card__price-'}
				>
					<p className="price-card__price">{pricing === 'annual' ? data.price.annually : data.price.monthly}</p>
				</CSSTransition>
			</SwitchTransition>

		</div>


		<ul className="price-card__features-list">
			<li className="price-card__feature">{data.storage.capacity} {data.storage.units} Storage</li>
			<li className="price-card__feature">{data.users} Users Allowed</li>
			<li className="price-card__feature">Send up to {data.sendCapacity} GB</li>
		</ul>
		<button className="price-card__cta">Learn More</button>
	</div>
  )
}

export default PriceCard