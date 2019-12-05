export default (function () {
  function Repository () {
    /**
     * @method getData
     * @param url {String}
     * @returns {Promise<void>}
     */

    async function getData (url) {
      await fetch(url, {method: 'GET'})
        .then(response => response.json());
    }

    this.getData = function (url, success) {
      getData(url)
        .then(data => success(data));
    }
  }

  return new Repository();
})();