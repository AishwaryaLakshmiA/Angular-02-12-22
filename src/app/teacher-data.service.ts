import { Injectable } from '@angular/core';
import { TeacherModel } from './teacher-model';

@Injectable({
  providedIn: 'root'
})
export class TeacherDataService {

  TeacherList: TeacherModel[] = [
    {id: 1, name: 'Vijaya Lakshmi' , domain: 'Statistics'},
    {id: 2, name: 'Nancy Jane', domain: 'JAVA'},
    {id: 3, name: 'Bala', domain: 'Data Science'},
    {id: 4, name: 'Thanasekhar', domain: 'Data Structures'}
  ];
  constructor() { }
}
