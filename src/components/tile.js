import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Modal, Row } from 'react-bootstrap';
import Product from './product';

// Needs to be a stateful component for unique data per tile
class Tile extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      showOptions: false,
      shoe: null,
      form: {}
    };
    this.renderModal = this.renderModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }

  showOptions() {
    this.setState({
      showOptions: true
    });
  }

  hideOptions() {
    if(this.state.showOptions) {
      this.setState({
        showOptions: false
      });
    }
  }

  // Opens Modal 
  openModal() {
    if(!this.state.showModal) {
      this.setState({showModal: true});
    }
  }

  // Closes Modal - done like this to workaround toggle ui bug
  closeModal() {
    if(this.state.showModal) {
      this.setState({
        showModal: false
      });
    }
  }

   // updates local form state with appropriate field name
   handleChange(e, field) {
    this.setState({ 
      form: {
        ...this.state.form,
        [field]: e.target.value
      } 
    });
  }

  // saves the product to the grid slot
  submitProduct() {
    this.closeModal();
    this.setState({
      shoe: this.state.form
    });
  }
  // Renders modal - calling from tile makes bootstrap modal toggle glitch so enforceFocus is required
  renderModal() {
    return (
      <Modal show={this.state.showModal} enforceFocus={true} onHide={() => this.closeModal()}>
          <Modal.Header closeButton bsClass="modal-header">
            <Modal.Title>New Shoe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Enter details for your new shoe.
            </p>
            <Form>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Type</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={(e) => this.handleChange(e, 'type')} value={this.state.form.type}>
                  <option value="select">select</option>
                  <option value="sneaker">Sneaker</option>
                </FormControl>
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>Brand Name</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Adidas"
                      value={this.state.form.brand}
                      onChange={(e) => this.handleChange(e, 'brand')}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>Style</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Yeezy Boost 350"
                      value={this.state.form.style}
                      onChange={(e) => this.handleChange(e, 'style')}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>UPC ID</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="100123"
                      value={this.state.form.upcId}
                      onChange={(e) => this.handleChange(e, 'upcId')}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>Size</ControlLabel>
                    <FormControl
                      type="number"
                      placeholder="10"
                      value={this.state.form.size}
                      onChange={(e) => this.handleChange(e, 'size')}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <ControlLabel>Image Url</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="https://stockx-360.imgix.net"
                      value={this.state.form.img}
                      onChange={(e) => this.handleChange(e, 'img')}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Button type="button" className="brandBtn" onClick={() => this.submitProduct()}>Save Product</Button>
                <span className="errorTxt">{this.state.error}</span>
              </FormGroup>
            </Form>
          </Modal.Body>
        </Modal>
    );
  }

  render(){
    return this.state.shoe ? ( 
      <Button className="tile" onClick={() => this.showOptions()}>
        <Product prod={this.state.shoe} />
      </Button>
    ) : (
      <Button className="tile" onClick={() => this.openModal()}>
        <div>
          <i className="fas fa-plus"></i>
          <p className="gridTxt">New Shoe</p>
        </div>
        {this.renderModal()}
      </Button>
    );
  }
}

export default Tile;