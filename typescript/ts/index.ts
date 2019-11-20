/* var flag:boolean = true;
console.log(flag)
var num:number = 12345;
console.log(num)
var arr:number[] = [123,456];
console.log(arr)
var arr1:Array<number> = [2,23]
console.log(arr1);
function run():string{
    return "12345"
}
console.log(run());
function getInfo(name:string,age?:number){
    if(age){
        return name+'----'+age
    }else{
        return name + "---年龄保密"
    }
    
}
console.log(getInfo("张三",12))
console.log(getInfo("李四"))
function getInfo1(name:string,age:number = 20){
    if(age){
        return name+'----'+age
    }else{
        return name + "---年龄保密"
    }
    
}
console.log(getInfo1("王五",52))
console.log(getInfo1("李大嘴"))
function sum(...result:number[]):number{
    let sum = 0;
    for(var i=0;i<result.length;i++){
        sum+= result[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5,6))
function sum1(num1:number,num2:number,...result:number[]):number{
    console.log(num1);
    console.log(num2);
    console.log(result);
    let sum = 0;
    for(var i=0;i<result.length;i++){
        sum+= result[i]
    }
    return sum
}
console.log(sum1(1,2,3,4,5,6,))
function sum2(...result:string[]):string{
    let sum:string = "";
    for(var i=0;i<result.length;i++){
        sum+= result[i]
    }
    return sum
}
console.log(sum2("1","2","3","4"))
/////////////////////////////////////////////////////////////
class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run():string{
        return this.name + "在运动";
    }
    getName():string{
        return this.name
    }
    setName(name:string):void{
        this.name = name;
    }
}
var test = new Person("张三");
console.log(test.getName());
test.setName("李四");
console.log(test.getName());
console.log(test.run())

class web extends Person{
    constructor(name:string){
        super(name)
    }
    run():string{
        return this.name + "在运动--子类"
    }
}
var w = new web("王五");
console.log(w.run());
/////////////////////////////////////////////////////////////
class Animal{
    protected name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log("我是父类")
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name + "吃屎";
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name + "吃老鼠";
    }
}
class Mouse extends Animal{
    constructor(name:string){
        super(name)
    }
}
let dog = new Dog("大黄");
console.log(dog.eat());
let cat = new Cat("小猫");
console.log(cat.eat());
let mouse = new Mouse("老鼠");
console.log(mouse.eat())
/////////////////////////////////////////////////////////////
abstract class Animal1{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any;
    run(){
        console.log("我是父类run方法")
    }
}
class Dog1 extends Animal1{
    constructor(name:string){
        super(name);
    }
    eat():any{
        return this.name + "吃狗粮"
    }
}  
class Cat1 extends Animal1{
    constructor(name:string){
        super(name);
    }
    eat():string{
        return this.name + "爱吃鱼"
    }
    run(){
        console.log(this.name + "爱运动")
    }
}
let dog1 = new Dog1("TOM");
console.log(dog1.eat());
console.log(dog1.run());
let cat1 = new Cat1("Jerry");
console.log(cat1.eat());
console.log(cat1.run());
/////////////////////////////////////////////////////////////
interface fullName{
    firstName:string;
    secondName?:string;
}
function printName(name:fullName){
    console.log(name.firstName+"--"+name.secondName)
}
var obj = {
    id:1,
    firstName:"张三",
}
printName(obj)
interface  Animal2{
    name:string;
    eat(str:string):void;
}
class Dog2 implements Animal2{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat():void{
        console.log(this.name + "吃东西")
    }
}
let dog2 = new Dog2("小明");
dog2.eat();
class Cat2 implements Animal2{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(food:string):void{
        console.log(this.name + "爱吃"+ food)
    }
}
let cat2 = new Cat2("小花");
cat2.eat("老鼠");
let a = "12346";
let b = "lallalal";
console.log(`${a}+"--"${b}`)
/////////////////////////////////////////////////////////////
 */
