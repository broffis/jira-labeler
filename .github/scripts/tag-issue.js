// const fetchReq = require("node-fetch");
// const dotenv = require("dotenv");
// dotenv.config();

// const jiraInstance = "fergusonprod";
// const issueKey = "EFDC-7049";
// const label = "test";
// const body = {
//   update: {
//     labels: [{ add: label }],
//   },
// };
// const user = process.env.JIRA_USER;
// console.log(`User: ${user}`);
// const auth = Buffer.from(
//   `${process.env.JIRA_USER}:${process.env.JIRA_KEY}`
// ).toString("base64");
// const request = fetchReq(
//   `https://${jiraInstance}.atlassian.net/rest/api/2/issue/${issueKey}`,
//   {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Basic ${Buffer.from(
//         `${process.env.JIRA_USER}:${process.env.JIRA_KEY}`
//       ).toString("base64")}`,
//     },
//     body: JSON.stringify(body),
//   }
// )
//   .then((response) => {
//     console.log(`Response: ${response.status} ${response.statusText}`);
//     return response.text();
//   })
//   .then((text) => console.log(text))
//   .catch((err) => console.error(err));

module.exports = ({ issueKey, label, jiraInstance, auth }) => {
  const body = {
    update: {
      labels: [{ add: label }],
    },
  };

  const auth = Buffer.from(auth).toString("base64");

  fetch(`https://${jiraInstance}.atlassian.net/rest/api/2/issue/${issueKey}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      console.log(`Response: ${response.status} ${response.statusText}`);
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
};
