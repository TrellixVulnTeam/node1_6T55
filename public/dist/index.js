var User = /** @class */ (function () {
    function User(age) {
        this.age = age;
    }
    return User;
}());
export { User };
var user = new User(44);
var elem = document.getElementById('hoge');
if (!!elem) {
    elem.innerText = "hhhhh:" + user.age;
}
