import React, {Component} from 'react';
import menu1 from '../images/menu1.jpeg';


class Today_recepies extends Component{
  render(){
    return(
      <div className="today_recepies">
        <div className="container">
          <div className="row">
              <div className="col-md-12 ">
                <h1 className="text-center">Today Recepies</h1>
                     <blockquote>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                     </blockquote> 
              </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={menu1} className="img-responsive img-thumbnail" alt="our menu today" />
            </div>
            <div className="col-md-8">
              <h3>Ingredients</h3>
                


              <ul>
                <li>1 pound lean ground beef  </li>
                <li> 1/2 cup water </li>
                <li>1 cup shredded Cheddar cheese  </li>
                <li>1 cup sour cream  </li>
                <li>2 cups crushed tortilla chips  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

  export default Today_recepies;