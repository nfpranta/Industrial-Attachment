import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ThroneGamesComponent } from './throne-games/throne-games.component';
import { QuoteComponent } from './quote/quote.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  // {path:"throne-games", component: ThroneGamesComponent},
  {path:"quote", component: QuoteComponent},
  {path:"dynamic-form", component: DynamicFormComponent},
  {path:'', pathMatch:'full', redirectTo:'quote'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


