import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { FaCloudUploadAlt } from 'react-icons/fa';
import SkillCheckBox from './SkillCheckBox'

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        { id: 1, value: "HTML", isChecked: false },
        { id: 2, value: "CSS", isChecked: false },
        { id: 3, value: "PHP", isChecked: false },
        { id: 4, value: "JavaScript", isChecked: false },
        { id: 5, value: "Python", isChecked: false },
        { id: 6, value: "Laravel", isChecked: false },
        { id: 7, value: "NodeJS", isChecked: false },
        { id: 8, value: "React", isChecked: false },
      ],
      uploadFileName: '',
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleSkillElement = this.handleSkillElement.bind(this);
  }


  handleImageUpload = e => {
    switch (e.target.name) {
      case 'selectedFile':
        if (e.target.files.length > 0) {
          this.setState({ uploadFileName: e.target.files[0].name });
        }
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSkillElement = (event) => {
    let skills = this.state.skills;
    skills.map((skill) => {
      if (skill.value === event.target.value)
        skill.isChecked = event.target.checked;
        return true;
    });
    this.setState({ skills: skills });
  }

  render() {
    const { uploadFileName } = this.state;

    const showSkills = this.state.skills.map((skill, index) => {
      return (
        <span key={index}>
          {(skill.isChecked === true ? (<span className="btn btn-success mr-3">{skill.value}</span>) : null)}
        </span>
      );
    });


    return (
      <div>
        <h3 className="mb-4">Skills</h3>
        <Form>
          <Row  className="ml-2">
            {
              this.state.skills.map((skill, index) => {
                return (
                  <SkillCheckBox key={index} handleSkillElement={this.handleSkillElement}  {...skill} />
                )
              })
            }
          </Row>
          
          <Row className="mt-3">
            {showSkills}
          </Row>

          <FormGroup className="mt-4">
            <Row>
              <Col xs="3">
                Upload File
              </Col>
              <Col xs="5">
                <Label htmlFor="uploadFile"> <FaCloudUploadAlt className="upload-icon text-primary mr-4" /></Label>
                <span>{(uploadFileName.length > 0) ? "File Name: " + uploadFileName : ""}</span>
                <Input
                  className="d-none"
                  id="uploadFile"
                  type="file"
                  name="selectedFile"
                  value={this.state.value}
                  onChange={this.handleImageUpload}
                  placeholder="Your name here"
                />
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Skills;
