import userData from '../data/user.js';

class User {
    constructor(picture, age, firstName, lastName, phone, address, category){
        this.picture = picture;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.category = category;
    }
}

const userArray = new Array();

export function load(){
    userData.users.forEach(user => {
        userArray.push(new User(user.picture, user.age, user.firstName, 
            user.lastName, user.phone, user.address, user.category));
    });
    loadTemplate(userArray);
}

export function filterData(input){
    const filteredArray = userArray.filter(user => user.firstName.includes(input) && user.lastName.includes(input) )
    loadTemplate(filteredArray);
}

function loadTemplate(users){
    const userContainer = document.getElementById('user-container');
    if(userContainer){
        userContainer.innerHTML = '';
        let template = '';
        users.forEach((user) => {
            template += `<user-component `
            + ` picture=` +  user.picture
            + ` age=` +  user.age
            + ` firstName=` +  user.firstName
            + ` lastName=` +  user.lastName
            + ` phone=` +  user.phone
            + ` address=` +  user.address
            + ` category=` +  user.category
            + `></user-component>`
        });
        userContainer.innerHTML = template;
    }
}