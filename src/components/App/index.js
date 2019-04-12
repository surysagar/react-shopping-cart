import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import { render } from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import Counter from '../Counter';
import Select from '../select';
import Filter1 from '../Filter1';
import { NavBar } from '../../shared/NavBar';
import { HomeView } from '../../views/Home';
import { CatalogView, ProductView } from '../../views/Catalog';
import { NestedView } from '../../views/Nested';
import TableGeneric from '../tableGeneric';


class App extends Component {
  render() {
    return (      
      <React.Fragment>
        <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeView} />
          <Route path="/another" component={() => <div>yo!</div>} />
          <Route path="/catalog" component={CatalogView} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/nested" component={NestedView} />
        </div>
        </BrowserRouter>
        {/* sag: The problem with div is that you don't always want a wrapper element. 
        Wrapper elements have a meaning and usually you need additional styles 
        for that meaning to be removed. <Fragment> is just syntactic sugar 
          that is not rendered. There are situations when creating a wrapper 
          is very difficult, for example in SVG where <div> cannot be used 
            and <group> is not always what you want. */}
        {/* <GithubCorner /> */}
        <main>
          {/* <Counter />
          <Select />
          <Filter1 /> */}
          <TableGeneric />
          {/* <Filter />
          <Shelf /> */}
          </main>
        <FloatCart />
      </React.Fragment>
    );
  }
}

export default App;
