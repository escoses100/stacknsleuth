function openroom(room) {
    document.getElementById(room).innerHTML = ""
    var roomcontent = ""
    var roomcontentname = ""
    var roompeople = []
    for (var oneroomobj of maincontent) {
        if (oneroomobj.person == 'roomonebox') {roompeople[0] = oneroomobj.person_name}
        if (oneroomobj.person == 'roomtwobox') {roompeople[1] = oneroomobj.person_name}
        if (oneroomobj.person == 'roomthreebox') {roompeople[2] = oneroomobj.person_name}
        if (oneroomobj.person == 'roomfourbox') {roompeople[3] = oneroomobj.person_name}
    }
    for (var oneroomobj of maincontent) {
        if (room == 'roomtenbox' && explorecount < 11) {
            roomcontent = "A whisper leaks through the cracks before you can enter.. You have not explored enough..."
        }
        if (oneroomobj.room == room && room == 'roomtenbox' && explorecount >= 11) {
            document.getElementById('roomtenboxenter').style.display='none'
            document.getElementById('divten').style.display='block'
            roomcontent += oneroomobj.roomtitle + " - " + oneroomobj.roomdescription
            roomcontent += "<br><br>" + oneroomobj.roompuzzle
            roomcontent += "<br><br>" + "<input id='roomtenanswer' class='bgimg w3-sepia-max w3-center w3-black' ></input>"
            roomcontent += "<br><br>" + "<span class='bgimg w3-sepia-max w3-button w3-left' onclick=makesureanswer('" + roompeople[0] + "')>Answer with " + roompeople[0] + "</span>"
            roomcontent += "<span class='bgimg w3-sepia-max w3-button w3-right' onclick=makesureanswer('" + roompeople[1] + "')>Answer with " + roompeople[1] + "</span>"
            roomcontent += "<br><br><br>" + "<span class='bgimg w3-sepia-max w3-button w3-left' onclick=makesureanswer('" + roompeople[2] + "')>Answer with " + roompeople[2] + "</span>"
            roomcontent += "<span class='bgimg w3-sepia-max w3-button w3-right' onclick=makesureanswer('" + roompeople[3] + "')>Answer with " + roompeople[3] + "</span>"
            document.getElementById(room).innerHTML = roomcontent
            break;
        }
        if (room != 'roomtenbox' && oneroomobj.room == room) {
            roomcontentname = oneroomobj.roomtitle
            roomcontent += oneroomobj.roomdescription
            roomcontent += "<br><br>" + oneroomobj.roompuzzle + "<br><br>"
            roomcontent += "<br>" + "<span class='bgimg w3-sepia-max w3-left' onclick=checkans('" + room + "," + oneroomobj.roompuzzle_opt1_var + "')>" + oneroomobj.roompuzzle_opt1 + "</span>"
            roomcontent += "<br>" + "<span class='bgimg w3-sepia-max w3-center' onclick=checkans('" + room + "," + oneroomobj.roompuzzle_opt2_var + "')>" + oneroomobj.roompuzzle_opt2 + "</span>"
            roomcontent += "<br>" + "<span class='bgimg w3-sepia-max w3-right' onclick=checkans('" + room + "," + oneroomobj.roompuzzle_opt3_var + "')>" + oneroomobj.roompuzzle_opt3 + "</span>"
        }
    }
    document.getElementById(room).innerHTML = roomcontent
    document.getElementById(room + 'theroomname').innerHTML = roomcontentname
}

function checkans(roomandopt) {
    explorecount = explorecount+1
    console.log(explorecount)
    roomname = roomandopt.split(',')[0]
    roomnamenum = roomname.substring(4, roomname.length-3)
    console.log(roomnamenum)
    roomcontentans = ""
    for (var oneroomobj of maincontent) {
        if (oneroomobj.room == roomname) {
            if (oneroomobj.roompuzzle_ans == roomandopt.split(',')[1]) {
                roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message;
            } else {
                roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message_wrong;
            }
        }
    }
    for (var oneroomobj of maincontent) {
        if (oneroomobj.person == roomname) {
            roomcontentans += "<span style='display:block;text-align:left'><br></br> -- " + oneroomobj.person_name + " " + oneroomobj.person_entry + " .. -- ";
            roomcontentans += "<br>" + oneroomobj.person_description;
            roomcontentans += "<br>" + oneroomobj.person_info1;
            roomcontentans += "<br>" + oneroomobj.person_info2; + "</span>"
        }
    }
    document.getElementById(roomname).innerHTML = roomcontentans // set the answer as page
    document.getElementById('room' + roomnamenum + 'span').classList.add('w3-grayscale-max')// set the picture for that room to grey
}

function makesureanswer(person) {
    document.getElementById('makesurediv').style.display = 'block'
    document.getElementById('makesurediv').innerHTML = 'Are you sure you want to answer:<br><br>'
    document.getElementById('makesurediv').innerHTML += person + '<br>and<br>'
    document.getElementById('makesurediv').innerHTML += document.getElementById('roomtenanswer').value.toLowerCase()
    document.getElementById('makesurediv').innerHTML += "<br><br>" + "<span class='bgimg w3-sepia-max w3-button w3-center' onclick=checkroomten('" + person + "')>Yes</span>"
    document.getElementById('makesurediv').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<span class='bgimg w3-sepia-max w3-button w3-center' onclick=clearmakesure()>No</span>"
    document.getElementById('makesurediv').innerHTML += '<br><br> **answers are not case sensitive'
}

function clearmakesure() {
    document.getElementById('makesurediv').innerHTML = ''
    document.getElementById('roomtenanswer').value = ''
    document.getElementById('makesurediv').style.display = 'none'
}

function checkroomten(person) {
        document.getElementById('makesurediv').innerHTML = ''
        document.getElementById('makesurediv').style.display = 'none'
        room = 'roomtenbox'
        roomtenanswerstring = (document.getElementById('roomtenanswer').value).toLowerCase()
        roomtenanswerattempt = roomtenanswerstring.replace(/\s+/g, '')
        explorecount = explorecount+1
        console.log(room + ' ' + roomtenanswerattempt + ' ' + person)
        roomcontentans = ""
        for (var oneroomobj of maincontent) {
            if (oneroomobj.room == room) {
                if (oneroomobj.roompuzzle_ans.toUpperCase() == roomtenanswerattempt.toUpperCase()) {
                    roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message;
                } else {
                    roomcontentans += "<br></br>" + oneroomobj.roompuzzle_ans_message_wrong;
                }
            }
            if (oneroomobj.person_name == person && oneroomobj.person_end_message) {
                roomcontentans += "<br></br>" + person + " tells you: <br>" + oneroomobj.person_end_message;
            }         
        }
        document.getElementById('divten').style.display='none'
        document.getElementById('mainmansiondiv').style.display = "none"
        document.getElementById('splashdiv').style.display = "block"
        document.getElementById('splashdiv').innerHTML = "<br><br><br><br>" + roomcontentans
        document.getElementById('splashdiv').innerHTML += "<br><br><br><br>" + "<span onclick='location.reload()' class='bgimg w3-sepia-max w3-round-xxlarge w3-button'> Start Over...</span>"
}