import { Component, OnInit, Injectable } from '@angular/core';
import { Student } from '../entities/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class StudentsComponent implements OnInit {

  studentList: Student[];

  constructor() { }

  

  ngOnInit() {
  

  }

  
}

