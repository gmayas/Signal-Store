import { Routes } from '@angular/router';
//
export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/products/features/product-shell/product.route')
    },
    {
      path: '**',
      redirectTo: '',
    },
];
