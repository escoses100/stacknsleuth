function openroom(room) {
    document.getElementById(room).innerHTML = ""
    var roomcontent = ""
    for (var oneroomobj of maincontent) {
        if (room == 'roomtenbox' && explorecount < 11) {
            roomcontent = "A whisper leaks through the cracks before you can enter.. You have not explored enough..."
        }
        if (room == 'roomtenbox' && explorecount >= 11) {
            document.getElementById('roomtenboxenter').style.display='none'
            document.getElementById('divten').style.display='block'
            roomcontent += oneroomobj.roomtitle + " - " + oneroomobj.roomdescription
            roomcontent += "<br><br>" + oneroomobj.roompuzzle
            roomcontent += "<br>" + "<input id='roomtenanswer' class='bgimg w3-sepia-max w3-center w3-black' ></input>"
            roomcontent += "<br><br>" + "<span class='bgimg w3-sepia-max w3-button w3-center' onclick=makesureanswer()>Attempt Answer</span>"
            document.getElementById(room).innerHTML = roomcontent
            break;
        }
        if (room != 'roomtenbox' && oneroomobj.room == room) {
            roomcontent += oneroomobj.roomtitle + " - " + oneroomobj.roomdescription
            roomcontent += "<br><br>" + oneroomobj.roompuzzle
            roomcontent += "<br>" + "<span class='bgimg w3-sepia-max w3-left' onclick=checkans('" + room + "," + oneroomobj.roompuzzle_opt1_var + "')>" + oneroomobj.roompuzzle_opt1 + "</span>"
            roomcontent += "<br>" + "<span class='bgimg w3-sepia-max w3-center' onclick=checkans('" + room + "," + oneroomobj.roompuzzle_opt2_var + "')>" + oneroomobj.roompuzzle_opt2 + "</span>"
            roomcontent += "<br>" + "<span class='bgimg w3-sepia-max w3-right' onclick=checkans('" + room + "," + oneroomobj.roompuzzle_opt3_var + "')>" + oneroomobj.roompuzzle_opt3 + "</span>"
        }
    }
    document.getElementById(room).innerHTML = roomcontent
}

function checkans(roomandopt) {
    explorecount = explorecount+1
    console.log(explorecount)
    roomcontentans = ""
    for (var oneroomobj of maincontent) {
        if (oneroomobj.room == roomandopt.split(',')[0]) {
            if (oneroomobj.roompuzzle_ans == roomandopt.split(',')[1]) {
                roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message;
            } else {
                roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message_wrong;
            }
        }
    }
    document.getElementById(roomandopt.split(',')[0]).innerHTML = roomcontentans
}

function makesureanswer() {
    document.getElementById('makesurediv').style.display = 'block'
    document.getElementById('makesurediv').innerHTML = 'Are you sure you want to answer:<br><br>'
    document.getElementById('makesurediv').innerHTML += document.getElementById('roomtenanswer').value.toLowerCase()
    document.getElementById('makesurediv').innerHTML += "<br><br>" + "<span class='bgimg w3-sepia-max w3-button w3-center' onclick=checkroomten()>Yes</span>"
    document.getElementById('makesurediv').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<span class='bgimg w3-sepia-max w3-button w3-center' onclick=clearmakesure()>No</span>"
    document.getElementById('makesurediv').innerHTML += '<br><br> **answers are not case sensitive'
}

function clearmakesure() {
    document.getElementById('makesurediv').innerHTML = ''
    document.getElementById('roomtenanswer').value = ''
    document.getElementById('makesurediv').style.display = 'none'
}

function checkroomten() {
        document.getElementById('makesurediv').innerHTML = ''
        document.getElementById('makesurediv').style.display = 'none'
        room = 'roomtenbox'
        roomtenanswerattempt = (document.getElementById('roomtenanswer').value).toLowerCase()
        explorecount = explorecount+1
        console.log(room + ' ' + roomtenanswerattempt)
        roomcontentans = ""
        for (var oneroomobj of maincontent) {
            if (oneroomobj.room == room) {
                if (oneroomobj.roompuzzle_ans.toUpperCase() == roomtenanswerattempt.toUpperCase()) {
                    roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message;
                } else {
                    roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message_wrong;
                }
            }
        }
        document.getElementById(room).innerHTML = roomcontentans
}