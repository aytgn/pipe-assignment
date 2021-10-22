import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
  // pure: false,
})
export class ReversePipe implements PipeTransform {
  //select and object array and string that is define object's one of key
  transform(values: object[], key: string) {
    //Repeat for all selected array's object
    for (let value of values) {
      //the string reached
      let strWillSplit: string = value[key];
      //string transformed to an array
      let splittedArr: string[] = strWillSplit.split("");
      //array reversed
      let reverseSplittedArr: string[] = splittedArr.reverse();
      //array joined
      let joinedArr: string = reverseSplittedArr.join("");
      //new string value assigned to one of the selected array's object's selected value
      value[key] = joinedArr;
    }
    //after all assignments, return new values!
    return values;
  }
}
