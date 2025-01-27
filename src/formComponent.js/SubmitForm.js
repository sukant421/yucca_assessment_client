import React from "react";
import { Button } from "reactstrap";
import { useFormStatus } from "react-dom";
import axios from "axios";

export default function SubmitForm() {
  const { pending, data } = useFormStatus();
  // data?.forEach((data, key) => console.log(key, data));
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
