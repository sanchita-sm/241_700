/*
// String = ตัวอักษร
let fname = 'John'
console.log('fname',fname)
const idcard = '123'
//const เป็นค่าคงที่ เปลี่ยนค่าไม่ได้ , let เปลี่ยนค่าได้

// Number - ตัวเลข
let age = 30
let height = 150.5

fname = 'Tom'

//idcard = '456'

console.log('idcard',idcard)

console.log('fname',fname, 'age',age)
//console.log('age',age)

+ บวก
- ลบ
* คูณ
/ หาร
% mod

let number1 = 5
let number2 = 10

let number3 = number1 + number2
console.log('Number3 = ',number3)

let fname = 'Sanchita'
let sname = 'Mongkorn'

let rname = fname + ' ' + sname
console.log('Name = ',rname)

== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าเท่ากับ
< น้อยกว่า
<= น้อยกว่าเท่ากับ


let number1 = 5
let number2 = 3

let condition1 = number1 >= number2 //Boolean (true,false)
console.log('Condition is = ',condition1)

let number1 = 5
let number2 = 5

// *** if - else condition ***
if (number1 != number2) {
    console.log('this if')
} else if (number1 == number2) {
    console.log('this else if')
} else {
    console.log('this else')
}


Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
< 50 F

//let score = prompt('ใส่ตัวเลข')  //ใส่เลขเองหน้าเว็บ
let score = 55
if (score >= 80) {
    console.log('Grade : A')
} else if (score >= 70) {
    console.log('Grade : B')
} else if (score >= 60) {
    console.log('Grade : C')
} else if (score >= 50) {
    console.log('Grade : D')
} else {
    console.log('Grade : F')
}

&& และ
|| หรือ
! not ไม่

let number1 = 5
let number2 = 10

let condition = !(number1 >= 3 || number2 >= 11)
console.log('result of condition is' ,condition)

let number = 21
if (number % 2 == 0) {
    console.log('you are event.')
} else {
    console.log('you are odd.')
}


// *** while loop ***
let counter = 0
while (counter < 10) {
    console.log('Hi')
    counter += 1
}

// *** for loop ***
for (let counter = 0; counter<10; counter++) {
    console.log('Hi')
}

// *** Array ***
let age1 = 20
let age2 = 25
let age3 = 30

let ages = [20, 25, 30]
//แทนที่ทั้งหมด
ages = [200,100,50]
console.log('age1 age2 age3', age1,age2, age3)
console.log('array',ages)
console.log('index',ages[2])

//ต่อ array จากตัวสุดท้าย
ages.push(25)
console.log('push array',ages)

//ลบ array ตัวสุดท้าย
ages.pop()
console.log('pop array',ages)

let ages = [50,20,25,30,35,40]
//หาตัวเลข
if (ages.includes(30)) {
    console.log('มีเลข 30 อยู่ใน array')
}

//เรียงจากน้อยไปมาก
ages.sort()
console.log('sorted ages',ages)

//array ที่มี string
let name_list = ['aa', 'bb', 'cc']
name_list.push('dd')
console.log('push name_list',name_list)
name_list.pop()
console.log('pop name_list',name_list)

//ขนาดของ array
console.log('lenght of name_list',name_list.length)

for (let index = 0; index < name_list.length; index++) {
    console.log('name_list', name_list[index])
}

let score = [20,30,40,50]

for (let index = 0; index < score.length; index++) {
    console.log('score',score[index])
}

// Arrow Function
let newScore = score.filter((s) => {
    return s>= 30
})

newScore.forEach((ns) => {
    console.log('New Score',ns)
})

// *** Object ***
let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
    age: 35,
    name: 'bb',
    grade: 'B'
}]

student.push({
    age: 40,
    name: 'cc',
    grade: 'C'
})

student.pop()

for (let index = 0; index < student.length; index++) {
    console.log('Student Number', (index + 1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}

// *** Function ***
let score1 = 55
let score = 65
let grade = ''

// การประกาศฟังก์ชัน
function calculate_grade(score) {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

// การเรียกใช้ฟังก์ชัน
let grade1 = calculate_grade(score1)
console.log('Grade',grade1)
*/

// *** Object Function ***

let students = [
    {
        name:'aa',
        score: 50,
        grade:'A'
    },{
        name:'bb',
        score: 80,
        grade:'A'
    }
]

let student = students.find((s) => {
    if (s.name == 'aa'){
        return true
    }
})

let double_score = students.map((s) => {
    s.score = s.score * 2
    return s
})

let highScore = students.filter((s) => {
    if (s.score >= 60) {
        return true
    }
})
console.log(student)
console.log('double_score',double_score)
console.log('highScore',highScore)