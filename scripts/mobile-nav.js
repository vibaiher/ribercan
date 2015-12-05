document.addEventListener('DOMContentLoaded', function(){

  var body         = document.querySelector('body');
  var mainWrapper  = document.querySelector('.main-wrapper');
  var mainHeader   = document.querySelector('.mobile__main-header');
  var primaryNav   = document.querySelector('.mobile__nav--primary');
  var secondaryNav = document.querySelector('.mobile__nav--secondary');
  var mainBody     = document.querySelector('.main-body');
  var mainFooter   = document.querySelector('.main-footer');
  var overlay      = document.querySelector('.overlay');
                   
  var htmlEE       = document.querySelector('html');
  
  
  var showPrimaryNav    = document.querySelector('.mobile__open--primary-menu');
  
  
  var searchBox  = document.querySelector('.mobile__search--standalone');
  var openSearch = document.querySelector('.mobile__open--search');
  var searchInput= document.querySelector('.mobile__search--standalone__input-search');
  
  showPrimaryNav.addEventListener('click', function() {
    mainHeader.classList.toggle('_leftNavOpen');
    primaryNav.classList.toggle('_leftNavOpen');
    mainBody.classList.toggle('_leftNavOpen');
    mainFooter.classList.toggle('_leftNavOpen');

    body.classList.toggle('_preventOverflow');
    searchBox.classList.remove('_is_visible');
    
    
    if (!searchBox.classList.contains('_is_visible')) {
      overlay.classList.add('_is_visible');
      body.classList.add('_preventOverflow');
    } 
    if (mainHeader.classList.contains('_leftNavOpen')) {
      overlay.classList.add('_is_visible');
      body.classList.add('_preventOverflow');
    }
    if(!searchBox.classList.contains('_is_visible') && !mainHeader.classList.contains('_leftNavOpen')) {
      overlay.classList.remove('_is_visible');
      body.classList.remove('_preventOverflow');
    }
    
    //resetPaddingShit();
    
  }, false);
  
  
  /*
  ONLY FOR EDUCAPOKER (secondaryNav on the right)
  */
  var showSecondaryNav = document.querySelector('.mobile__open--secondary-menu');
  
  showSecondaryNav.addEventListener('click', function() {
      mainHeader.classList.toggle('_rightNavOpen');
      secondaryNav.classList.toggle('_rightNavOpen');
      mainBody.classList.toggle('_rightNavOpen');
      mainFooter.classList.toggle('_rightNavOpen');


      if (searchBox.classList.contains('_is_visible')) {
        body.classList.add('_preventOverflow');
        overlay.classList.add('_is_visible');
        searchBox.classList.remove('_is_visible');
      } else {
        body.classList.toggle('_preventOverflow');
        overlay.classList.toggle('_is_visible');
      }
      //resetPaddingShit();
      
  }, false);
  
  
  openSearch.addEventListener('click', function() {
      
    mainHeader.classList.remove('_leftNavOpen');
      mainHeader.classList.remove('_rightNavOpen');
    primaryNav.classList.remove('_leftNavOpen');
    secondaryNav.classList.remove('_rightNavOpen');
    mainBody.classList.remove('_leftNavOpen');
      mainBody.classList.remove('_rightNavOpen');
    mainFooter.classList.remove('_leftNavOpen');
      mainFooter.classList.remove('_rightNavOpen');
      
    
    if (searchBox.classList.contains('_is_visible')) {
      console.log('caca');
      overlay.classList.remove('_is_visible');
      body.classList.remove('_preventOverflow');
      searchBox.classList.remove('_is_visible');
    } else if (!searchBox.classList.contains('_is_visible')) {
      overlay.classList.add('_is_visible');
      body.classList.add('_preventOverflow');
      searchBox.classList.add('_is_visible');
    } 
    if(!searchBox.classList.contains('_is_visible') && !mainHeader.classList.contains('_leftNavOpen')) {
      overlay.classList.remove('_is_visible');
      body.classList.remove('_preventOverflow');
      searchBox.classList.remove('_is_visible');
    }
    if (mainHeader.classList.contains('_leftNavOpen')) {
      overlay.classList.add('_is_visible');
      body.classList.add('_preventOverflow');
      searchBox.classList.add('_is_visible');
    }
      
    //resetPaddingShit();
    
  }, false);
  
  
  overlay.addEventListener('click', function() {
  
      mainHeader.classList.remove('_leftNavOpen');
        mainHeader.classList.remove('_rightNavOpen');
      primaryNav.classList.remove('_leftNavOpen');
      secondaryNav.classList.remove('_rightNavOpen');
      mainBody.classList.remove('_leftNavOpen');
        mainBody.classList.remove('_rightNavOpen');
      mainFooter.classList.remove('_leftNavOpen');
        mainFooter.classList.remove('_rightNavOpen');
      
      body.classList.remove('_preventOverflow');
      overlay.classList.remove('_is_visible');
      searchBox.classList.remove('_is_visible');
        
      //resetPaddingShit();
    
  }, false);
  

/* PREVENT weird bug which would show
   a non-existent overflow when the
   main nav was collapsed */
var resetPaddingShit = function () {
  if(htmlEE.style.padding != '1px') {
    
    htmlEE.style.padding = '1px';
    console.log('padding 1px');
    
  }
};






  userHasScrolled = false;
  
  var delay = 100;
  var timeout = null;
  var scrollStart = window.pageYOffset;
  var scrollEnd = 100;
  
  /**
   * On scroll
   */
  window.onscroll = function () {
    
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      scrollEnd = window.pageYOffset;
      console.log('scrolling started at ' + scrollStart + '. Ended at ' + scrollEnd + ' ref:' + window.pageYOffset);
      
      if(scrollEnd >= scrollStart) {
        mainHeader.classList.add('_is_hidden');
      } else {
        mainHeader.classList.remove('_is_hidden');
      }
      
      if(window.pageYOffset < 100) {
        mainHeader.classList.remove('_is_hidden');
      }
    },delay);
    
  }

  

});