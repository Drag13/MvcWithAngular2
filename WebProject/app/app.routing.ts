import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard } from './dashboard/dashboard.component'
import { PersonalCabinet } from './personalCabinet/personalCabinet.component'

const appRoutes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'personal',
        component: PersonalCabinet
    },
    {
        path: '**',  // otherwise route.
        component: Dashboard
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);