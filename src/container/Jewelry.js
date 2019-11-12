import React from 'react';
import { API_URL } from '../api/constants';
import {  getFromServer } from '../api/api';
import ShownJewelry from '../component/ShownJewelry';


class Jewelry extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    this.setState({
      data:  await getFromServer(API_URL),
    })
  }

  render() {
    const { data } = this.state;
    return (
      <ShownJewelry 
        data={data}
      />
    );
}
}

export default Jewelry;