import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';
import AppContext from '../context/appContext';

const MyOrder = () => {
	const { state } = useContext(AppContext)
	const sumTotal = () => {
		return state.cart.reduce((a, currentValue) => currentValue.price + a ,0)
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((item,index )=> <OrderItem product={item} key={index} />)}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${
						state.cart.length > 0 ? sumTotal() : '0,00'
					}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
