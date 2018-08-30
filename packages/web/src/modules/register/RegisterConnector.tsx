import * as React from "react";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (v: any) => {
    console.log(v);
    return null;
  };
  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}
