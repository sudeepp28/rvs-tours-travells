import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { HsecondComponent } from './home/hsecond/hsecond.component';
import { FromComponent } from './from/from.component';
import { AdetailComponent } from './about/adetail/adetail.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';



const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', 
  anchorScrolling: 'enabled',           
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'forms/:id',component:FromComponent},
  {path:'aDetail/:id', component:AdetailComponent},
  {path:'service', component:ServiceComponent},
  {path:'gallery',component:GalleryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
