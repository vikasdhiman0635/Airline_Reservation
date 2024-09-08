import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'h', pathMatch: 'full'
    },
    {
        path: 'h', loadChildren: () => import('./Component/main.module').then(m => m.MainModule)
    }
];
