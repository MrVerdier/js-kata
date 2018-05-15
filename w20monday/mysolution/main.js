"use strict";

document.getElementById('cookie').addEventListener('click', function () {


    if (this.classList.contains('fadeInUp')) {

     this.classList.remove('fadeInUp');

     this.classList.add('fadeOutDown');

    }

  });