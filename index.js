class App {
  constructor() {
    this.server = {}

    this.middlewares()
    this.routes();

    console.log('Your environment with ESLint Airbnb, Prettier and EditorConfig was set.');
  }

  middlewares() {
    console.log('Implement middlewares here');
  }

  routes() {
    console.log("Implement routes here");
  }
}

export default new App().server;
