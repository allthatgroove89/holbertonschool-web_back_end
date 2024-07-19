import { type } from "os";

class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    this.name = name;
    this.length = length;
    this.students = students;
  }
  // Getter for name
  get name(){
    this._name;
  }
  // Setter for name
  set name(value){
    if (typeof value === 'string') {
      this._name = value;
    }
  }
  // Getter for length
  get length(){
    this._length;
  }
  // Setter for length
  set length(value){
    if(typeof value === 'number'){
      this._length = value;
    }
  }
  // Getter for students
  get students(){
    this._students;
  }
  // Setter for students
  set students(value){
    if(Array.isArray(value) && value.every(item => typeof item === 'string')){
    this._students = value;
    }
  }
}
export default HolbertonCourse;