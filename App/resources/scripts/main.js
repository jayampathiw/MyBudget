import {load as loadUsers, filterData as filterUsers} from './modules/user-module.js';
import {load as loadDebts, filterData as filterDebts} from './modules/debt-module.js';

loadUsers();
loadDebts();

document.getElementById('user-search').addEventListener("keyup", function(event){
    filterUsers(event.target.value);
});

document.getElementById('debt-search').addEventListener("keyup", function(event){
    filterDebts(event.target.value);
});

