class Services {
    async getRecipes() {
        let data = await ((fetch('/getforms')
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log('Error: ', err)
            })
        ))
        return data
    }
}

export default new Services;