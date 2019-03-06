import React, { PureComponent } from 'react'
import styles from '@styles/test1.module.scss'

export default class Test1 extends PureComponent {
  state = {
    date: new Date()
  }

  componentDidMount () {
    console.log('componentDidMount')
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    console.log('componentWillUnmount')
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h6>test1</h6>
        <p className={styles.test1}>{this.state.date.toLocaleString()}</p>
      </div>
    )
  }
}
