// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     ["nativewind/babel"],
//     'react-native-reanimated/plugin',
//   ]
// };


const presets = ['module:metro-react-native-babel-preset']



module.exports = {
  presets,
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
    ["nativewind/babel"],
    [
      "module:react-native-dotenv",
      {
          moduleName: "@env",
          path: ".env.development",
      },
  ],
  ]
}
