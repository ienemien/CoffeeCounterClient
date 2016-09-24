"use strict";
var router_1 = require('@angular/router');
var coffee_component_1 = require('./coffee.component');
var coffee_detail_component_1 = require('./coffee-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: coffee_detail_component_1.CoffeeDetailComponent
    },
    {
        path: 'coffee',
        component: coffee_component_1.CoffeeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map