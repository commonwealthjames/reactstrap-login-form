import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

export function configureAmplify() {
  Amplify.configure(awsconfig);
  console.log(`%c[Amplify Configured]`, "color: green");
}

function init() {
  configureAmplify();
}

export default init;
