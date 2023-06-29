import {Component} from 'react'
import Item from '../Item'
import './index.css'

class MainBack extends Component {
  state = {keyword: '', stateList: this.props}

  searchMatch = event => {
    const w = event.target.value
    console.log(w)
    this.setState({keyword: w.toLowerCase()})
  }

  triggerD = triggerId => {
    console.log(triggerId)
    const {stateList} = this.state
    console.log(stateList)
    const {primaryList} = stateList
    const afterD = primaryList.filter(item => item.id !== triggerId)
    const ob = {primaryList: afterD}
    this.setState({stateList: ob})
  }

  render() {
    const {stateList} = this.state

    const {primaryList} = stateList
    const searchList = primaryList.filter(item => {
      let {title} = item
      title = title.toLowerCase()
      const {keyword} = this.state
      return title.includes(keyword)
    })
    let divRender
    if (searchList.length !== 0) {
      console.log('y')
      divRender = (
        <div className="main">
          <ul>
            {searchList.map(item => (
              <Item item={item} key={item.id} onclick={this.triggerD} />
            ))}
          </ul>
        </div>
      )
    } else {
      console.log('h')
      divRender = (
        <div className="row">
          <p className="p">There is no history to show</p>
        </div>
      )
    }

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
        <div className="bar2">{divRender}</div>
      </div>
    )
  }
}

export default MainBack
