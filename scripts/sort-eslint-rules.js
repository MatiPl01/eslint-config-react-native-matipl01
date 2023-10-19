const fs = require("fs");
const path = require("path");

const ESLINT_CONFIG_PATH = path.resolve(__dirname, "../index.js");

function sortEslintRules() {
  // Load ESLint config
  const eslintConfig = require(ESLINT_CONFIG_PATH);

  const originalRules = eslintConfig.rules || {};

  // Sort rules
  const sortedRules = {};
  Object.keys(originalRules)
    .sort()
    .forEach((key) => {
      sortedRules[key] = originalRules[key];
    });

  // Update ESLint config
  eslintConfig.rules = sortedRules;

  // Save sorted ESLint config
  const content = `module.exports = ${JSON.stringify(eslintConfig, null, 2)}`;
  fs.writeFileSync(ESLINT_CONFIG_PATH, content);
}

try {
  sortEslintRules();
  console.log("🎉  Successfully sorted ESLint rules");
} catch (error) {
  console.error("🚨  Failed to sort ESLint rules:", error.message);
}
