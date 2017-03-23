export default {
   getAllMovies(pageID) {
    let page = pageID;
    const url = 'https://devsma.idefenc.com/api/records/Location/all';
    if (page === null) {
      page = 1;
    }
    return fetch(url)
      .then((response) => {
        return response.json();
      });
  }
}
