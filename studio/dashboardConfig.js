export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f562c8be700ee695d5ea036',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-54b4ks2x',
                  apiId: '4e9a7c23-db3b-4227-a634-6da4d4e7c4d5'
                },
                {
                  buildHookId: '5f562c8b9e0e9726a34f3c79',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-5pd5ef2k',
                  apiId: '2c584863-7c4d-4179-8393-964a5582b9c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeanrantunes/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-5pd5ef2k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
