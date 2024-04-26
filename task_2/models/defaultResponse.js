class DefaultResponse {
  #status;
  #data;

  constructor(data, status = 200) {
    this.#status = status;
    this.#data = data;
  }

  get data() {
    return this.#data;
  }

  get status() {
    return this.#status;
  }
}

module.exports = DefaultResponse;
