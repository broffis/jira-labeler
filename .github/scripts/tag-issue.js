const dotenv = require("dotenv");
dotenv.config();

// const auth = `${process.env.JIRA_USER}:${process.env.JIRA_KEY}`;

module.exports = async ({ fetch }, { issueKey, label, jiraInstance }) => {
  const body = {
    update: {
      labels: [{ add: label }],
    },
  };

  // console.log({ auth });
  console.log({
    issueKey,
    label,
    jiraInstance,
  });

  // const authBuffer = Buffer.from(auth).toString("base64");

  const response = await fetch(
    `https://${jiraInstance}.atlassian.net/rest/api/2/issue/${issueKey}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `${process.env.JIRA_USER}:${process.env.JIRA_KEY}`
        ).toString("base64")}`,
        // Authorization: `Basic ${authBuffer}`,
        // Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(body),
    }
  );

  if (response.status !== 204) {
    throw new Error(
      `Received unexpected status code ${response.status} ${response.statusText}`
    );
  }
  console.log(`Response: ${response.status} ${response.statusText}`);
  // .then((response) => {
  //   console.log(`Response: ${response.status} ${response.statusText}`);
  //   return response.text();
  // })
  // .then((text) => console.log(text))
  // .catch((err) => console.error(err));
};
