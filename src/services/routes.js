export const ROUTES = (id = '') => {
  const routes = [
    {
      name: 'Orders',
      link: '/orders',
      id: 1
    },
    {
      name: 'Services',
      link: '/services',
      id: 2
    },
    {
      name: 'Workers',
      link: '/workers',
      id: 3
    },
    {
      name: 'Reports',
      link: ['/reports', '/reports/quantity'],
      id: 4
    },
    {
      name: 'Account',
      link: '/account',
      id: 5
    },
    {
      name: 'Logout',
      link: '/',
      id: 6
    },
    {
      name: 'Panels',
      link: '/panels',
      id: 7
    }
  ];

  if (typeof id === 'number') {
    return routes[id];
  }

  return routes;
}