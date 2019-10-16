import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { CustomViewComponent } from './custom-view/custom-view.component';


const routes: Routes = [
  {path: '', component: QuoteDisplayComponent},
  {path: 'customview', component: CustomViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
