export default [{
        name: '菜单一',
        icon: 'team',
        key: 1,
        children: [{
                key: '1-1',
                name: '表格',
                url: '/son1'
            },
            {
                key: '1-2',
                name: '子菜单1-2',
                url: '/'
            }
        ]
    },
    {
        name: '菜单二',
        key: 2,
        icon: 'shop',
        children: [{
                key: '2-1',
                name: '子菜单2-1',
                url: '/test3'
            },
            {
                key: '2-2',
                name: '子菜单2-2',
                url: '/test2'
            }
        ]
    }
]