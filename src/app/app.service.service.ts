import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  url: string;
  constructor() { }

    getDisplayCollumns() {
      return JSON.parse(localStorage.getItem('columnsTaskList'));
    }
  
    setDisplayCollumns(columnsName: string[]) {
      localStorage.setItem('columnsTaskList', JSON.stringify(columnsName));
    }

    
  getColumnSize(columnName: string) {
    console.log(columnName)
    return JSON.parse(localStorage.getItem('columnSize'+ columnName));
  }

  setColumnSize(columnName: string, size: number) {
    console.log(columnName)
    localStorage.setItem('columnSize' + columnName, JSON.stringify(size));
  }
}
