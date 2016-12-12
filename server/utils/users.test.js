const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node.js'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React.js'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node.js'
    }];
  });

  describe('addUser', () => {
    it('should add new user', () => {
      let users = new Users();
      let user = {
        id: '123',
        name: 'Eduardo',
        room: 'Developers'
      }

      let resUser = users.addUser(user.id, user.name, user.room);
      expect(users.users).toEqual([user]);
    });
  });

  describe('getUserList', () => {
    it('should return names for Node.js', () => {
      let userList = users.getUserList('Node.js');

      expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for React.js', () => {
      let userList = users.getUserList('React.js');

      expect(userList).toEqual(['Jen']);
    });
  });

  describe('getUser', () => {
    it('should find user', () => {
      let userId = '1';
      let user = users.getUser(userId);
      expect(user.id).toBe('1');
    })

    it('should not find user', () => {
      let userId = '99';
      let user = users.getUser(userId);
      expect(user).toNotExist();
    })
  });

  describe('removeUser', () => {
    it('should remove an user', () => {
      let userId = '1';
      let user = users.removeUser(userId);
      expect(user.id).toBe(userId);
      expect(users.users.length).toBe(2);
    })

    it('should not remove an user', () => {
      let userId = '99';
      let user = users.removeUser(userId);
      expect(user).toNotExist();
      expect(users.users.length).toBe(3);
    })
  });
})