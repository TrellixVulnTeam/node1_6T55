import { User as LUser } from './user'

const user = new LUser(22)

const elem = document.getElementById('fuga')
if (!!elem) {
    elem.innerText = `hhhhh:${user.age}`
}
