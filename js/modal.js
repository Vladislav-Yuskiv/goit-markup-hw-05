( ( )  =>  { 
  Const  refs  =  { 
    openModalBtn : document . QuerySelector ( '[data-modal-open]' ) , 
    closeModalBtn : document . QuerySelector ( '[data-modal-close]' ) , 
    modal : document . QuerySelector ( '[data-modal]' ) , 
  } ;

  refs . openModalBtn . addEventListener ( 'click' ,  toggleModal ) ; 
  refs . closeModalBtn . addEventListener ( 'click' ,  toggleModal ) ;

  function  toggleModal ( )  { 
    refs . modal . classList . toggle ( 'is-hidden' ) ; 
  } 
} ) ( ) ;