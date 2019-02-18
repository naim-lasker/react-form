import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountry: [],
      name: "",
      country: "",
      profession: "",
      birthday: "",
      checked: false,
      countryValue: ""
    };

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentWillMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        this.setState({
          allCountry: data
        });
      });
  }

  render() {
    const countryList = this.state.allCountry.map((country, index) => {
      return (
        <option key={index} value={country.name}>
          {country.name}
        </option>
      );
    });

    const professionContent = this.state.checked ? (
      <FormGroup>
        <Label for="name">as a</Label>
        <Input
          type="text"
          name="profession"
          value={this.state.profession}
          onChange={this.onChange}
          placeholder="Your profession here"
        />
      </FormGroup>
    ) : null;

    const professionText =
      this.state.checked === true ? (
        <p>
          I work as a <span className="text-success">{this.state.profession}</span>
        </p>
      ) : (
          ""
        );

    return (
      <div>
        <h3 className="mb-4">Personal Info</h3>
        <Form>
          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="name">I am</Label>
              </Col>
              <Col xs="3">
                <Input
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.onChange}
                  placeholder="Your name here"
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="country">from(country)</Label>
              </Col>
              <Col xs="3">
                <Input
                  type="select"
                  value={this.state.countryValue}
                  onChange={this.onChange}
                  name="countryValue"
                >
                  {countryList}
                </Input>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="">
            <Row>
              <Col xs="2">
                <Label>
                  I work
                  <Input
                    className="ml-30"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                  />
                </Label>
              </Col>

              <Col xs="3">{professionContent}</Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="name">and my birthday is</Label>
              </Col>
              <Col xs="3">
                <Input
                  type="date"
                  name="birthday"
                  value={this.state.birthday}
                  onChange={this.onChange}
                  placeholder="Your name here"
                />
              </Col>
            </Row>
          </FormGroup>
        </Form>

        <div className="mt-5">
          <h3>Output</h3>
          <div>
            <p>
              My name is <span className="text-success">{this.state.name}</span>
            </p>
            <p>
              I am from <span className="text-success">{this.state.countryValue}</span>
            </p>
            {professionText}
            <p>
              My birthday is on <span className="text-success">{this.state.birthday}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
