const student = {
  name: "shankar",
  age: 22,
  city: "Mumbai",
  College: "SSJCET",
  eng: 95,
  math: 93,
  phy: 97,
  //!Method
  getAvg() {
    // let avg = (eng + math + phy)/3;
    // Uncaught ReferenceError: eng is not defined
    let avg = (this.eng + this.math + this.phy) / 3;
    //   this  means calling a object of function getAvg() the object is student.
    console.log(this);
    console.log(`${this.name} got avg marks = ${avg}`);
  },
};

console.log(student.getAvg());

//Window object
function getAvg() {
  console.log(this);
}
