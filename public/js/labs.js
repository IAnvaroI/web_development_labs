//start form event handler
function colorHandler(value) {
    document.getElementById("startFormId").style.color = value;
}

// validate start form
function validateForm(e){
    var startForm = document.forms["startFormId"];
    var name = startForm['name'].value;
    var surname = startForm['surname'].value;
    var level = startForm['level'].value;
    var color = startForm['color'].value;
    var birthday = startForm['birthday'].value;
    var pass = startForm['pass'].value;
    var comment = startForm['comment'].value;
    // alert(name + " " + surname + " " + level + " " + color + " " + birthday + " "+  birthday.split('-')[0] + " " + pass + " " + comment);

    if((name.search(/[^A-Za-z]/g)) !== -1 || name === "") {
        e.preventDefault();
        alert("First name must be filled out and consists of letters.");
    }
    else if((surname.search(/[^A-Za-z]/g)) !== -1 || surname === "") {
        e.preventDefault();
        alert("Last name must be filled out and consists of letters.");
    }
    else if(level === "") {
        e.preventDefault();
        alert("Level must be filled out.");
    }
    else if((color.search(/ff0000/g)) !== -1) {
        e.preventDefault();
        alert("Color cannot be a red one.");
    }
    else if(birthday.split('-')[0] < 1900 && birthday.split('-')[0] !== "") {
        e.preventDefault();
        alert("You birthday cannot be earlier than 1900.");
    }
    else if((pass.length < 8 || pass.length > 20) && pass !== "") {
        e.preventDefault();
        alert("Pass can consist of 8-20 symbols.");
    }
    else if(comment.length > 300 && comment !== "") {
        e.preventDefault();
        alert("Comment can consist of 0-300 symbols.");
    }
}

//choosing puzzle event handler
function idChoosing(sel) {
    var id = sel.options[sel.selectedIndex].value;
    $.ajax({
        type: "POST",
        url: "/getPuzzlePhoto",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {id: id},
        success: function (msg) {
            var photo = document.getElementById("photo");
            photo.src = msg;
            // alert(msg);
        },
        error: function () {
            alert("Ajax error");
        }
    });
}
//
// function timer(){
//     var min = 1;
//     var sec = 2;
//
//     document.getElementById("timer").innerText = min.toString() + ":0" + sec.toString();
//     let timerId = setInterval(function(){
//         --sec;
//         (sec < 10)
//             ?document.getElementById("timer").innerText = min.toString() + ":0" + sec.toString()
//             :document.getElementById("timer").innerText = min.toString() + ":" + sec.toString();
//         if(sec === 0 && min !== 0){
//             sec = 60;
//             --min;
//         }
//     }, 1000);
//
//     if(min === 0){
//         setTimeout(() => { clearInterval(timerId);}, sec * 1000);
//     }else{
//         setTimeout(() => { clearInterval(timerId);}, min * 60 * 1000 + sec * 1000);
//     }
// }
