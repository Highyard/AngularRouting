import { Injectable } from '@angular/core';
import { Student } from '../entities/student';
import { Elective } from '../entities/elective';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  electives: Elective[];

  constructor() { 
  }

   findElective(searchForId: string) : Elective {
    return this.electives.find(lookUpElective => lookUpElective._id === searchForId);
  } 

  getPythonStudentList(): Student [] {
    return [
      {name: 'Berit'},
      {name: 'Holger'},
      {name: 'Androkles'}
    ]
  }
    
 
  
getangularStudentList(): Student [] {
  return [
      {name: 'Jeppe'},
      {name: 'Casper'},
      {name: 'Martin'}
  ]
}
  
getCStudentList(): Student [] {
  return [
    {name: 'Finn'},
    {name: 'Julius'},
    {name: 'Mikael'}
  ]
}

 getAIStudentList(): Student[] {
    return  [
    {name: 'Konrad'},
    {name: 'Ivar'},
    {name: 'Bjørn'}
    ]
    }


    
getandroidStudentList(): Student [] {
  return [
    {name: 'Rasmus'},
    {name: 'Mads'},
    {name: 'Peter'}
  ]
  } 
}
