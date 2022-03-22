
class Github {
    constructor() {
        // this.client_id = "d4c2979dccaa9c2866a8";
        // this.client_secret = "ae3660c9925530b6b9fdb29d51dc244883a5c468";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile: profile,
        }
    }

}