// const fetch = require("node-fetch");
// import fetch from "node-fetch";

module.exports = (stuff, { issueKey, label, jiraInstance, auth }) => {
  // const body = {
  //   update: {
  //     labels: [{ add: label }],
  //   },
  // };

  console.log(stuff);

  // const authBuffer = Buffer.from(auth).toString("base64");

  // fetch(`https://${jiraInstance}.atlassian.net/rest/api/2/issue/${issueKey}`, {
  //   method: "PUT",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: `Basic ${authBuffer}`,
  //     // Authorization: `Basic ${auth}`,
  //   },
  //   body: JSON.stringify(body),
  // })
  //   .then((response) => {
  //     console.log(`Response: ${response.status} ${response.statusText}`);
  //     return response.text();
  //   })
  //   .then((text) => console.log(text))
  //   .catch((err) => console.error(err));
};
