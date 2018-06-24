import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { API_URL } from "../../../shared/config";

@Injectable()
export class TestCentreService {

  url: string = API_URL;
  test: any;

  constructor(private http: HttpClient) {}

  AddTest(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}/lecture/addTest.php`, data);
  }
  UpdateTest(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}/lecture/updateTest.php`, data);
  }
  select(table): Observable<any> {
    return this.http.get<any>(`${this.url}/lecture/selectTests.php`);
  }
  getStudents(subjectID): Observable<any> {
    return this.http.get<any>(
      `${this.url}/lecture/subject_students.php?subjectID=${subjectID}`
    );
  }
  saveTest(test) {
    this.test = test;
  }
  getTest() {
    return this.test;
  }

   addStudentsToTest(data): Observable<any> {
    return this.http.post(`${this.url}/lecture/add_students_for_test.php`, data);
  }

  getStudentsForTest(id): Observable<any>{
    return this.http.get<any>(`${this.url}/lecture/test_students.php?testID=${id}` );
   }
}
