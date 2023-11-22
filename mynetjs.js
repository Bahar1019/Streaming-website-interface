'strict mode'
const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle')
console.log(items)


arrows.forEach((arrow,i,arr)=>{
  const itemnumber = movieLists[i].querySelectorAll('img').length;
  let clickCounter = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  arrow.addEventListener('click',function(){
    clickCounter++;
    if(itemnumber-(4+clickCounter)>= 0){
    movieLists[i].style.transform = `translateX(${
    movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
    }px)`;}
    else{ movieLists[i].style.transform = 'translateX(0)';
    clickCounter = 0;
    }
  });

})

ball.addEventListener('click',function(){
  items.forEach((item)=>{
    item.classList.toggle('active');
  })

  ball.classList.toggle('active')
})