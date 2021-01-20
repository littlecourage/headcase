import React from 'react';
import PacksList from '../packs/packs_list';
import { HashLink } from 'react-router-hash-link';
import { Link, Redirect } from 'react-router-dom';

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
    const { categories, displayPacks, userPacks, sleepPack } = this.props

    return (userPacks && sleepPack) ? (
      <div className="outer-discover">


      <div className="discoverPage">
        <div className="linkBox">
          <div className="linkHolder">
            <span>PACKS</span>
            {categories.map(category => {

              return (
                <HashLink key={category.id} to={`#${category.name}`} className="hashLink">
                  {category.name}
                </HashLink>
              )

            })}
          </div>
        </div>

        <div className="tileBox">
          <div className="featured">
            <Link to={`packs/${sleepPack.id}`} ><img src={featuredPack} alt="link to sleep pack" /></Link>
          </div>
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
      </div>
    ) : (
      null
    )

  }



}

export default CategoryIndex;