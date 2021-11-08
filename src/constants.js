// export const BASE_URL = "https://my-json-server.typicode.com/ChandanPk/json-placeholder-api"
export const BASE_URL = "https://tindog-sever.herokuapp.com"

export const API = {
    blogs:  BASE_URL + "/blogs",
}

API.blogPage = (id) => BASE_URL + "/blogs/" + id