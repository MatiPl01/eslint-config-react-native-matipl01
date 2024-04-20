module.exports = {
  "plugins": [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          'eslint-config-react-native-matipl01': './index.js'
        },
        extensions: ['.ts', '.js'],
        root: ['./']
      }
    ]
  ],
  "presets": ["@babel/preset-env"]
}
