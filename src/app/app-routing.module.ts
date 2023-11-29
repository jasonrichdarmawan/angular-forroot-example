import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'two',
    loadChildren: () => import("./two/two.module").then(m => m.TwoModule),
  },
  {
    path: 'three',
    loadChildren: () => import("./three/three.module").then(m => m.ThreeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
