const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const courseCategories = require('./data/course_categories.json');
const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Learn-Tech-Edge API Running...')
});

app.get('/course-categories', (req, res) => {
    res.send(courseCategories);
});

app.get('/course-category/:id', (req, res) => {
    const id = req.params.id;

    if (id === "05") {
        res.send(courses);
    } else {
        const course_category = courses.filter(course => course.category_id === id);
        res.send(course_category);
    }
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.filter(course => course._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log(`Learn-Tech-Edge Server is running at port: ${port}`);
});
