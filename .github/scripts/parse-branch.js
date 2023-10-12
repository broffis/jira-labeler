module.exports = ({ core }, { commit, jiraPrefix }) => {
  const regex = new RegExp(`^${jiraPrefix}-\\d+`, "i");
  const match = commit.match(regex);

  if (!match) {
    throw new Error("Commit does not match Jira ticket pattern");
  }

  const [issueNumber] = commit.match(regex);
  core.setOutput("issueNumber", issueNumber);
  console.log({ issueNumber });
};
