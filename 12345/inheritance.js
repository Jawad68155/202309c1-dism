class employee{
    constructor(name,email,phone,salary,address){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.sal=salary;
        this.add=address;
    }
    workingHours(h){
        document.querySelector("#demo").innerHTML=`<h1>${this.name} has${h} working hours</h1>`
    }
}
class developer extends employee{
    constructor(a,b,c,d,e,skills){
        super(a,b,c,d,e)
        this.skill=skills;
    }
    hiring(status){
        document.querySelector("#demo").innerHTML+=`<h1> ${this.name} is a ${this.skill} and hi hired as a ${status}</h1>`
    }
}
let d1 = new developer("anas" , ":anas@gmail.com" , "90078601","50k","pechs karachi","php developer" );
d1.workingHours(9)