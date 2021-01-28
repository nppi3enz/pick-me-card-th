const commonConfig = require('./webpack.common')
const path = require('path')
module.exports = Object.assign(
  {},
  {
    // เราต้องการนำไปใช้กับ node (cloud funtions)
    target: 'node',
    // Entry เริ่มที่ Server.js อันนี้ก็จดๆๆไว้ก่อน
    entry: './containers/Server.js',
    output: {
      filename: 'server.bundle.js',
      path: path.resolve(__dirname, '../functions/build'),
      // ซึ่งถ้าเป็น commonjs ทั่วไปจะเป็น export.<xxx>
      // แต่เราต้องการใช้กับ Node ที่มีลักษณะการใช้ module เป็น module.exports
      // เราจึงใช้ commonjs2
      // ไม่เข้าใจผ่านได้ครับ ตำรวจไม่จับ
      libraryTarget: 'commonjs2',
    },
  },
  commonConfig
)