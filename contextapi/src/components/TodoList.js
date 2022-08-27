import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class TodoList extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, darkTheme, lightTheme } = context
                const theme = isDarkTheme ? darkTheme : lightTheme
                return (
                    <div className='ui list' style={{ background: theme.background, color: theme.text }}>
                        <p className='item'>Plan the family trips</p>
                        <p className='item'>Go for shopping for dinner</p>
                        <p className='item'>Go for a walk</p>
                    </div>
                )
            }
            }</ThemeContext.Consumer>

        )
    }
}

export default TodoList