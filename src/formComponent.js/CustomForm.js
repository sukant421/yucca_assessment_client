import React from "react";
import { Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
// import SubmitForm from "./SubmitForm";
import { useFormStatus } from "react-dom";
import axios from "axios";

function SubmitForm() {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        style={{
          borderRadius: 0,
        }}
        disabled={pending}
      >
        {pending ? "Submitting..." : "Fahrzeug optimieren"}
      </Button>
    </div>
  );
}

export default function CustomForm({ showAllFields = true, headerText = "" }) {
  const callApi = async (data) => {
    console.log("for file data", data.get("file"));
    let formData = {};
    if (data.get("file")) {
      formData = {
        ...formData,
        file: data.get("file"),
      };
    }
    data?.forEach((val, key) => {
      formData[key] = val;
    });
    const response = await axios.post("http://localhost:5000/upload", {
      formData: JSON.stringify(formData),
    });
    console.log(response.data);
  };
  return (
    <div style={{ width: "45%", textAlign: "left" }}>
      <h4 style={{ marginBottom: "2rem" }}>
        <u>{headerText}</u>
      </h4>
      <Form action={callApi}>
        {showAllFields && (
          <div>
            <FormGroup className="padding-vertical-1" row>
              <Label for="exampleEmail" size="sm" sm={3}>
                MAN-Code*
              </Label>
              <Col sm={9}>
                <Input
                  style={{ borderRadius: 0, borderColor: "black" }}
                  id="exampleEmail"
                  name="ManCode"
                  placeholder="lg"
                  type="text"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup className="padding-vertical-1" row>
              <Label for="exampleEmail2" sm={3}>
                FIN long/sort
              </Label>
              <Col sm={9}>
                <Input
                  style={{ borderRadius: 0, borderColor: "black" }}
                  id="exampleEmail2"
                  name="fin"
                  placeholder="default"
                  type="Fin"
                />
              </Col>
            </FormGroup>
          </div>
        )}

        <FormGroup className="padding-vertical-1" row>
          <Label for="exampleEmail2" sm={3}>
            {showAllFields ? "eConsulting ID" : "eScore Report*"}
          </Label>
          <Col sm={9}>
            <Input
              style={{ borderRadius: 0, borderColor: "black" }}
              id="exampleEmail2"
              name={showAllFields ? "consultingId" : "file"}
              placeholder="sdfg"
              type={showAllFields ? "text" : "file"}
            />
          </Col>
        </FormGroup>
        <div style={{ textAlign: "right" }}>
          <SubmitForm />
        </div>
      </Form>
    </div>
  );
}
