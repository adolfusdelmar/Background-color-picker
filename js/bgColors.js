var index = 0;

function changeColors(){
    var colors=['red','blue','green','purple','orange'];
    // let javascript know we want to access the first body tag using 0 index
    document.getElementsByTagName('body')[0].style.background=colors[index++];
    
    if(index>colors.length-1)
    index=0;
}