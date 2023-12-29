const falso = require('@ngneat/falso');
const { getDatabase } = require('./mongoConnection');

const users = [];
for (let i = 0; i < 10000; i++) {
  const firstName = falso.randFirstName({ withAccents: false });
  const lastName = falso.randLastName({ withAccents: false });
  users.push({
    firstName,
    lastName,
    avatar: falso.randAvatar(),
    email: falso.randEmail({firstName, lastName}),
    username: falso.randUserName({firstName, lastName}),
    country: falso.randCountryCode(),
    createdAt: falso.randBetweenDate({ from: new Date('11/02/2009'), to: new Date() })
  });
}

const db = getDatabase();
const iniUsersCollection = db.collection('users');
iniUsersCollection.deleteMany({});
iniUsersCollection.insertMany(users);
// console.log(iniUsersCollection);
