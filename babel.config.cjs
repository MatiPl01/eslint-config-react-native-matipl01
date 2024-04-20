module.exports = {
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.js'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          'eslint-config-react-native-matipl01': './index.js'
        }
      }
    ]
  ]
}
