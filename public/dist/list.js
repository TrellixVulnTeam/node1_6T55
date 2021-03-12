import { User as LUser } from './index.js';
var User = /** @class */ (function () {
    function User(age) {
        this.age = age * 3;
    }
    return User;
}());
export { User };
var user = new LUser(22);
var elem = document.getElementById('fuga');
if (!!elem) {
    elem.innerText = "hhhhh:" + user.age;
}
