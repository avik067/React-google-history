import './index.css'

const Item = props => {
  const {item, onclick} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const action = () => onclick(id)

  return (
    <li>
      <div className="row ">
        <p>{timeAccessed}</p>

        <div className="img-container">
          <img src={logoUrl} alt="domain logo" />
        </div>
        <p className="para ">{title}</p>
        <p className="span">{domainUrl}</p>
      </div>
      <div>
        <button type="button" data-testid="delete" onClick={action}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default Item

/* {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  } */
