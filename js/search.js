


      var search = document.querySelector(".search");
      var searchForm = document.querySelector(".form-offer");
      var dateArrival = document.querySelector("[name=date-arrival]");
      var dateLeaving = document.querySelector("[name=date-leaving]");
      var numberAdults = document.querySelector("[name=number-adults");
      var numberKids = document.querySelector("[name=number-kids]");
      var dark = document.querySelector(".dark");



      search.addEventListener("click", function (evt)  {
        evt.preventDefault();
        searchForm.classList.add("modal-show");
        dateArrival.focus();
        dark.classList.add("dark-show");
      });

      searchForm.addEventListener("submit", function (evt) {
        if (!dateArrival.value || !dateLeaving.value || !numberAdults.value || !numberKids.value) {
        evt.preventDefault();
        searchForm.classList.remove("modal-error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("modal-error");
      }
      else {

      }
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (searchForm.classList.contains("modal-show")) {
            searchForm.classList.remove("modal-show");
            searchForm.classList.remove("modal-error");
            dark.classList.remove("dark-show");
          }
        }
      });

      dark.addEventListener("click", function() {
        searchForm.classList.remove("modal-show");
        dark.classList.remove("dark-show");
      });

