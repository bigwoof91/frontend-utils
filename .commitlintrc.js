module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'scope-max-length': [2, 'always', 30],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 80],
    'subject-min-length': [2, 'always', 1],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '✨ feat',
        '🐛 fix',
        '🦄 refactor',
        '🧪 test',
        '📜 docs',
        '🏎️ perf',
        '🧰 tooling',
        '🧹 chore',
        '🚧 wip',
      ],
    ],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ',',
    },
    messages: {
      skip: ':skip',
      max: 'max %d chars',
      min: 'min %d chars',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: "The type of change you're committing",
        enum: {
          '✨ feat': {
            description: 'A feature',
            title: 'Features',
          },
          '🐛 fix': {
            description: 'A bug fix',
            title: 'Bug Fixes',
          },
          '🦄 refactor': {
            description:
              'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
          },
          '🧪 test': {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
          },
          '📜 docs': {
            description: 'Documentation only changes',
            title: 'Documentation',
          },
          '🏎️ perf': {
            description: 'A performance improvement',
            title: 'Performance Improvements',
          },
          '🧰 tooling': {
            description:
              'Changes that affect the project or workspaces (file system, dev env, ci/cd)',
            title: 'Internal Tooling',
          },
          '🧹 chore': {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
          },
          '🚧 wip': {
            title: 'Work in progress',
            description: 'A work in progress',
          },
        },
      },
      scope: {
        description:
          'The scope of this change (ex. browser, react:client)',
      },
      subject: {
        description:
          'A short imperative-tense description of the change',
      },
    },
  },
};
