module.exports = {
  roots: [
    "<rootDir>/app"
  ],
  moduleDirectories: [
    "<rootDir>/node_modules",
    "node_modules"
  ],
  setupFiles: ["<rootDir>/app/setupEnzyme.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "((\\.|/)(spec))\\.(ts|tsx|jsx|js)?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/setupEnzyme.ts',
    '!app/index.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      functions: 100,
      statements: 100
    }
  },
  testResultsProcessor: 'jest-sonar-reporter',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: './coverage/',
        outputName: 'junit.xml',
        classNameTemplate: '{classname} - {title}',
        titleTemplate: '{classname} - {title}',
        ancestorSeparator: ' > ',
        usePathForSuiteName: 'true'
      }
    ]
  ]
}
