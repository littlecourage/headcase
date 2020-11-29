import React from 'react';
import PacksList from '../packs/packs_list';
import { HashLink } from 'react-router-hash-link';
import { Redirect } from 'react-router-dom';

class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories()
    this.props.fetchAllUserPacks()
    this.props.fetchAllPacks()
  }

  render() {
    const { categories, displayPacks, userPacks } = this.props

    return (userPacks) ? (
      <div className="discoverPage">
        <div className="linkBox">
          <span>PACKS</span>
          {categories.map(category => {

            return (
              <HashLink key={category.id} to={`#${category.name}`} className="hashLink">
                {category.name}
              </HashLink>
            )

          })}
        </div>

        <div className="tileBox">
          {categories.map(category => {
            
            return(
              <div key={category.id} id={category.name} className="category">
                <h2>{category.name}</h2>

                <div className="categoryBox">
                  <PacksList 
                    category={category}
                    displayPacks={displayPacks}
                    className="innerBox"
                  />
                </div>
              </div>
            )
          })}

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        
      </div>
    ) : (
      null
    )

  }



}

export default CategoryIndex;