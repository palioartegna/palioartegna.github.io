import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
   name: 'pbDate',
   pure: false,
})
export class pbDatePipe implements PipeTransform {
   public static transform(date: string | number | Date | null | undefined, format?: string): string {
      const formatObj = format && this.isJSON(format) ? JSON.parse(format) : null;
      if (formatObj?.duration) {
         date = Number(date);
         switch (formatObj?.duration) {
            case 's':
               date = date * 1000;
               break;
            case 'm':
               date = date * 60 * 1000;
               break;
            case 'h':
               date = date * 60 * 60 * 1000;
               break;
         }
         return formatDate(date, formatObj?.format, window.sessionStorage.getItem('locale') ?? 'en-US', '+0000');
      }
      if (date instanceof Date && !isNaN(date.getTime())) {
         return formatDate(date, format ?? 'dd, MMM, yyyy', window.sessionStorage.getItem('locale') ?? 'en-US');
      }

      return '';
   }

   private static isJSON(str: string): boolean {
      try {
         JSON.parse(str);
      } catch (e) {
         return false;
      }
      return true;
   }

   transform(date: string | number | Date | null | undefined, format?: string): string {
      return pbDatePipe.transform(date, format);
   }
}

// 'short'	        'M/d/yy, h:mm a'                      6/15/15, 9:03 AM
// 'medium'	        'MMM d, y, h:mm:ss a'               	Jun 15, 2015, 9:03:01 AM
// 'long'	          'MMMM d, y, h:mm:ss a z'	            June 15, 2015 at 9:03:01 AM GMT+1
// 'full'	          'EEEE, MMMM d, y, h:mm:ss a zzzz'	    Monday, June 15, 2015 at 9:03:01 AM GMT+01:00
// 'shortDate'	    'M/d/yy'	                            6/15/15
// 'mediumDate'	    'MMM d, y'	                          Jun 15, 2015
// 'longDate'	      'MMMM d, y'	                          June 15, 2015
// 'fullDate'	      'EEEE, MMMM d, y'	                    Monday, June 15, 2015
// 'shortTime'	    'h:mm a'	                            9:03 AM
// 'mediumTime'	    'h:mm:ss a'	                          9:03:01 AM
// 'longTime'	      'h:mm:ss a z'	                        9:03:01 AM GMT+1
// 'fullTime'	      'h:mm:ss a zzzz'                      9:03:01 AM GMT+01:00
