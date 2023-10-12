const parseBranch = (branch, jiraPrefix) => {
    const regex = new RegExp(`^${jiraPrefix}-\\d+`, "i");
    if (!regex.exec(branch)) {
        throw new Error("Branch name does not match Jira ticket pattern");
    }
    const [issueNumber] = branch.match(regex);
    console.log({ issueNumber });
};
let commit = "ABC-1234-branch-name - feat(something): some message";
parseBranch(commit, "ABC");
commit = "ABC-1234 - feat(something): some message";
parseBranch(commit, "EFD");
