import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

class EducationalResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSemGPA: 0,
      secondSemGPA: 0,
      thirdSemGPA: 0,
      fourthSemGPA: 0,
      averageGPA: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    let averageGPA =
      (parseFloat(this.state.firstSemGPA) +
        parseFloat(this.state.secondSemGPA) +
        parseFloat(this.state.thirdSemGPA) +
        parseFloat(this.state.fourthSemGPA)) /
      4;
    if (isNaN(averageGPA)) {
      averageGPA = 0;
    }

    return (
      <div className="mt-20">
        <h3 className="mb-4">Educational Result</h3>
        <Form>
          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="name">GPA (1st Semeter)</Label>
              </Col>
              <Col xs="3">
                <Input
                  className="common-input"
                  type="number"
                  value={this.state.firstSemGPA}
                  name="firstSemGPA"
                  onChange={this.onChange}
                  placeholder="GPA (1st Semeter)"
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="name">GPA (2nd Semeter)</Label>
              </Col>
              <Col xs="3">
                <Input
                  className="common-input"
                  type="number"
                  value={this.state.secondSemGPA}
                  name="secondSemGPA"
                  onChange={this.onChange}
                  placeholder="GPA (2nd Semeter)"
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="name">GPA (3rd Semeter)</Label>
              </Col>
              <Col xs="3">
                <Input
                  className="common-input"
                  type="number"
                  value={this.state.thirdSemGPA}
                  name="thirdSemGPA"
                  onChange={this.onChange}
                  placeholder="GPA (3rd Semeter)"
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="name">GPA (4th Semeter)</Label>
              </Col>
              <Col xs="3">
                <Input
                  className="common-input"
                  type="number"
                  value={this.state.fourthSemGPA}
                  name="fourthSemGPA"
                  onChange={this.onChange}
                  placeholder="GPA (4th Semeter)"
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs="2">
                <Label for="name">Average GPA</Label>
              </Col>
              <Col xs="3">
                <Input
                  readOnly
                  className="common-input"
                  type="text"
                  value={averageGPA.toFixed(2)}
                  name="averageGPA"
                  onChange={this.onChange}
                  placeholder="Average GPA"
                />
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default EducationalResult;
