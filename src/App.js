import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import StepZilla from "react-stepzilla";

import PersonalInfo from "./component/PersonalInfo";
import EducationalResult from "./component/EducationalResult";
import Skills from "./component/Skills";

class App extends Component {
  render() {
    const steps = [
      { name: "Step 3", component: <PersonalInfo /> },
      { name: "Step 1", component: <EducationalResult /> },
      { name: "Step 2", component: <Skills /> }
    ];

    return (
      <Container className="mt-5">
        <div className="step-progress">
          <StepZilla
            showSteps={false}
            steps={steps}
            nextButtonCls={"btn btn-next btn-success"}
            backButtonCls={"btn btn-prev btn-primary"}
          />
        </div>
      </Container>
    );
  }
}

export default App;