/* interface Animal{
    eat():void;
}
interface Person extends Animal{
    run():void;
}
class Jerry{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    coding(){
        console.log("adsfhjkashd")
    }

}
class Tom extends Jerry implements Person{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log("123")
    }
    run(){
        console.log("12345")
    }
    coding(){
        console.log("-------")
    }
}
var tom = new Tom("ajja")
tom.run();
tom.eat();
tom.coding(); */
/////////////////////////////////////////////////////////////
/* function test<T>(value:T):T{
    return value
}
console.log(test<string>("12345"))
console.log(test<string>("12345")) */
/////////////////////////////////////////////////////////////
/* class ArtiaclObj{
    name:string|undefined;
    age:number|undefined;
    status:string|undefined;
    constructor(params:{
        name:string | undefined,
        age:number | undefined,
        status?:string | undefined,
    }){
        this.name = params.name;
        this.age = params.age;
        this.status = params.status
    }
}
class OperateDb<E>{
    add(info:E):void{
        console.log(info)
    };
    updata(info:E,id:number){
        console.log(info+"---"+id)
    }

}
var a = new ArtiaclObj({name:"张三",
age: 12,
status:"已婚"})
var b = new ArtiaclObj({name:"李四",
age: 21,})
let opt = new OperateDb<ArtiaclObj>();
opt.add(a)
opt.add(b) */
/////////////////////////////////////////////////////////////
/* interface DBI<E>{
    add(info:E):void;
    update(info:E,id:number):void;
    delete(id:number):void;
    get(id:number):any[];
}
class MySqlDB<E> implements DBI<E>{
    constructor(){
        console.log("连接数据库");
    }
    add(info:E):void{
        console.log("添加成功"+info)
    }
    update(info:E,id:number):void{
        console.log("更新成功"+info+"--"+id)
    }
    delete(id:number):void{
        console.log("删除成功")
    }
    get(id:number):any[]{
        let testArr = [{id:1,name:"张三"},{id:2,name:"李四"}]
        return testArr;
    }
}
class User{
    name:string|undefined;
    age:number|undefined;
    constructor(params:{
        name:string | undefined,
        age:number | undefined
    }){
        this.name = params.name;
        this.age = params.age;
    }
}
let use = new User({name:"张三",age:65})
let mysqldb = new MySqlDB<User>()
mysqldb.add(use) */
////////////////////////修饰器不可传参/////////////////////////////////////
/* function logclass(params:any){
    console.log(params);
    params.prototype.url = "http://www/baidu.com/cn";
    params.prototype.run = function(){
        console.log("我是修饰器的run方法")
    }
}
@logclass
class HttpClient{
    constructor(){

    }
    getData(){

    }
}
var aa:any = new HttpClient();
console.log(aa.url); */
////////////////////////修饰器可传参/////////////////////////////////////
/* function logclass(params:any){
    return function(target:any){
        console.log(params);
        console.log(target);
        target.prototype.url = "6666666"
    }
}
@logclass("8888888888888")
class HttpClient{
    constructor(){

    }
    getData(){

    }
}
var bb:any = new HttpClient();
console.log(bb.url) */
////////////////////////重载构造函数//////////////////////////
/* function logclass(params:any){
    console.log(params);
    return class extends params{
        apiUrl:string = "我是修饰器里面的apiUrl";
        getData(){
            this.apiUrl = this.apiUrl + "------";
            console.log(this.apiUrl);
        }
    }
}
@logclass
class HttpClient{
    public apiUrl:string | undefined;
    constructor(){
        this.apiUrl='我是构造函数里面的apiUrl';
    }
    getData(){
        console.log(this.apiUrl);
    }
}
var aa:any = new HttpClient();
aa.getData(); */
/* ////////////////////////属性装饰器//////////////////////////
function logclass(params:any){
    return function(target:any){
        console.log(params);
        console.log(target);
    }
}
function logProperty(params:any){
    return function(target:any,attr:any){
        console.log(params);
        console.log(target+"----"+attr);
        target[attr] = params;
    }
}

@logclass("123456")
class HttpClient{
    @logProperty("888888")
    public apiUrl:string | undefined;
    constructor(){
       
    }
    getData(){
        console.log(this.apiUrl);
    }
}
var http=new HttpClient();
http.getData();
console.log(http.apiUrl+"--------------") */
/* ////////////////////////方法装饰器//////////////////////////
function logclass(params:any){
    return function(target:any){
        console.log(params);
        console.log(target);
    }
}
function logProperty(params:any){
    return function(target:any,attr:any){
        console.log(params);
        console.log(target+"----"+attr);
        target[attr] = params;
    }
}
function logMethod(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.apiUrl='xxxx';
        target.run=function(){
            console.log('run');
        }
    }
}

@logclass("123456")
class HttpClient{
    @logProperty("888888")
    public apiUrl:string | undefined;
    constructor(){
       
    }
    @logMethod("89898989")
    getData(){
        console.log(this.apiUrl);
    }
}
var http=new HttpClient(); */
 ////////////////////////方法参数装饰器//////////////////////////
function logParams(params:any){

    return function(target:any,methodName:any,paramsIndex:any){

        console.log(params);

        console.log(target);

        console.log(methodName);

        console.log(paramsIndex);


        target.apiUrl=params;

    }   
}
class HttpClient{  
        public url:any |undefined;
        constructor(){
        }           
        getData(@logParams('xxxxx') uuid:any){               
        console.log(uuid);
        }
}