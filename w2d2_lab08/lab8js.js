
//1. Define a filterfunction on the Stringobject. 

window.onload = function(){
    var st = "".__proto__;
    st.filter = function(str){
        return this.toString().split(' ').filter(s=>s!=str).reduce((t,s)=>t + ' ' + s,'');
    }
    //console.log(st);
    console.log("This house is not nice!".filter('not'));


    //2. Write a BubbleSortalgorithm on the Array objec
    var arr =[].__proto__;
    arr.bubbleSort = function (){
        var arr = this;
        for(let i in arr){
            for(let j in arr){
                if(arr[j] > arr[i]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j]= temp;
                }
            }
        }
        return arr;
    }
    console.log([6,4,0, 3,-2,1].bubbleSort())

    //3. Create an object called Teacherderived from aPersonfunction constructor
    function Person(name){
        this.name = name;
    }
//using new key words
    var teacher = new Person("Tina Xing");
    teacher.teach = function(subject){
        console.log('\n'+ this.name + ' is now teaching ' + subject);
    }
    teacher.teach('Mathematics');

    // using Objects.create
    var person  = function(name){
        var n = name;
        return {
            name : n
        }
    }
    var teacher2 = Object.create(person('Bisrat Kidane'))
    teacher2.teach = function(subject){
        console.log(this.name + ' is now teaching ' + subject);
    }
    teacher2.teach('Masterss in Computer Science')

    // question 4 using prototype object
    var Person = {
        name:'Yohannes Mulualem',
        age:26,
        greeting:function(){
            console.log('\n Greetings, my name is ' + this.name + ' and I am ' + this.age +' years old');
        },
        salute(){
            console.log('\nGood morning!, and in case I dontsee you, good afternoon, good evening and goodnight!');
        }

    }

    var Student = Object.create(Person);
    Student.major ='Software Engineering';
    Student.greeting = function(){
        console.log('\nHey, my name is ' + this.name + ' and I am studying ' + this.major);
    }

    var Professor = Object.create(Person);
    Professor.department = 'ComPro';
    Professor.greeting = function(){
        console.log("\n Greeting from Proffessor");
    }
    Professor.salute = function(){
        console.log('\n Good day, my name is ' +  this.name + ' and I am in the ' + this.department + ' department');
    }
    var student = Object.create(Student);
    student.greeting();
    student.salute();

    var proffessor = Object.create(Professor);
    proffessor.greeting();
    proffessor.salute();


    //4. Write code that will createperson, student, and professor objects
    function Person2(){
        this.name = 'Amare Anagaw';
        this.age = 27
    }
    Person2.prototype.greeting = function(){
        console.log('\nGreetings, my name is ' + this.name + ' and I am ' + this.age +' years old');
    }
    Person2.prototype.salute = function(){
        console.log('\nGood morning!, and in case I dont see you, good afternoon, good evening and goodnight!');
    }
    function Student2(){
        Person2.call(this);
        this.major = 'MWA';
    }
    Student2.prototype = Object.create(Person2.prototype);
    Student2.prototype.greeting = function(){
        console.log('\nHey, my name is ' + this.name + ' and I am studying ' + this.major);
    }
    function Professor2(){
        Person2.call(this)
        this.department = 'ComPro'
    }
    Professor2.prototype = Object.create(Person2.prototype);
    Professor2.prototype.greeting = function(){
        console.log("\nGreeting from Proffessor");
    }
    Professor2.prototype.salute = function(){
        console.log('\nGood day, my name is ' +  this.name + ' and I am in the ' + this.department + ' department');
    }
    var student = new Student2();
    student.greeting();
    student.salute();

    var proffessor = new Professor2();
    proffessor.greeting();
    proffessor.salute();
}