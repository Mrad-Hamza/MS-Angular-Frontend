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
        redirectTo: '/auth/login',
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
    { path: 'campaign', loadChildren: () => import('modules/campaign/campaign-routing.module').then(m => m.CampaignRoutingModule) },
    { path: 'event', loadChildren: () => import('modules/event/event-routing.module').then(m => m.EventRoutingModule) },
    { path: 'purchase', loadChildren: () => import('modules/purchase/purchase-routing.module').then(m => m.PurchaseRoutingModule) },
    { path: 'stock', loadChildren: () => import('../modules/stock/stock.module').then(m => m.StockModule) },
    { path: 'product', loadChildren: () => import('../modules/product/product.module').then(m => m.ProductModule) },
    {
        path: 'person',
        loadChildren: () =>
            import('modules/person/person-routing.module').then(m => m.PersonRoutingModule),
    },
    {
        path: 'salesman',
        loadChildren: () =>
            import('modules/salesman/salesman-routing.module').then(m => m.SalesmanRoutingModule),
    },
    {
        path: 'promotion',
        loadChildren: () =>
            import('modules/promotion/promotion-routing.module').then(
                m => m.PromotionRoutingModule
            ),
    },

    {
        path: 'purchase',
        loadChildren: () =>
            import('modules/purchase/purchase-routing.module').then(m => m.PurchaseRoutingModule),
    },
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
        path: 'project',
        loadChildren: () => import('modules/project/project.module').then(m => m.ProjectModule),
    },

    {
        path: 'task',
        loadChildren: () => import('modules/task/task.module').then(m => m.TaskModule),
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
