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
const mysql = require('mysql2/promise')
const app = express();

app.use(bodyParser.json());

const port = 8000;

/**
//การเขียนแบบที่ 1
app.get('/testdb', (req,res) => {
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    }).then((conn) => {
        conn
        .query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        }).catch((err) => {
            res.json({ error: err.message});
        });
    })
})
*/
let conn = null;
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
}

//path: = GET /users/:id สำหรับดึงข้อมูล users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})

//path: = POST /users/:id สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: 'User added successfully',
            data: results[0]
        });
    } catch (error) {
        console.error('Error inserting user:' ,error);
        res.status(500).json({ message: 'Error adding user'});
    }
})

//path: = GET /users/:id สำหรับดึงข้อมูล user ตาม id
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if (results[0].length === 0) {
            throw { statusCode : 404, message: 'User not found'};
        }
        res.json(results[0][0]);
    } catch (error) {
        console.error('Error fetching user:' ,error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user'});
    }
})

//path: = PUT /users/:id สำหรับอัพเดทข้อมูล user ตาม id
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updateUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser,id]);
        res.json({
            message: 'User updated successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('Error updating user:' ,error);
        res.status(500).json({ message: 'Error updating user'});
    }
})

//path: = DELETE /users/:id สำหรับลบข้อมูล user ตาม id
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('DELETE FROM users WHERE id = ?', id);
        res.json({
            message: 'User deleted successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('Error deleting user:' ,error);
        res.status(500).json({ message: 'Error deleting user'});
    }
})

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});


/**let users = [];
let counter = 1;


 GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
 POST /users - เพิ่มผู้ใช้ใหม่
 GET /users/:id - ดึงข้อมูลผู้ใช้ตาม ID
 PUT /users/:id - แก้ไขข้อมูลผู้ใช้ตาม ID ที่บันทึก
 DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก


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

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});
*/