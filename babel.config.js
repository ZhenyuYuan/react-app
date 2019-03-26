// module.exports = {
//     presets: [
//         [
//             'babel-preset-env',
//             {
//                 targets: {
//                     node: 'current',
//                 },
//             },
//         ],
//     ],
//     plugins: ["transform-es2015-modules-commonjs"]
// };
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ["transform-es2015-modules-commonjs"]
};