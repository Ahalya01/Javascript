const course = {
    title: "Introduction to JavaScript",
    instructor: "Vamsi",
    duration: "2 weeks"
};
console.log("Course Details:",course); 
const entries = Object.entries(course);
console.log("Course Entries:",entries);  
delete course.duration;
console.log("deleted duration:",course);  
const updatedEntries = Object.entries(course);
console.log("Final Entites:",updatedEntries);  
