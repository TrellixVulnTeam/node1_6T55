export class User {
    public age: number
    public constructor(age: number) {
        this.age = age
    }
}


const user = new User(44)

const elem = document.getElementById('hoge')
if (!!elem) {
    elem.innerText = `hhhhh:${user.age}`
}
