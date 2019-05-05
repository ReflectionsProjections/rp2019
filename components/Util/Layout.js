import React, { Component } from 'react';

import ReactGA from 'react-ga';
import CustomHead from './CustomHead';
import Nav from '../Nav';

class Layout extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-134729747-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.onscroll = function() {
      if (document.body.scrollTop > 2050 || document.documentElement.scrollTop > 2050) {
        document.getElementById("topBtn").style.display = "block";
      } else {
        document.getElementById("topBtn").style.display = "none";
      }
    };
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <CustomHead />
        <div>
          <Nav />
          {children}
        </div>
      </div>
    );
  }
}
export default Layout;
