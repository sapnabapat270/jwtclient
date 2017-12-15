import delay from './delay';

const users=[];

class RegisterApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
    user = Object.assign({}, user);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        users.push(user);
        resolve(user);
      }, delay);
    });
  }

}

export default RegisterApi;
