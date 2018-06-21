import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getsubject'
})
export class GetSubjectPipe implements PipeTransform {

  transform(value: any,subs:any[], args?: any): any {
    let sub = subs.filter(subject=>subject.id==value);
    return sub[0].tittle;
  }

}
