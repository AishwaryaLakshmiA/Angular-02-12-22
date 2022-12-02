import { Component } from '@angular/core';
import { TeacherModel } from '../teacher-model';
import { TeacherDataService } from '../teacher-data.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {

  constructor(
    private teacherService: TeacherDataService
    ){}

  teachersList=this.teacherService.TeacherList;
  selectedTeacher? : TeacherModel
  onSelect(teacher: TeacherModel): void{
      this.selectedTeacher = teacher;
      console.log(this.selectedTeacher);
  }
}
