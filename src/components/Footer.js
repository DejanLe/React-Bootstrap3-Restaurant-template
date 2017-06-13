import React, {Component} from 'react';

class Footer extends Component{
	render(){
		return(
			<div>
				<div className="footer-style">
					<div className="container">
					 	<div className="row">
								<div className="col-md-3">
									<h3>About Us</h3>
									<p>It is a long established fact that a reader will be distracted by the readable</p>
								</div>
								<div className="col-md-6">
									<h2>Stay with us and expect the latest news</h2>
							<input type="email" value="" name="email" className="email subscription__form__email" id="email" placeholder="Your e-mail address" required="" />
							<input type="submit" value="Subscribe" name="submit_form" className="button subscription__form__submit" />
								</div>
							<div className="col-md-3">
								<i class="fa fa-facebook" aria-hidden="true"></i>
								<i class="fa fa-tiwtter" aria-hidden="true"></i>
								<i class="fa fa-linkedin" aria-hidden="true"></i>

							</div>
					    </div> 
					</div>
				</div>
			</div>
			);
	}
}

export default Footer;