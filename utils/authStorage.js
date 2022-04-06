class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem(`${this.namespace}:token`);
      return token !== 'undefined' ? JSON.parse(token) : null;
    }
  }

  setAccessToken(token) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(`${this.namespace}:token`, 
      JSON.stringify(token));
    }
  }

  removeAccessToken() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(`${this.namespace}:token`);
    }
  }
}

export default AuthStorage;