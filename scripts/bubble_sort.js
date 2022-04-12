function Bubble(){
    c_delay = 0;

    for(var i=0; i<array_size-1; i++){
        for(var j=0; j<array_size-i-1; j++){
            div_update(divs[j],div_sizes[j],"yellow"); //color update(yellow)

            if(div_sizes[j]>div_sizes[j+1]){
                div_update(divs[j],div_sizes[j],"red"); //color update(red)
                div_update(divs[j+1],div_sizes[j+1], "red");  //color update(red)

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;

                div_update(divs[j],div_sizes[j], "red"); //height update(red)
                div_update(divs[j+1],div_sizes[j+1], "red"); //height update(red)
            }
            div_update(divs[j],div_sizes[j], "blue"); //color update(blue)
        }
        div_update(divs[j],div_sizes[j],"green"); //color update (green)
    }
    div_update(divs[0],div_sizes[0],"green");  //color update(green)

    enable_buttons();
}