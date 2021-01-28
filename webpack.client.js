const commonConfig = require('./webpack.common')
const path = require('path')
module.exports = Object.assign(
  {},
  {
    // Entry เริ่มที่ Client.js จดๆๆไว้ก่อน
    entry: './containers/Client.js',
    output: {
      // ผลลัพธืจากการ build จะอยู่ที่ public/assets/client.bundle.js
      // ที่ต้องอยู่ใต้ public เพราะเราจะให้เข้าถึงได้จาก browser นั่นเอง
      filename: 'client.bundle.js',
      path: path.resolve(__dirname, '../public/assets'),
    },
  },
  commonConfig
)