// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions')
const firebase = require('firebase')
const app = require('express')()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
// ความลับที่ทำให้เราปลุก Server.js มารับ state ไปแสดงผลได้
const ServerApp = React.createFactory(
  require('./build/server.bundle.js').default
)
const template = require('./template')
// จะเห็นได้ว่าในแอพพลิเคชันของเรา ไม่ต้องมีการกำหนด config ของ Firebase เลย
// เราสามารถเข้าถึง config ได้ผ่าน Cound Functions ได้โดยตรง
// ทำไมหนะหรอ? ก็บริการนี้มันอยู่ฝั่ง Server อยู่แล้วไงละ มันจึงรู้ config ของตัวมันเองอยู่แล้ว
const appConfig = functions.config().firebase
const database = require('./firebase-database')
database.initializeApp(appConfig)
function renderApplication(url, res, initialState) {
  const html = ReactDOMServer.renderToString(
    // ด้วยการโยน initialState เข้าไปเป็น state ของแอพพลิเคชัน
    ServerApp({ url: url, context: {}, initialState, appConfig })
  )
  // แล้วจึงจัดการสร้าง HTML ตาม template ที่ได้เตรียมไว้
  const templatedHtml = template({
    body: html,
    initialState: JSON.stringify(initialState),
  })
  res.send(templatedHtml)
}
app.get('/favicon.ico', function (req, res) {
  res.send(204)
})
// จัดการ Route ที่มี path เป็น /books หรือ /books/:id
app.get('/books/:bookId?', (req, res) => {
  res.set('Cache-Control', 'public, max-age=60, s-maxage=180')
  if (req.params.bookId) {
    database.getBookById(req.params.bookId).then((resp) => {
      renderApplication(req.url, res, resp)
    })
  } else {
    database.getBooks().then((resp) => {
      renderApplication(req.url, res, resp)
    })
  }
})
// ใช้ Cloud Functions เพื่อคุม Request ที่เข้ามา
exports.app = functions.https.onRequest(app)