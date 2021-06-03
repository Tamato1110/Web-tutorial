#!/usr/bin/env node

const config = require('./config')
const mysql = require('mysql')

const connection = mysql.createConnection(config.mysql)

connection.connect(err => {
  if (err) {
    console.log('fail to connect:', err)
    process.exit()
  }
})

// Step 2 code goes here
/* Step 2:
 * edit [some query] to an appropriate value
 * you can google the syntax easily
 * 將 [some query] 修改成合適的值
 * 你可以輕鬆在網路上找到語法
 */
// create tables
connection.query('CREATE TABLE IF NOT EXISTS student (id VARCHAR(10), name VARCHAR(30), cid VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS score (id VARCHAR(10), score VARCHAR(10))')

// list tables
connection.query('[some query] TABLES', function (error, results, fields) {
  if (error) throw error
  console.log('There are tables: ', results)
})

// Step 3 code goes here
/* Step 3:
 * edit [your id], [your name], [your course] and [your score] to appropriate values
 * once succeeded, remember to commet this code snippet to prevent multiple insertions
 * 將 [your id], [your name], [your course] 以及 [your score] 修改成合適的值
 * 成功後，成功之後，可以將這一段註解掉，避免重複插入資料
 */
connection.query('INSERT INTO student (id, name, cid) VALUES ([your id], [your name], "W0001"), ("A12345679", "StudentB", "M0001")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO course (id, name) VALUES ("W0001", "Web Programming"), ("M0001", "Machine Learning"), [your course]', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO score (id, score) VALUES ([your id], [your score]), ("A123456789", 90)', (err, result) => {
  if (err) console.log('fail to insert:', err)
})

// Step 4 code goes here
/* Step 4:
 * edit [some query] and [your name] to appropriate values
 * 將 [some query] 以及 [your name] 修改成合適的值
 */
connection.query('[some query] id FROM student WHERE name LIKE [your name]', function (error, results, fields) {
  if (error) throw error
  console.log('My id is: ', results)
})

// Step 5 code goes here
/* Step 5:
 * edit [some query]s to appropriate values, which are different
 * hint: try google 'join'
 * 將 [some query]s 修改成合適的值，注意兩個要填的東西是不一樣的
 * 提供：試試搜尋 'join'
 */
const sql = `
  SELECT student.id, student.name FROM student
  [some query] course [some query] course.id = student.cid
  WHERE course.name LIKE 'Web Programming'`
connection.query(sql, (err, rows, fields) => {
  if (err) console.log('fail to query: ', err)
  else console.log(rows)
})

connection.end()
