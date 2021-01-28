import React from 'react'
import Video from './Video'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';





const Menu = () => {
 
    return ( 
        <Router>
        <div>
            <ul>
                <li>
                    <Link to='/fast'>Fast</Link>
                </li>
                <li>
                    <Link to='/slow'>Slow </Link>
                </li>    
                <li>
                    <Link to='/cute'>Cute</Link>
                </li>
                <li>
                    <Link to='/eek'>Eek</Link>
                </li>  
            </ul>  

           
                                        <Switch>
                        <Route path='/:name' component={Video}/>
                      

                      </Switch>
                   
            </div>
            </Router>
     );
}
 
export default Menu;



// version 2 with functions
// const Menu = (props) => {
 
//     return ( 
//         <div>
//                 <form>
//                     <input name='video' type='radio' onClick={()=> props.choose('fast')}/>Fast
//                     <input name='video' type='radio' onClick={()=> props.choose('slow')}/>Slow
//                     <input name='video' type='radio' onClick={()=> props.choose('cute')}/>Cute
//                     <input name='video' type='radio' onClick={()=> props.choose('eek')}/>Eek
//                 </form>
//         </div>
//      );
// }
 
// export default Menu;