import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeComponent }      from './coffee.component';
import { CoffeeDetailComponent }      from './coffee-detail.component';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/coffee',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: CoffeeDetailComponent
    },
    {
        path: 'new',
        component: CoffeeDetailComponent
    },
    {
        path: 'coffee',
        component: CoffeeComponent
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);