db.createUser({
  user: "root",
  pwd: "toor",
  roles: [
    {
      role: "readWrite",
      db: "testDB",
    },
  ],
});

db = new Mongo().getDB("testDB");

db.createCollection("elements", { capped: false });

db.elements.insertMany([
  {
    itemId: "11",
    code: "025",
    name: "test",
  },
  {
    itemId: "",
    code: "02",
    name: "te",
  },
  {
    itemId: "2",
    code: "0251",
    name: "test",
  },
  {
    itemId: "2",
    code: "025",
    name: "test2",
  },
]);
