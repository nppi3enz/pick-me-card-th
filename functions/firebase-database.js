const firebase = global.firebase || require('firebase')
// ส่วนนี้ใช้ init app ของเรา
// จดๆไว้ก่อนว่าอยู่ในไฟล์นี้ เดียวเราจะมาเรียกใช้ภายหลัง
function initializeApp(config) {
  if (firebase.apps.length === 0) firebase.initializeApp(config)
}
function getBooks() {
  return firebase
    .database()
    .ref('/books')
    .orderByChild('title')
    .once('value')
    .then((snapshot) => {
      return { books: snapshot.val() }
    })
}
function getBookById(id) {
  return firebase
    .database()
    .ref(`/books/${id}`)
    .orderByChild('title')
    .once('value')
    .then((snapshot) => {
      return { currentBook: snapshot.val() }
    })
}
module.exports = {
  initializeApp,
  getBooks,
  getBookById,
}