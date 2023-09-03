import Person from "./Person.js";

class Student extends Person{
  diemToan = 0;
  diemLy = 0;
  diemHoa = 0;
  tinhDiemTB = () => {
    return ((this.diemHoa + this.diemLy + this.diemToan) / 3).toFixed(2);
  };
}

export default Student;
