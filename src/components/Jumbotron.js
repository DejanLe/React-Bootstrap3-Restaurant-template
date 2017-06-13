import React, {Component} from 'react';
import logo from './logo.svg';

class Jumbotron extends Component{
	render(){
		return(
			 <div className="jumbotron">
			 	<div className="overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
						<img src={logo}  className="img-responsive logo" alt="our best restourant" />
						</div>
						<div className="col-md-8">
						<h1> Thank you for visiting our Restaurant</h1>
						<h2>Stay with us and expect the latest news</h2>
							<input type="email" value="" name="email" className="email subscription__form__email" id="email" placeholder="Your e-mail address" required="" />
							<input type="submit" value="Subscribe" name="submit_form" className="button subscription__form__submit" />
						</div>
					</div>
				</div>
				</div>        
			</div>
			);
	}

}

export default Jumbotron;