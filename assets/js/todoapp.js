
// the below code is to random generate color for work type div

var wt=document.getElementsByClassName('work-type');
function getRandomColor()
{
    var letters='0123456789ABCDEF';
    var color='#';
    for(let  i=0;i<6;i++)
    {
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

for(let i=0;i<wt.length;i++)
{
    wt[i].style.backgroundColor=getRandomColor();
}