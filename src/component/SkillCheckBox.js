import React from 'react'
import { Col, FormGroup, Label, Input } from "reactstrap";

export const SkillCheckBox = props => {
  return (
    <Col xs="3">
      <FormGroup className="pl-0 d-inline-block">
        <Label>
          <Input
            key={props.id} onChange={props.handleSkillElement} type="checkbox" checked={props.isChecked} value={props.value}
          />
          {props.value}
        </Label>
      </FormGroup>
    </Col>
  )
}


export default SkillCheckBox