const data=[
    {
        id:1,
        name:"deepak",
        class:6,
        hindi:67,
        english:76,
        sanskrit:67,
        science:87,
        mathematics:89,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"mohit",
        class:6,
        hindi:67,
        english:76,
        sanskrit:67,
        science:87,
        mathematics:89,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,

    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,

    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,

    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },{
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"rajesh",
        class:12,
        hindi:67,
        english:96,
        sanskrit:57,
        science:87,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,

    },
    {
        id:1,
        name:"mohit",
        class:6,
        hindi:67,
        english:96,
        sanskrit:67,
        science:67,
        mathematics:79,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"deepak",
        class:6,
        hindi:67,
        english:76,
        sanskrit:67,
        science:87,
        mathematics:89,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"deepak",
        class:6,
        hindi:67,
        english:76,
        sanskrit:67,
        science:87,
        mathematics:89,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"deepak",
        class:6,
        hindi:67,
        english:76,
        sanskrit:67,
        science:87,
        mathematics:89,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"deepak",
        class:6,
        hindi:67,
        english:76,
        sanskrit:67,
        science:87,
        mathematics:89,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
    {
        id:1,
        name:"deepak",
        class:6,
        hindi:67,
        english:76,
        sanskrit:67,
        science:87,
        mathematics:89,
        urdu:76,
        drawing:67,
        socialstudy:87,
        gs:89,


    },
]

const tbbody=document.getElementById("table-body");
// console.log(tbbody)
data.forEach((item)=>{
    // console.log(item);
    let tr=document.createElement("tr");
    for(let key in item){
        if(key){
            let td=document.createElement("td");
            // console.log(key);
            td.textContent=item[key];
            tr.appendChild(td);
        }
    }
             tbbody.appendChild(tr);
})

// function search() {
//     let uservalue = document.getElementById("inputbox").value.toUpperCase();
//     const table = document.getElementById("data-table");
//     let tr = table.getElementsByTagName("tr");
//     for(var i=0;i<tr.length; i++){
//         let td=tr[i].getElementsByTagName("td")[1];
//         if(td){
//             let textvalue=td.textContent || td.innerHTML
//             if(textvalue.toUpperCase().indexOf(uservalue)>-1){
//                    tr[i].style.display=""
//             }
//             else{
//                 tr[i].style.display="none"
//             }
//         }

//     }
// };


$(document).ready(function(){
    $("#data-table").dataTable();
});