import React, {Component} from 'react';
import menu1 from '../images/menu1.jpeg';
import menu2 from '../images/menu2.jpeg';
import menu3 from '../images/menu3.jpeg';
import logo from './logo.svg';
class Today_menu extends Component{
	render(){
		return(
			<div>
				<div className="today_menu">
					<h1>Today Menu</h1> 
					<div className="container">
					 <div className="row">
						<div className="col-md-4">
							<div className="panel panel-body">
							<h2>Ipsum today Lorem</h2>
								<div className="panel-body">
									<img src={menu1} className="img-responsive img-thumbnail" alt="our menu today" />
									<ul className="menu-info nav navbar-nav">
								   		<li><img src={logo}  className="img-responsive img-circle author-menu" alt="our best restourant" /></li>
										<li><h3><em>Price: $ 20 </em></h3></li>
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>
										<i class="fa fa-star" aria-hidden="true"></i>

									</ul>
								</div> 
							</div>

						</div>
						<div className="col-md-4">
							<div className="panel panel-body">
							<h2>Ipsum Lorem</h2>
								<div className="panel-body">
									<img src={menu2} className="img-responsive img-thumbnail" alt="our menu today" />
									<ul className="menu-info nav navbar-nav">
										<li><img src={logo}  className="img-responsive img-circle author-menu" alt="our best restourant" /></li>
										<li><h3><em>Price: $ 20 </em></h3></li>
									</ul>
								</div> 
							</div>

						</div>
						<div className="col-md-4">
							<div className="panel panel-body">
							<h2>Lorem Lorem</h2>
								<div className="panel-body">
								
									<img src={menu3} className="img-responsive img-thumbnail" alt="our menu today" />
							   <ul className="menu-info nav navbar-nav">
									<li><img src={logo}  className="img-responsive img-circle author-menu " alt="our best restourant" /></li>
									<li><h3><em>Price: $ 20 </em></h3></li>
								</ul>
								</div> 
							</div>

						</div>
			         </div>
					</div>
				</div>
			</div>
			);

	}
}
export default Today_menu;