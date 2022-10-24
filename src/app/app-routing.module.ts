import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:"login",
        loadChildren: () => import('../modules/auth/auth.module').then(m=>m.AuthModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    { path: 'person', loadChildren: () => import('modules/person/person-routing.module').then(m => m.PersonRoutingModule) },
    { path: 'salesman', loadChildren: () => import('modules/salesman/salesman-routing.module').then(m => m.SalesmanRoutingModule) },
    { path: 'promotion', loadChildren: () => import('modules/promotion/promotion-routing.module').then(m => m.PromotionRoutingModule) },
    { path: 'person', loadChildren: () => import('modules/person/person-routing.module').then(m => m.PersonRoutingModule) },
    // { path: 'user', loadChildren: () => import('modules/user/user-routing.module').then(m => m.UserRoutingModule) },
    { path: 'user', loadChildren: () => import('../modules/user/user.module').then(m => m.UserModule) },

    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
