import { User as LUser } from './index.js'

export class User {
    public age: number
    constructor(age: number) {
        this.age = age * 3
    }
}

const user = new LUser(22)

const elem = document.getElementById('fuga')
if (!!elem) {
    elem.innerText = `hhhhh:${user.age}`
}
