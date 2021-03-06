const awsconfig = {
  aws_project_region: process.env.REACT_APP_REGION,
  aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_USERPOOLID,
  aws_user_pools_web_client_id: process.env.REACT_APP_USERPOOLWEBCLIENTID,
  oauth: {},
  aws_cloud_logic_custom: [],
};

export default awsconfig;
