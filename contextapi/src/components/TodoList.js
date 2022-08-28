import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

class TodoList extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => {
                return (
                    <ThemeContext.Consumer>{(context) => {
                        const { isLoggedIn, changeAuthStatus } = authContext;
                        const { isDarkTheme, darkTheme, lightTheme } = context
                        const theme = isDarkTheme ? darkTheme : lightTheme
                        return (
                            <div className='ui list' style={{ background: theme.background, color: theme.text }}>
                                <p className='item' onClick={changeAuthStatus}>{isLoggedIn ? 'User Logged In' : 'User Logged Out'}</p>
                                <p className='item'>Plan the family trips</p>
                                <p className='item'>Go for shopping for dinner</p>
                                <p className='item'>Go for a walk</p>
                            </div>
                        )
                    }
                    }</ThemeContext.Consumer>
                )
            }}</AuthContext.Consumer>
        )
    }
}

export default TodoList