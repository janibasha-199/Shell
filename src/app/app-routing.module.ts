import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'https://janibasha-199.github.io/mfe1/remoteEntry.js',
      exposedModule: './temp.module'
  })
  .then((m) => m.TempModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
