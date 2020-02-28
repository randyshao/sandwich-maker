import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import SandwichMaker from './containers/SandwichMaker/SandwichMaker';
import Checkout from './containers/Checkout/Checkout';


class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
