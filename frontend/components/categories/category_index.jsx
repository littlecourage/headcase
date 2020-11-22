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
    const { categories, currentUser, displayPacks } = this.props

    if (!currentUser) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div>
        <div>
          {categories.map(category => {

            return (
              <HashLink key={category.id} to={`#${category.name}`}>
                <h2>{category.name}</h2>
              </HashLink>
            )

          })}
        </div>

        <div>
          {categories.map(category => {
            
            return(
              <div key={category.id} id={category.name}>
                <h2>{category.name}</h2>
                <PacksList 
                  category={category}
                  displayPacks={displayPacks}
                />
              </div>
            )
            
          })}
        </div>
      </div>
    )

  }



}

export default CategoryIndex;