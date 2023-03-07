const Storage = {
    save(name: string, data: unknown) {
        if (typeof data === 'object') {
            localStorage.setItem(name, JSON.stringify(data))
        }

        localStorage.setItem(name, String(data))
    },
    find(name: string) {
        return localStorage.getItem(name)
    },
    delete(name: string) {
        return localStorage.removeItem(name)
    }
}

export default Storage
