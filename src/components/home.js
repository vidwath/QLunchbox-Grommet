import React, { Component } from 'react';
import NavHeader from './commons/headerBeforeLogin';
import {Card, Anchor, Box, Columns} from 'grommet';
import { browserHistory } from 'react-router';
import Image from "grommet/components/Image";
import Heading from "grommet/components/Heading";
import { getItems } from '../actions'
import { connect } from 'react-redux';



const itemsList = [
  {
    id: "1",
    name: "Full Meals"
  },
  {
    id: "2",
    name: "Chapathi"
  },
  {
    id: "3",
    name: "Parota"
  },
  {
    id: "4",
    name: "Parota"
  },
  {
    id: "5",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  },
  {
    id: "5",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  },
  {
    id: "6",
    name: "Parota"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.getItems();
  }


  render() {
    debugger
    // const displayFoodItems = show_item.map(singleItem => (
      // <Box
      //   align="center"
      //   pad="medium"
      //   margin="small"
      //   colorIndex="light-2"
      //   basis="1/4"
      // >
      //   <Image
      //     src="./food-item-1.jpg"
      //     caption={singleItem.name}
      //     size="medium"
      //     full={false}
      //   />
      //   <Heading tag="h5">{singleItem.id}</Heading>
      //   <Heading tag="h5">Price: &#8377;120</Heading>
      //   <Heading tag="h5">Paradise Hotel</Heading>
      // </Box>
    // ));
    return(
      <div>
        <NavHeader/><br/>
        <Box direction="row" full="horizontal" wrap={true}>
            {
                 this.props.show_item ? this.props.show_item.map(singleItem => (
      <Box
        align="center"
        pad="medium"
        margin="small"
        colorIndex="light-2"
        basis="1/4"
      >
        <Image
          src={singleItem.image}
          caption={singleItem.name}
          size="medium"
          full={false}
        />
        <Heading tag="h5">{singleItem.id}</Heading>
        <Heading tag="h5">Price: {singleItem.price}</Heading>
        <Heading tag="h5">{singleItem.hotel}</Heading>
      </Box>
    )) : ''
            }
          </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { show_item } = state.item;
  return { show_item };
}

export default connect(mapStateToProps, { getItems }) (Home);