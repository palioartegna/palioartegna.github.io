import { NgModule } from '@angular/core';

import { SharedLibsModule } from './shared-libs.module';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { pbDatePipe } from './pipes/date-pipe/date.pipe';
import { DurationPipe } from './pipes/duration-pipe/duration.pipe';
import { EmptyPipe, MapPipe } from './pipes/map-pipe/map.pipe';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';
import { SelectComponent } from './select/select.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { HostDirective } from './directives/host-directive/host.directive';
import { CarouselItemDirective } from './carousel/carousel-item-directive/carousel-item.directive';
import { CarouselArrowDirective } from './carousel/carousel-arrow-directive/carousel-arrow.directive';
import { CalloutComponent } from './callout/callout.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ExpansionItemComponent } from './expansion-item/expansion-item.component';
import { AnimateDirective } from './directives/animate/animate.directive';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { SortPipe } from './pipes/sort-pipe/sort.pipe';

@NgModule({
   imports: [SharedLibsModule],
   declarations: [
      EmptyPipe,
      FilterPipe,
      MapPipe,
      SortPipe,
      pbDatePipe,
      HasAnyAuthorityDirective,
      DurationPipe,
      SelectComponent,
      CarouselComponent,
      CarouselItemDirective,
      CarouselArrowDirective,

      AutocompleteComponent,
      PaginatorComponent,
      HostDirective,
      CalloutComponent,
      DropdownComponent,
      DatepickerComponent,
      TabsComponent,
      InputComponent,
      ButtonGroupComponent,
      ExpansionItemComponent,
      AnimateDirective,
      TimepickerComponent,
   ],
   exports: [
      SharedLibsModule,
      HasAnyAuthorityDirective,
      pbDatePipe,
      DurationPipe,
      MapPipe,
      FilterPipe,
      EmptyPipe,
      SelectComponent,
      CarouselComponent,
      CarouselItemDirective,
      CarouselArrowDirective,
      AutocompleteComponent,
      PaginatorComponent,
      HostDirective,
      DropdownComponent,
      DatepickerComponent,
      TabsComponent,
      InputComponent,
      ButtonGroupComponent,
      ExpansionItemComponent,
      AnimateDirective,
      CalloutComponent,
      TimepickerComponent,
      SortPipe,
   ],
   providers: [pbDatePipe, DurationPipe, MapPipe],
})
export class SharedModule {}
