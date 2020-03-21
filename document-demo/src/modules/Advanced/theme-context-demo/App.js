import React, { Component } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import ThemeTogglerButton from './ThemeTogglerButton'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }

    // State 也包含了更新函数，因此它会被传递进 context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    )
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  )
}
