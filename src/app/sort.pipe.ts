import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(values: object[], key: string) {
   return values.sort((a, b) => a[key].localeCompare(b[key]));
  }
}
