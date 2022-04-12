function Selection_sort(){

    c_delay = 0;

    for(var i=0; i<array_size-1; i++){
        div_update(divs[i],div_sizes[i],"red"); //color update

        index_min = i;

        for(var j=i+1; j<array_size; j++){
            div_update(divs[j],div_sizes[j],"yellow"); //color update

            if(div_sizes[j]<div_sizes[index_min]){
                if(index_min!=i){
                    div_update(divs[index_min],div_sizes[index_min],"blue"); //color update
                }
                index_min = j;
                div_update(divs[index_min],div_sizes[index_min],"red");//color update
            }else{
                div_update(divs[j],div_sizes[j],"blue"); //color update
            }
        }

        if(index_min!=i){
            var temp=div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min],div_sizes[index_min],"red"); //height update
            div_update(divs[i],div_sizes[i],"red");//height update
            div_update(divs[index_min],div_sizes[index_min],"blue"); //color update
        }
        div_update(divs[i],div_sizes[i],"green"); //color update
    }
    div_update(divs[i],div_sizes[i],"green"); //color update

    enable_buttons();
}