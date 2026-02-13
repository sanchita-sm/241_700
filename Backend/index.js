//ทำการ import โมดูล http
/*const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server
const requestListener = function (req,res) {
    res.writeHead(200);
    res.end('Hello, World! This is my server.');
}
//run server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 8000;

let users = [];
let counter = 1;

/**
 GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
 POST /users - เพิ่มผู้ใช้ใหม่
 GET /users/:id - ดึงข้อมูลผู้ใช้ตาม ID
 PUT /users/:id - แก้ไขข้อมูลผู้ใช้ตาม ID ที่บันทึก
 DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก
*/

// path: = GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

// path: = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
});

// path: = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;

    // หา user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    // อัพเดทข้อมูล users
    if (updatedUser.firstname) {
        users[selectedIndex].firstname = updatedUser.firstname;
    }
    if (updatedUser.lastname) {
        users[selectedIndex].lastname = updatedUser.lastname;
    }

    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdate: selectedIndex
        }
    });

    // ส่ง users ที่อัพเดทแล้วกลับไป

})

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    // หา index ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);
    
    // ลบ user ออกจาก users
    users.splice(selectedIndex, 1);

    res.json({
        message: 'User deleted successfully',
        indexDelete : selectedIndex
    });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});