import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  calendar: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map(day => ({
    day,
    meals: Object.keys(state[day]).reduce((meals, meal) => {
      meals[meal] = state[day][meal] 
        ? state[day][meal]
        : null
      return meals
    }, {})
  }))
})

const mapDispathToProps = (dispatch) => ({
  selectRecipe: (data) => dispatch(addRecipe(data)),
  remove: (data) => dispatch(removeFromCalendar(data))
})

export default connect(mapStateToProps, mapDispathToProps)(App)
