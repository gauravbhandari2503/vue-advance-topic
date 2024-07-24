class UserAdapter {
    constructor(externalUserData) {
        this.externalUserData = externalUserData;
    }
    adapt() {
        const userData = this.externalUserData;
        return {
            name: `${userData.firstName} ${userData.lastName}`,
            email: userData.email,
            gender: userData.gender,
            location: `${userData.address.city}, ${userData.address.country}`,
            displayPic: userData.image,
        }
    }
}

export default UserAdapter;