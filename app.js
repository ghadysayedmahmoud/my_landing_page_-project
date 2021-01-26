	/**
	 * 
	 * Manipulating the DOM exercise.
	 * Exercise programmatically builds navigation,
	 * scrolls to anchors from navigation,
	 * and highlights section in viewport upon scrolling.
	 * 
	 * Dependencies: None
	 * 
	 * JS Version: ES2015/ES6
	 * 
	 * JS Standard: ESlint
	 * 
	*/

	/**
	 * Define Global Variables
	 * 
	*/
	const sections=Array.from(document.querySelectorAll('section'));
	const menuBar=document.querySelector('#navbar__list');
	let noOfItems= sections.length;
	const fragment=document.createDocumentFragment();
	
	/**href='#${sectionLink}'
	 * End Global Variables
	 * Start Helper Functions
	 * 
	*/
	function createListItems(){
		for(section of sections){
			let sectionName=section.getAttribute('data-nav');
	        let sectionLink=section.getAttribute('id');
			 const listItem=document.createElement('li');
		     listItem.innerHTML=`<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;
			 //listItem.addEventListener("click", function(){ alert(sectionName)}); 
			//listItem.addEventListener("click", function(){
				 
				 //alert(sectionName)});
			 //console.log(listItem);
             
			fragment.appendChild(listItem);
		}
		menuBar.appendChild(fragment);
		
		// Scroll to section on link click
		let anchors=document.querySelectorAll('a[href^="#"]');
	  anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
	}
	  
	  
	 /* const links = document.querySelectorAll('.menu__link').h;
	       const scrolling = () => {

	  console.log(links);
    links.forEach(link => {
		
        link.addEventListener('click', () => {
			
            for(i = 1 ; i<= noOfItems ; i++){
                sections[i].addEventListener("click",scrollIntoView());
            }
        });
    });
scrolling();
};*/
         
	    function toggleActiveClass(){
		
        for(section of sections){
			
         //let sec= section.offsetTop;
		let dist = section.getBoundingClientRect();
            if(
	dist.top >= 0 &&
	dist.left >= 0 &&
	dist.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	dist.bottom <= (window.innerHeight || document.documentElement.clientHeight)
             ){
				
               section.classList.add('your-active-class');
	            section.style.backgroundColor='red';
              } 
			  else{section.classList.remove('your-active-class');
			  	    section.style.backgroundColor='lightblue';

			  }
     }
     }
 	//}
	/*function toggleActiveClass(){
		for(section of sections){
				if((section.offsetTop>=0 && section.offsetLeft<=200/*&&section.offsetWidth>=0&&section.offsetHeight>=0)){
					section.classList.remove('your-active-class');
		            section.classList.add('your-active-class');
		//)
		//section.style.backgroundColor='yellow';
		}
		else{section.classList.remove('your-active-class');
		}	
			}
			
		} 
		
	//}*/ 
	/**
	 * End Helper Functions
	 * Begin Main Functions
	 * 
	*/
	
	//scrollIntoView({behaviuor:"smooth"});
		
	//}

	// build the nav
	createListItems();

	// Add class 'active' to section when near top of viewport
	 window.addEventListener('scroll',toggleActiveClass);
	 
	 //  scrolls down to the bottom of the document, button appears
	mybutton = document.getElementById("myBtn");
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		var difference = document.documentElement.scrollHeight - window.innerHeight;
     var scrollposition = document.documentElement.scrollTop;
	 if (difference - scrollposition <= 2)
     {
     
	     //alert("Bottom of Page!"); 
		 mybutton.style.display = "block";
	  } 
	  else {
		mybutton.style.display = "none";
	  }
	}
	 /* if ( document.documentElement.scrollTop > document.body.scrollHeight) {
		mybutton.style.display = "block";
	  } else {
		mybutton.style.display = "none";
	  }
	}*/

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	
	/**
	 * End Main Functions
	 * Begin Events
	 * 
	*/
    