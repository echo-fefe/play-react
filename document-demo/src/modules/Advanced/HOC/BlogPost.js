import React, { Component } from 'react'
import DataSource from './DataSource'

export default class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPost: props.data
    }
  }

  render() {
    return <TextBlock text={this.state.blogPost} />
  }
}

// 订阅单个博客帖子的组件，该帖子遵循类似的模式
class OldBlogPost extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
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
      blogPost: DataSource.getBlogPost(this.props.id)
    })
  }

  render() {
    return <TextBlock text={this.state.blogPost} />
  }
}

const TextBlock = (props) => (
  <div>
    {props.text}
  </div>
)
