import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './price-card.scss';

const PriceCard = ({data, pricing}) => {
  return (
	<div className={`price-card ${data.promoted ? 'price-card--promoted' : ''}`}>
		<h2 className='price-card__heading'>{data.type}</h2>


			<SwitchTransition>
				<CSSTransition
					key={pricing}
					timeout={400}
					classNames={'price-card__price-wrapper-'}
				>
					<div className="price-card__price-wrapper">
						<span className="price-card__dollars">$</span>
						<p className="price-card__price">{pricing === 'annual' ? data.price.annually : data.price.monthly}</p>
					</div>
				</CSSTransition>
			</SwitchTransition>



		<ul className="price-card__features-list">
			<li className="price-card__feature">{data.storage.capacity} {data.storage.units} Storage</li>
			<li className="price-card__feature">{data.users} Users Allowed</li>
			<li className="price-card__feature">Send up to {data.sendCapacity} GB</li>
		</ul>
		<button className="price-card__cta"><span>Learn More</span></button>
	</div>
  )
}

export default PriceCard