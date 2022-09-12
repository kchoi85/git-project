// 2022 August Git Course

const myApp = {
  name: "Demo App for Git",
  version: "2.0.0",
  author: "WithYouWithMe",
  description: "This is a simple app",
  license: "MIT",
  year: "2022",
  website: "https://myapp.com",

  sayHello: function () {
    console.log(`Hello from ${this.name} v${this.version}`);
  },

  sayGoodbye: function () {
    console.log(`Goodbye from ${this.name} v${this.version}`);
  },

  saySomething: function (something) {
    console.log(`${this.name} says: ${something}`);
  },

  init: function () {
    console.log(`${this.name} ${this.version}`);
  },
};

myApp.init();
