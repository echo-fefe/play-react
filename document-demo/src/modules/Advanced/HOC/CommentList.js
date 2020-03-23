import React, { Component } from 'react'
import DataSource from './DataSource'

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.data
    }
  }

  render() {
    return (
      <div>
      {this.state.comments.map((item) => (
        <Comment comment={item} key={item.id} />
      ))}
      </div>
    )
  }
}

// CommentList 组件，它订阅外部数据源，用以渲染评论列表
class OldCommentList extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      comments: DataSource.getComments()
    }
  }

  componentDidMount() {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount() {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange () {
    this.setState({
      comments: DataSource.getComments()
    })
  }

  render() {
    return (
      <div>
      {this.state.comments.map((item) => (
        <Comment comment={item} key={item.id} />
      ))}
      </div>
    )
  }
}

const Comment = (props) => (
  <div>
    {props.comment}
  </div>
)
