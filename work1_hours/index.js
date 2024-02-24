const hours = +prompt('enter hours');
const seconds = 60;

if(typeof hours === 'number' && !isNaN(hours)){
   let result = hours * seconds;
    alert('In ' + hours + ' hours ' + result + ' seconds');
}else{
    alert('next time enter a number');
    location.reload();
}
