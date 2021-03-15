import { User } from './user'
import './list'

const user = new User(44)

const elem = document.getElementById('hoge')
if (!!elem) {
    elem.innerText = `hhhhh:${user.age}`
}
