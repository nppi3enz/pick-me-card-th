const template = function (opts) {
    return `
    <!DOCTYLE html>
    <html>
      <head>
        <title>Books</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
      </head>
      <body>
        <div id="root">${opts.body}</div>
      </body>
      <script>
        <!-- ดูกันไปยาวๆ~ ว่าเราจะเอา state มาเซ็ตได้ยังไง -->
        window.__initialState = ${opts.initialState}
      </script>
      <!-- ภายใต้ Firebase เราสามารถอ้างอิงถึง lib เหล่านี้ได้ *สังเกตจะมี /__/ ขึ้นก่อน -->
      <script src="/__/firebase/4.1.1/firebase-app.js"></script>
      <script src="/__/firebase/4.1.1/firebase-database.js"></script>
      <script src="/__/firebase/init.js"></script>
      <!-- เรา build ได้ client.bundle.js ก็เอามาใส่ไว้ตรงนี้ โค้ดของเราจะได้ทำงานบน client ได้ -->
      <!-- มีเพียง request แรกที่มาหา server เท่านั้นที่เราจะทำ SSR -->
      <!-- หลังจากนั้นจะไม่ทำละ ผลักภาระให้ JavaScript ดำเนินการกับแอพต่อเอง เราจึงต้องมีไฟล์นี้ -->
      <script src='/assets/client.bundle.js'></script>
    </html>
    `
  }
  module.exports = template