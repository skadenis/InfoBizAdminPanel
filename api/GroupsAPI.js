import BaseAPI from "./BaseAPI";

class GroupsAPI extends BaseAPI {
    get_all() {
        return this.axios.get("/chat/all"+ "/?"+(new Date().getTime()));
    }

    get(id) {
        return this.axios.get("/chat/" + id + "/?"+(new Date().getTime()));
    }

    edit(data) {
        return this.axios.post("/calendar/edit"+ "/?"+(new Date().getTime()), data);
    }

    add(data) {
        return this.axios.post("/chat"+ "/?"+(new Date().getTime()), data);
    }

    delete(data) {
        return this.axios.post("/chat"+ "/?"+(new Date().getTime()), data);
    }
    addToGroup(chat, user) {
        return this.axios.post("/chat/user"+ "/?"+(new Date().getTime()), {
            "chat" : chat,
            "user": user
        });
    }
}

export default new GroupsAPI();
