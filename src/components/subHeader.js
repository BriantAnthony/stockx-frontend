import React, {Component} from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Modal, Row } from 'react-bootstrap';

const yeezy = require('../assets/yeezy.jpg');

class SubHeader extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      showModal: false,
      form: {
        type: '',
        brand: '',
        style: '',
        model: '',
        size: '',
        upcId: 11000,
        img: ''
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }

  // Closes and opens modal
  toggleModal() {
    if(this.state.showModal) {
      this.setState({
        showModal: false
      });
    } else {
      this.setState({
        showModal: true
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

  // Submits form and adds product to array
  submitProduct() {
    // Clears default e
    this.setState({
      error: null
    });
    // Needs tighter validation
    if(this.state.form) {
      this.setState({
        form: {
          upcId: this.state.upcId + 1
        },
        showModal: false
      });
      this.props.add(this.state.form);
      console.log('form: ', this.state.form);
    } else {
      this.setState({
        error: 'You cannot submit an empty form. Please try again.'
      });
    }
  }

  render() {
    const length = this.props.data || 0;
    return (
      <div className="subHeader">
        <div>
          <h1 className="App-title-alt">Shoes ({length})</h1>
        </div>
        <div>
          <a className="brandLink" onClick={() => this.toggleModal()}>
            <i className="fas fa-plus-circle"></i>&nbsp;New Shoe
          </a>
        </div>
        <Modal show={this.state.showModal} onHide={() => this.toggleModal()}>
          <Modal.Header closeButton bsClass="modal-header">
            <Modal.Title>New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Enter details for your new product.
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
                    <ControlLabel>Model</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Yeezy Boost 350"
                      value={this.state.form.model}
                      onChange={(e) => this.handleChange(e, 'model')}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <ControlLabel>Style</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="V2 Butter"
                      value={this.state.form.style}
                      onChange={(e) => this.handleChange(e, 'style')}
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
      </div>
    );
  }
}

export default SubHeader;
