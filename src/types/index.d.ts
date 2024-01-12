interface Platform {
    name: string
    buttons: string[]
    consoles: {
        [consoleCode: string]: PlatformConsole
    }
}

interface PlatformConsole {
    name: string
    buttons: {
        list: string[]
        preview: string[]
    }
}

interface Platforms {
    [platformCode: string]: Platform
}
