import {Component} from 'react'
import Item from '../Item'
import './index.css'

class Card extends Component {
  state = {delid: '', delList: this.props}

  triggerD = i => {
    console.log(i)
  }

  render() {
    const {delList} = this.state
    const {listOf} = this.props
    const afterDelList = listOf.filter(item => {
      const {id} = item
      const {delid} = this.state
      return id !== delid
    })

    return (
      <div className="main">
        <ul>
          {listOf.map(item => (
            <Item item={item} key={item.id} onclick={this.triggerD} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Card

/* {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  } */
