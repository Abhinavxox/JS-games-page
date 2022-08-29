import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

// class Navbar extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context
//         const theme = isDarkTheme ? darkTheme : lightTheme
//         return (
//             <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
//                 <h2 className='ui centered header'>
//                     OAK Academy
//                 </h2>
//                 <div className='ui four buttons'>
//                     <button className='ui button'>Overview</button>
//                     <button className='ui button'>Contact</button>
//                     <button className='ui button'>Support</button>
//                     <button className="ui button" onClick={changeTheme}>Change theme</button>
//                 </div>
//             </nav>
//         )
//     }
// }

const Navbar = () => {
    return (
        <nav>
            <h2 className='ui centered header'>
                OAK Academy
            </h2>
            <div className='ui four buttons'>
                <button className='ui button'>Overview</button>
                <button className='ui button'>Contact</button>
                <button className='ui button'>Support</button>
                <button className="ui button" >Change theme</button>
            </div>
        </nav>
    )
}

export default Navbar