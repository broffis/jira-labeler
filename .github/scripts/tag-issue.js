const dotenv = require("dotenv");
dotenv.config();

// const auth = `${process.env.JIRA_USER}:${process.env.JIRA_KEY}`;

module.exports = async ({ fetch }, { issueKey, label, jiraInstance }) => {
  const body = {
    update: {
      labels: [{ add: label }],
    },
  };

  const authBuffer = Buffer.from(
    `${process.env.JIRA_USER}:${process.env.JIRA_KEY}`
  ).toString("base64");

  let response;

  try {
    response = await fetch(
      `https://${jiraInstance}.atlassian.net/rest/api/2/issue/${issueKey}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${authBuffer}`,
        },
        body: JSON.stringify(body),
      }
    );
  } catch (err) {
    throw new Error("Failed to fetch");
  }

  if (response.status !== 204) {
    throw new Error(
      `Received unexpected status code ${response.status} ${response.statusText}`
    );
  }
  console.log(`Response: ${response.status} ${response.statusText}`);
};
