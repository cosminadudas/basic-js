let age = 32;
let userName= 'Max';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
    title: 'Software Developer',
    place: 'New York',
    salary: 50000
};

function calculateAdultYears(age) {
    return age - 18;
}

let adultYears = calculateAdultYears(age)
alert(job['title']);
alert(adultYears);
alert(hobbies);
alert(hobbies[0]);
alert(job.title);