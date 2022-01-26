export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f10a24b0a3dd5fd4af8220',
                  title: 'Sanity Studio',
                  name: 'dbg-landing-page-studio',
                  apiId: 'a7cd380c-9ac7-4b8b-b0ea-c2ddc5525a13'
                },
                {
                  buildHookId: '61f10a243e80e969782e6a6f',
                  title: 'Landing pages Website',
                  name: 'dbg-landing-page',
                  apiId: '5d363419-dc3d-4309-b75f-c990a6761413'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jwoa/dbg-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dbg-landing-page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
