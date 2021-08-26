let Row = document.getElementsByClassName("foodQuantity");

function changeColor(str){
    switch(str){
        case 'row-1':
            console.log(Row[0]);
            Row[0].style.color = "#000";
            Row[1].style.color = "#C7C2BA";
            Row[2].style.color = "#C7C2BA";
            Row[3].style.color = "#C7C2BA";
            // Row[0].style.fontSize = "20px";
            break;
        case 'row-2':
            console.log(Row[1]);
            Row[0].style.color = "#C7C2BA";
            Row[1].style.color = "#000";
            Row[2].style.color = "#C7C2BA";
            Row[3].style.color = "#C7C2BA";
            Row[0].style.fontsize = "20px";
            console.log(str);
            break;
        case 'row-3':
            console.log(Row[2]);
            Row[0].style.color = "#C7C2BA";
            Row[1].style.color = "#C7C2BA";
            Row[2].style.color = "#000";
            Row[3].style.color = "#C7C2BA";
            console.log(str);
            break;
        case 'row-4':
            console.log(Row[3]);
            Row[0].style.color = "#C7C2BA";
            Row[1].style.color = "#C7C2BA";
            Row[2].style.color = "#C7C2BA";
            Row[3].style.color = "#000";
            console.log(str);
            break;

    }
}