class DB {
    async getUser() {
        const profileResponse = await fetch(`db.json`)

        const output = await profileResponse.json();

        return {
            output: output,
        };
    }
}
