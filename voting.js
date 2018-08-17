// $(document).ready(function () {
//     database.ref('Contestant/A/vote_count').once('value').then(function (snapshot) {
//         $("#div1").html("Contestant1 has got" + snapshot.val() + "votes");
//     })
//     database.ref('Contestant/B/vote_count').once('value').then(function (snapshot) {
//         $("#div2").html("Contestant2 has got" + snapshot.val() + "votes");
//     })
//     database.ref('Contestant/C/vote_count').once('value').then(function (snapshot) {
//         $("#div3").html("Contestant3 has got" + snapshot.val() + "votes");
//     })
//     database.ref('Contestant/D/vote_count').once('value').then(function (snapshot) {
//         $("#div4").html("Contestant4 has got" + snapshot.val() + "votes");
//     })
//     database.ref('Contestant/E/vote_count').once('value').then(function (snapshot) {
//         $("#div5").html("Contestant5 has got" + snapshot.val() + "votes");
//     })
//     var c1;
//     var new1;
//     $("#Contestant1").click(function () {
//         database.ref('Contestant/A/vote_count').once('value').then(function (snapshot) {
//             // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//             // ...
//             c1 = snapshot.val();
//             c1 += 1;
//             new1 = {
//                 vote_count: c1
//             }
//             database.ref('Contestant/A').update(new1);
//         }).then(function () {
//             $("#div1").html("Contestant1 has got" + c1 + "votes");
//         })
//         //var newPostKey = firebase.database().ref().child('A').push().key;
//         // Write the new post's data simultaneously in the posts list and the user's post list.
//         // var updates = {};
//         //updates[ newPostKey] = new1;
//         //firebase.database().ref().update(updates);
//         //var starCountRef = firebase.database().ref('Contestant/A/vote_count');
//         //starCountRef.on('value', function(snapshot) {
//         // });
//     })

//     var c2 ;
//     $("#Contestant2").click(function () {
//         database.ref('Contestant/B/vote_count').once('value').then(function (snapshot) {
//             // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//             // ...
//             c2 = snapshot.val();
//             c2 += 1;
//             new2 = {
//                 vote_count: c2
//             }
//             database.ref('Contestant/B').update(new2);
//         }).then(function () {
//         $("#div2").html("Contestant2 has got" + c2 + "votes");
//     })
// })
//     var c3;
//     $("#Contestant3").click(function () {
//         database.ref('Contestant/C/vote_count').once('value').then(function (snapshot) {
//             // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//             // ...
//             c3 = snapshot.val();
//             c3 += 1;
//             new3 = {
//                 vote_count: c3
//             }
//             database.ref('Contestant/C').update(new3);
//         }).then(function () {
//         $("#div3").html("Contestant3 has got" + c3 + "votes");
//     })
//     })
//     var c4;
//     $("#Contestant4").click(function () {
//         database.ref('Contestant/D/vote_count').once('value').then(function (snapshot) {
//             // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//             // ...
//             c4 = snapshot.val();
//             c4 += 1;
//             new4 = {
//                 vote_count: c4
//             }
//             database.ref('Contestant/D').update(new4);
//         }).then(function () {
//         $("#div4").html("Contestant4 has got  " + c4 + " votes");
//     })
// })
//     var c5;
//     $("#Contestant5").click(function () {
//         database.ref('Contestant/E/vote_count').once('value').then(function (snapshot) {
//             // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//             // ...
//             c5 = snapshot.val();
//             c5 += 1;
//             new5 = {
//                 vote_count: c5
//             }
//             database.ref('Contestant/E').update(new5);
//         }).then(function () {

//         $("#div5").html("Contestant5 has got" + c5 + "votes");
//     })
// })
//     })

//var location1,id,name,count,new1,id,name;
$(document).ready(function () {

    window.setInterval(function(){
        bbb("Contestant/A/vote_count", "#div1", "Contestant1")}, 100);

     window.setInterval(function(){
        bbb("Contestant/B/vote_count", "#div2", "Contestant2")
    }, 100);
        window.setInterval(function(){
            bbb("Contestant/D/vote_count", "#div4", "Contestant4")
        }, 100);
          window.setInterval(function(){
            bbb("Contestant/C/vote_count", "#div3", "Contestant3")
        }, 100);
          window.setInterval(function(){
            bbb("Contestant/E/vote_count", "#div5", "Contestant5")
        }, 100);
    

        $.getJSON('https://api.ipify.org?format=jsonp&callback=getIP', function(data){
            console.log(data);
        });

    function bbb(location1, id, name) {
        database.ref(location1).once('value').then(function (snapshot) {
            $(id).html(name + ":" + snapshot.val() + "votes");
        })
    }

    var count;
    var new1;


    function aaa(location1, location2, id, name) {
        database.ref(location1).once('value').then(function (snapshot) {
            count = snapshot.val();
            count += 1;
            new1 = {
                vote_count: count
            }
            database.ref(location2).update(new1);
        }).then(function () {
            $(id).html(name + ":" + count + "votes");
        })
    }
//    bbb("Contestant/A/vote_count", "#div1", "Contestant1")
    setTimeout(bbb("Contestant/A/vote_count", "#div1", "Contestant1"), 1000);
    $("#Contestant1").click(function () {
        aaa("Contestant/A/vote_count", "Contestant/A", "#div1", "Contestant1");
    })
    $("#Contestant2").click(function () {
        aaa("Contestant/B/vote_count", "Contestant/B", "#div2", "Contestant2");
    })
    $("#Contestant3").click(function () {
        aaa("Contestant/C/vote_count", "Contestant/C", "#div3", "Contestant3");
    })
    $("#Contestant4").click(function () {
        aaa("Contestant/D/vote_count", "Contestant/D", "#div4", "Contestant4");
    })
    $("#Contestant5").click(function () {
        aaa("Contestant/E/vote_count", "Contestant/E", "#div5", "Contestant5");
    })

})
