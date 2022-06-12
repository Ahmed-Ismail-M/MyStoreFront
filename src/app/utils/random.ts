export class Random {
randomString():string{
    return (Math.random() + 1).toString(36).substring(7)
}
randomNo(max: number, min: number):number{
    return Math.floor(Math.random() * max) + min
}

}