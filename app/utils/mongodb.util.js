const { MongoClient } = require("mongodb");

class MongoDB {
    // Singleton: tái sử dụng cùng một MongoClient
    static connect = async (uri) => {
        if (this.client) return this.client;            // đã kết nối trước đó
        this.client = await MongoClient.connect(uri);   // khởi tạo kết nối mới
        return this.client;
    };
}

module.exports = MongoDB;