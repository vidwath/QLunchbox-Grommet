import React, { Component } from "react";
import NavHeader from "./commons/headerBeforeLogin";
import Login from "grommet/components/icons/base/Login";
import TrashIcon from "grommet/components/icons/base/Trash";
import { Card, Anchor, Box, Columns } from "grommet";
import { browserHistory } from "react-router";
import Image from "grommet/components/Image";
import Layer from "grommet/components/Layer";
import Header from "grommet/components/Header";
import Headline from "grommet/components/Headline";
import Menu from "grommet/components/Menu";
import Title from "grommet/components/Title";
import Split from "grommet/components/Split";
import { connect } from "react-redux";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import FormFields from "grommet/components/FormFields";
import { Redirect } from "react-router-dom";
import FormCheckmark from "grommet/components/icons/base/FormCheckmark";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import TextInput from "grommet/components/TextInput";
import Table from "grommet/components/Table";
import TableRow from "grommet/components/TableRow";
import PasswordInput from "grommet/components/PasswordInput";
import Notification from "grommet/components/Notification";
import DateTime from "grommet/components/DateTime";
import CheckBox from "grommet/components/CheckBox";
import NumberInput from "grommet/components/NumberInput";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";
import { getItems, createItem, deleteItem } from "../actions";

class Home extends Component {
  onFiledChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      price: "",
      category: "",
      quantity: "",
      source: "",
      msg: false,
      deleteModalActive: false
    };
  }

  addItem(e) {
    e.preventDefault();
    console.log("addItem");

    const params = {
      image:
        "http://demo.webulous.in/restaurant/wp-content/uploads/sites/5/2014/06/chennaicitypage_03art1_gt819dhqj119nxg_p3_meals.jpg",
      name: this.state.itemName,
      price: this.state.price,
      category: this.state.category,
      quantity: this.state.quantity,
      source: this.state.source
    };
    // debugger;
    console.log("params", params);
    this.props.createItem(params);
  }

  componentWillMount() {
    this.props.getItems();
  }

  deleteItemModal(e, singleItem) {
    // debugger;
    this.setState({ deleteModalActive: true, deletableItem:e.target.parentElement.parentElement.parentElement.parentElement });
    this.setState({ singleitem: singleItem });
  }

  _onItemModalClose() {
    console.log("Item modal inactive");
    this.setState({ deleteModalActive: false });
  }

  closeItemModal() {
    console.log("Item modal inactive");
    this.setState({ deleteModalActive: false });
  }

  deleteItemById(id) {
    this.setState({ deleteModalActive: false });
    this.state.deletableItem.remove();
    console.log('deleteItem', id);
    this.props.deleteItem(id);
    console.log(document.getElementById(id));
  }

  render() {
    let deleteItemLayer = null;
    if (this.state.deleteModalActive) {
      deleteItemLayer = (
        <Layer
          closer={true}
          overlayClose={true}
          onClose={e => this._onItemModalClose()}
          align="top"
          id="{this.state.singleitem.id}"
        >
          <Headline size="small">
            Delete Item
          </Headline>
          <Paragraph size="medium">
            Are you sure want to delete this item:&nbsp;<b>{this.state.singleitem.name}</b> ?
          </Paragraph>
          <Footer pad={{ vertical: "medium" }}>
            <Button label="Cancel" type="submit" primary={true} onClick={e => this.closeItemModal()} />&nbsp;&nbsp;&nbsp;
            <Button label="Yes" type="submit" secondary={true} onClick={e => this.deleteItemById(this.state.singleitem.id)} />
          </Footer>
        </Layer>
      );
    }

    return (
      <div>
        <Header size="large" pad={{ horizontal: "medium", vertical: "medium" }}>
          <Title>
            <Anchor href="/">Welcome</Anchor>
          </Title>
          <Box flex={true} justify="end" direction="row" responsive={false}>
            <Menu icon={<Login />} dropAlign={{ right: "right" }}>
              <Anchor href="/">Logout</Anchor>
            </Menu>
          </Box>
        </Header>
        <Split separator={false}>
          <Box
            direction="row"
            full="horizontal"
            wrap={true}
            justify="center"
            align="center"
            pad="medium"
            colorIndex="neutral-4-a"
          >
            <Table scrollable={false} responsive={false}>
              <thead>
                <tr>
                  <th>sl.no</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Item Source</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.show_item
                  ? this.props.show_item.map(singleItem => (
                      <TableRow key={singleItem.id}>
                        <td>{singleItem.id}</td>
                        <td>{singleItem.name}</td>
                        <td>{singleItem.price}</td>
                        <td>{singleItem.price}</td>
                        <td>
                          <a onClick={e => this.deleteItemModal(e, singleItem)}>
                            <TrashIcon />
                          </a>
                        </td>
                      </TableRow>
                    ))
                  : ""}
              </tbody>
            </Table>
          </Box>
          <Box
            colorIndex="light-2"
            justify="center"
            align="center"
            pad="medium"
          >
            <Form onSubmit={e => this.addItem(e)}>
              <FormFields>
                <fieldset>
                  <Heading tag="h3" margin="none" strong={true} align="center">
                    Create Item
                  </Heading>
                  <FormField label="Name">
                    <TextInput
                      id="firstName"
                      name="itemName"
                      onDOMChange={e => this.onFiledChange(e)}
                      value={this.state.itemName}
                      required
                    />
                  </FormField>
                  <FormField label="Price">
                    <TextInput
                      id="lastName"
                      name="price"
                      onDOMChange={e => this.onFiledChange(e)}
                      value={this.state.price}
                      required
                    />
                  </FormField>
                  <FormField label="Category">
                    <TextInput
                      id="category"
                      name="category"
                      onDOMChange={e => this.onFiledChange(e)}
                      value={this.state.Category}
                      required
                    />
                  </FormField>
                  <FormField label="Quantity">
                    <TextInput
                      id="Quantity"
                      name="quantity"
                      onDOMChange={e => this.onFiledChange(e)}
                      value={this.state.quantity}
                      required
                    />
                  </FormField>
                  <FormField label="Source">
                    <TextInput
                      id="Source"
                      name="source"
                      onDOMChange={e => this.onFiledChange(e)}
                      value={this.state.source}
                      required
                    />
                  </FormField>
                </fieldset>
              </FormFields>
              <Footer pad={{ vertical: "medium" }}>
                <Button label="Submit" type="submit" primary={true} />
              </Footer>
            </Form>
          </Box>
        </Split>
        {deleteItemLayer}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { show_item } = state.item;
  return { show_item };
};

export default connect(mapStateToProps, { getItems, createItem, deleteItem })(Home);