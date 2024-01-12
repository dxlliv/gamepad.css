export const configPlatforms: Platforms = {
    nintendo: {
        name: 'Nintendo',
        buttons: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'zl', 'zr', 'l', 'r', 'select', 'start'],
        consoles: {
            switch: {
                name: 'Switch',
                buttons: {
                    list: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'zl', 'zr', 'l', 'r'],
                    preview: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'zl', 'zr', 'l', 'r']
                },
            },
            gbc: {
                name: 'Game Boy Color',
                buttons: {
                    list: ['x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'select', 'start'],
                    preview: ['x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'select', 'start'],
                },
            },
        }
    },
    playstation: {
        name: 'PlayStation',
        buttons: ['cross', 'circle', 'square', 'triangle', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'l1', 'r1', 'l2', 'r2', 'l3', 'r3', 'select', 'start', 'ps'],
        consoles: {
            ps1:{
                name: 'PS1',
                buttons: {
                    list: ['cross', 'circle', 'square', 'triangle', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'l1', 'r1', 'l2', 'r2', 'l3', 'r3', 'select', 'start', 'ps'],
                    preview: ['cross', 'circle', 'square', 'triangle', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'l1', 'r1', 'l2', 'r2'],
                },
            }
        }
    },
    xbox: {
        name: 'Xbox',
        buttons: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'lb', 'rb', 'lt', 'rt', 'l3', 'r3'],
        consoles: {
            '360': {
                name: '360',
                buttons: {
                    list: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'lb', 'rb', 'lt', 'rt', 'l3', 'r3'],
                    preview: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'lb', 'rb', 'lt', 'rt'],
                },
            },
            'one': {
                name: 'One',
                buttons: {
                    list: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'lb', 'rb', 'lt', 'rt', 'l3', 'r3'],
                    preview: ['a', 'b', 'x', 'y', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'lb', 'rb', 'lt', 'rt'],
                },
            },
        }
    },
}