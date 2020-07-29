var btnOnlineRequestModule = function btnOnlineRequestModule() {
  var btnOnlineRequest = document.querySelector('#navbar-btnOnlineRequest');

  function showBtnOnlineRequest() {
    if (window.pageYOffset > 50) {
      btnOnlineRequest.classList.remove('hidden');
    } else {
      btnOnlineRequest.classList.add('hidden');
    }
  };

  btnOnlineRequest.onclick = function () {
    document.location.href = "HTML request.html";
  };

  // When scrolling, we run the function
  window.onscroll = showBtnOnlineRequest;
};

export default btnOnlineRequestModule;