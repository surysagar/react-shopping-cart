import React, { Component } from 'react';
import PEOPLE from './names';

// let data= PEOPLE;

/* ############################ */
/* ##### Single baby name ##### */
/* ############################ */
var info = {
  name: 'sag',
  address: {
    city: 'pune',
    phone: {
      mobile: 77177171717
    }
  }
} 
var city = 'address.city';

//const name = ((address || {}).phone || {}).mobile;

// var {name, address, city1:city } = info;

// console.log(info[name]);
// console.log(info['city1']);

const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {education: {school: {name}} = {school: {name: 'Dunno'}}} = user;

console.log(user); // { id: 339, name: 'Fred', age: 42} Remain Object same
console.log(name); //prints: Dunno

//console.log(info.phone);

let abc = [1,2,3,4];
let final = [];
let left = [], right = [];
for (let i =0; i<abc.length; i++) {
  left.push(abc.slice(abc.length-[i+1], abc.length));// [4], [3,4], [2,3,4], [1,2,3,4]
  right.push(abc.slice(0, i+1)); // [1], [1,2], [1,2,3], [1,2,3,4]
  //right.push()
}
console.log(left);
console.log(right);


const Name = ({ 
    id, 
    info, 
    handleFavourite 
  }) => (
    <li
      className={info.sex}
      onClick={() => handleFavourite(id)}>
      {info.name}
    </li>
  )
  
  /* ##################### */
  /* ##### Shortlist ##### */
  /* ##################### */
  
  const ShortList = ({
    favourites,
    data,
    deleteFavourite
  }) => {
    const hasFavourites = (favourites.length > 0)
    const favList = favourites.map((fav, i) => {
      return (
        <Name 
          id={i}
          key={i}
          info={data[fav]}
          handleFavourite={(id) => deleteFavourite(id)}
        />
      )
    })
    return (
      <div className="favourites">
        <h4>
          {hasFavourites 
            ? 'Your Shortlist'
            : 'Click on a name to shortlist it..'
          }
        </h4>
        <ul>
          {favList}
        </ul>
        {hasFavourites && <hr/>}
      </div>
    )
  }

/* ########################### */
/* ##### Baby names list ##### */
/* ########################### */

const NamesList = ({ 
    data, 
    filter, 
    favourites, 
    addFavourite 
  }) => { 
    const input = filter.toLowerCase()
    
    // Gather list of names
    const names = data.filter((person, i) => {
        return (
          // ...are already favourited
          favourites.indexOf(person.id) === -1
          // ...are not matching the current search value
          && !person.name.toLowerCase().indexOf(input)
        )
      })
      // ...output a <Name /> component for each name
      .map((person, i) => {
      // only display names that match current input string
        return (
          <Name 
            id={person.id}
            key={i}
            info={person}
            handleFavourite={(id) => addFavourite(id)}
          />
        )
      })
    
    /* ##### the component's output ##### */
    return ( 
      <ul> 
        {names}
      </ul>
    )
  }
  

class Search extends Component {
    render() {
      const { filterVal, filterUpdate} = this.props
      return (
        <form>
          <input 
            type='text'
            ref='filterInput'
            placeholder='Type to filter..'
            // binding the input value to state
            value={filterVal}
            onChange={() => {
             filterUpdate(this.refs.filterInput.value) 
            }}
          /> 
        </form>
      )
    }
  }

class Filter1 extends Component {
    // Create a group of form controls with default values.
    constructor(props) {
        super(props)
        this.state = {
          filterText: '',
          favourites: []
        }
      }
      
      // update filterText in state when user types 
      filterUpdate(value) {
        this.setState({
          filterText: value
        });
      }
      
      // add clicked name ID to the favourites array
      addFavourite(id) {
        const newSet = this.state.favourites.concat([id])
        this.setState({
          favourites: newSet
        })
      }
      
      // remove ID from the favourites array
      deleteFavourite(id) {
        const { favourites } = this.state
        const newList = [
          ...favourites.slice(0, id),
          ...favourites.slice(id + 1)
          ]
        this.setState({
          favourites: newList
        })
      }
      
      render() {
        this.props = {data : PEOPLE};
        // sag: hard coded data used for props
        const hasSearch = this.state.filterText.length > 0
        return ( 
          <div>
            <header>
              <Search
                filterVal={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              /> 
            </header>
            <main>
            
              <ShortList 
                data={this.props.data} 
                favourites={this.state.favourites}
                deleteFavourite={this.deleteFavourite.bind(this)}
              />
    
              <NamesList 
                data={this.props.data}
                filter={this.state.filterText}
                favourites={this.state.favourites}
                addFavourite={this.addFavourite.bind(this)}
              />
              {/* 
                Show only if user has typed in search.
                To reset the input field, we pass an 
                empty value to the filterUpdate method
              */}
              {hasSearch &&
                <button
                  onClick={this.filterUpdate.bind(this, '')}>
                  Clear Search
                </button>
              }
            </main>
          </div>
        )
      }
};

export default Filter1;

