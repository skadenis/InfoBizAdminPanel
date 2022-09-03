import BaseAPI from "./BaseAPI";

class GroupsAPI extends BaseAPI {
    get_all() {
        return this.axios.get("/chat/all/");
    }

    get(id) {
        return this.axios.get("/chat/" + id + "/");
    }

    edit(data) {
        return this.axios.post("/calendar/edit", data);
    }

    add(data) {
        return this.axios.post("/calendar/add", data);
    }

    delete(data) {
        return this.axios.post("/calendar/delete", data);
    }
    addToGroup(chat, user) {
        return this.axios.post("/chat/user/", {
            "chat" : chat,
            "user": user
        });
    }
}

export default new GroupsAPI();
