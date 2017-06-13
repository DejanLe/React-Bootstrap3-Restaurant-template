import React, {Component} from 'react';

class Newsletter extends Component{

	render(){
		return(
			<div>
				<div className="newsletter">
					<div className="container text-center"> 
						<div className="col-md-12">
							<h2>Stay with us and expect the latest news</h2>
							<input type="email" value="" name="email" className="email subscription__form__email" id="email" placeholder="Your e-mail address" required="" />
							<input type="submit" value="Subscribe" name="submit_form" className="button subscription__form__submit2" />

						 </div>
					 </div>
				 </div>

			</div>

			);
	}
}

export default Newsletter;