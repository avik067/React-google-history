import {Component} from 'react'
import Card from '../Card'
import './index.css'

class MainBack extends Component {
  state = {keyword: ''}

  searchMatch = event => {
    const w = event.target.value
    console.log(w)
    this.setState({keyword: w.toLowerCase()})
  }

  render() {
    const {primaryList} = this.props
    const searchList = primaryList.filter(item => {
      let {title} = item
      title = title.toLowerCase()
      const {keyword} = this.state
      return title.includes(keyword)
    })

    return (
      <div>
        <div className="bar">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt=""
            />
          </div>
          <div className="row">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="icon"
                alt=""
              />
            </div>
            <div className="search-input-contaier">
              <input type="search" onChange={this.searchMatch} />
            </div>
          </div>
        </div>
        <div className="bar2">
          <Card listOf={searchList} />
        </div>
      </div>
    )
  }
}

export default MainBack
