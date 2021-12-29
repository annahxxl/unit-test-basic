class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      // 위와 같이 내부적으로 fetch를 이용하게 되면 네트워크에 항상 의존하기 때문에 단위 테스트가 어려워진다.
      // 네트워크를 사용하는 것이 있다면 별도의 class로 분리해서 Mock이나 Stub을 이용하여 단위 테스트를 할 수 있도록 한다.
      return this.userClient
        .login(id, password) // 호출이 되었는지에 대한 검사는 Mock을 이용한다.
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
