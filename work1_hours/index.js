const hours = +prompt('enter hours');
const seconds = 60;

if(hours > 0){
    const result = hours * seconds;
    alert('In ' + hours + ' hours ' + result + ' seconds');
}else{
    alert('next time enter a number');
    location.reload();
}
