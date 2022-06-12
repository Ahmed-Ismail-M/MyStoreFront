export class Random {
randomString():String{
    return (Math.random() + 1).toString(36).substring(7)
}
randomNo(max: number, min: number):Number{
    return Math.floor(Math.random() * max) + min
}

}