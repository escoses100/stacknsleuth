// for a local host - python -m SimpleHTTPServer 8000

// filler array
var array500 = Array(500).fill('')
// string splitting and parsing function 
function makechunks(chunkstring) {
    // fix all cap issues
    var capsregex = /\b[A-Z]{2,}\b/g;
    chunkstring = chunkstring.replace(capsregex, function(match) {
        return match.toLowerCase();
        });
    // get spaces between html tags and other stuff before removing.
    chunkstring = chunkstring.replace(/</g, " <");
    chunkstring = chunkstring.replace(/>/g, "> ");
    // remove html tags
    var htmlregex = /(<([^>]+)>)/ig;
    chunkstring = chunkstring.replace(htmlregex, "");
    // break up into chunks
    const chunks = chunkstring.match(/.{1,30}(?= |$)/g); // break up with words
    //console.log(chunks)
    return chunks
}
function checkroomanswer(roomoption,roomanswer,roomyes,roomno) {
    if (roomoption[0] == roomanswer) {
        return [makechunks(roomoption[1]).concat(array500),makechunks(roomyes).concat(array500)]
    }
    if (roomoption[0] != roomanswer) {
        return [makechunks(roomoption[1]).concat(array500),makechunks(roomno).concat(array500)]
    }
}


window.jsPDF = window.jspdf.jsPDF;
function createcardfile(thestoryformdata) {

    var cardscontent = thestoryformdata

    // set room pictures
    var cd_room1 = ma_one
    var cd_room2 = ma_two
    var cd_room3 = ma_three
    var cd_room4 = ma_four
    var cd_room5 = ma_five
    var cd_room6 = ma_six
    var cd_room7 = ma_seven
    var cd_room8 = ma_eight
    var cd_room9 = ma_nine
    var cd_room10 = ma_ten
    var cd_room11 = ma_eleven
    var cd_room12 = ma_twelve

    // get main intro strings
    var introstcharray = makechunks(cardscontent[0].introstatement + cardscontent[0].introchallenge).concat(array500);

    // get person strings
    var person1_5strings = []
    var person2_6strings = []
    var person3_7strings = []
    var person4_8strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
            // room 1
            if (oneroomchunk.person == 'roomonebox') {
                person1_5strings[0] = cardscontent[i].person_name
                person1_5strings[1] = cardscontent[i].person_entry
                person1_5strings[2] = cardscontent[i].person_description
                person1_5strings[3] = cardscontent[i].person_info1
                person1_5strings[4] = cardscontent[i].person_info2
            }
            // room 2
            if (oneroomchunk.person == 'roomtwobox') {
                person2_6strings[0] = cardscontent[i].person_name
                person2_6strings[1] = cardscontent[i].person_entry
                person2_6strings[2] = cardscontent[i].person_description
                person2_6strings[3] = cardscontent[i].person_info1
                person2_6strings[4] = cardscontent[i].person_info2
            } 
            // room 3
            if (oneroomchunk.person == 'roomthreebox') {
                person3_7strings[0] = cardscontent[i].person_name
                person3_7strings[1] = cardscontent[i].person_entry
                person3_7strings[2] = cardscontent[i].person_description
                person3_7strings[3] = cardscontent[i].person_info1
                person3_7strings[4] = cardscontent[i].person_info2
            } 
            // room 4
            if (oneroomchunk.person == 'roomfourbox') {
                person4_8strings[0] = cardscontent[i].person_name
                person4_8strings[1] = cardscontent[i].person_entry
                person4_8strings[2] = cardscontent[i].person_description
                person4_8strings[3] = cardscontent[i].person_info1
                person4_8strings[4] = cardscontent[i].person_info2
            } 
            // room 5
            if (oneroomchunk.person == 'roomfivebox') {
                person1_5strings[5] = cardscontent[i].person_name
                person1_5strings[6] = cardscontent[i].person_entry
                person1_5strings[7] = cardscontent[i].person_info1
                person1_5strings[8] = cardscontent[i].person_info2
                person1_5strings[9] = cardscontent[i].person_end_message
            }
            if (oneroomchunk.person == 'roomsixbox') {
                person2_6strings[5] = cardscontent[i].person_name
                person2_6strings[6] = cardscontent[i].person_entry
                person2_6strings[7] = cardscontent[i].person_info1
                person2_6strings[8] = cardscontent[i].person_info2
                person2_6strings[9] = cardscontent[i].person_end_message
            }
            if (oneroomchunk.person == 'roomsevenbox') {
                person3_7strings[5] = cardscontent[i].person_name
                person3_7strings[6] = cardscontent[i].person_entry
                person3_7strings[7] = cardscontent[i].person_info1
                person3_7strings[8] = cardscontent[i].person_info2
                person3_7strings[9] = cardscontent[i].person_end_message
            }
            if (oneroomchunk.person == 'roomeightbox') {
                person4_8strings[5] = cardscontent[i].person_name
                person4_8strings[6] = cardscontent[i].person_entry
                person4_8strings[7] = cardscontent[i].person_info1
                person4_8strings[8] = cardscontent[i].person_info2
                person4_8strings[9] = cardscontent[i].person_end_message
            }

        }
    // end get person strings
    // create person arrays
    var encounterfirstarray1_5 = makechunks(person1_5strings[1] + person1_5strings[2] + person1_5strings[3] + person1_5strings[4]).concat(array500);
    var encounterfirstarray2_6 = makechunks(person2_6strings[1] + person2_6strings[2] + person2_6strings[3] + person2_6strings[4]).concat(array500);
    var encounterfirstarray3_7 = makechunks(person3_7strings[1] + person3_7strings[2] + person3_7strings[3] + person3_7strings[4]).concat(array500);
    var encounterfirstarray4_8 = makechunks(person4_8strings[1] + person4_8strings[2] + person4_8strings[3] + person4_8strings[4]).concat(array500);

    var encountersecondarray1_5 = makechunks(person1_5strings[5] + person1_5strings[6] + person1_5strings[7] + person1_5strings[8]).concat(array500);
    var encountersecondarray2_6 = makechunks(person2_6strings[5] + person2_6strings[6] + person2_6strings[7] + person2_6strings[8]).concat(array500);
    var encountersecondarray3_7 = makechunks(person3_7strings[5] + person3_7strings[6] + person3_7strings[7] + person3_7strings[8]).concat(array500);
    var encountersecondarray4_8 = makechunks(person4_8strings[5] + person4_8strings[6] + person4_8strings[7] + person4_8strings[8]).concat(array500);

    var encounterendarray1_5 = makechunks(person1_5strings[9]).concat(array500);
    var encounterendarray2_6 = makechunks(person2_6strings[9]).concat(array500);
    var encounterendarray3_7 = makechunks(person3_7strings[9]).concat(array500);
    var encounterendarray4_8 = makechunks(person4_8strings[9]).concat(array500);
    // end create person arrays
    
    // get room 10 strings
    var room10strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomtenbox') {
            room10strings[0] = cardscontent[i].roomtitle
            room10strings[1] = cardscontent[i].roomdescription
            room10strings[2] = cardscontent[i].roompuzzle
            room10strings[3] = cardscontent[i].roompuzzle_ans
            room10strings[4] = cardscontent[i].roompuzzle_ans_message
            room10strings[5] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 10 strings
    // chunked string arrays for room 10 
    var rm10descpuzzlearray = makechunks(room10strings[1] + room10strings[2]).concat(array500);
    var rm10answerarray = makechunks(room10strings[4]).concat(array500);
    var rm10wrongarray = makechunks(room10strings[5]).concat(array500);
    // end chunked room strings for room 10

    // get room 1 strings
    var room1strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomonebox') {
            room1strings[0] = cardscontent[i].roomtitle
            room1strings[1] = cardscontent[i].roomdescription
            room1strings[2] = cardscontent[i].roompuzzle
            room1strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room1strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room1strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room1strings[6] = cardscontent[i].roompuzzle_ans
            room1strings[7] = cardscontent[i].roompuzzle_ans_message
            room1strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 1 strings
    // chunked string arrays for room 1 
    var rm1descpuzzlearray = makechunks(room1strings[1] + room1strings[2]).concat(array500);
    var rm1ans1array = checkroomanswer(room1strings[3],room1strings[6],room1strings[7],room1strings[8]);
    var rm1ans2array = checkroomanswer(room1strings[4],room1strings[6],room1strings[7],room1strings[8]);
    var rm1ans3array = checkroomanswer(room1strings[5],room1strings[6],room1strings[7],room1strings[8]);
    // end chunked room strings for room 1 - option is [0] and answer is [1]

    // get room 2 strings
    var room2strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomtwobox') {
            room2strings[0] = cardscontent[i].roomtitle
            room2strings[1] = cardscontent[i].roomdescription
            room2strings[2] = cardscontent[i].roompuzzle
            room2strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room2strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room2strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room2strings[6] = cardscontent[i].roompuzzle_ans
            room2strings[7] = cardscontent[i].roompuzzle_ans_message
            room2strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 2 strings
    // chunked string arrays for room 2 
    var rm2descpuzzlearray = makechunks(room2strings[1] + room2strings[2]).concat(array500);
    var rm2ans1array = checkroomanswer(room2strings[3],room2strings[6],room2strings[7],room2strings[8]);
    var rm2ans2array = checkroomanswer(room2strings[4],room2strings[6],room2strings[7],room2strings[8]);
    var rm2ans3array = checkroomanswer(room2strings[5],room2strings[6],room2strings[7],room2strings[8]);
    // end chunked room strings for room 2 - option is [0] and answer is [1]

    // get room 3 strings
        var room3strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomthreebox') {
            room3strings[0] = cardscontent[i].roomtitle
            room3strings[1] = cardscontent[i].roomdescription
            room3strings[2] = cardscontent[i].roompuzzle
            room3strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room3strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room3strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room3strings[6] = cardscontent[i].roompuzzle_ans
            room3strings[7] = cardscontent[i].roompuzzle_ans_message
            room3strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 3 strings
    // chunked string arrays for room 3 
    var rm3descpuzzlearray = makechunks(room3strings[1] + room3strings[2]).concat(array500);
    var rm3ans1array = checkroomanswer(room3strings[3],room3strings[6],room3strings[7],room3strings[8]);
    var rm3ans2array = checkroomanswer(room3strings[4],room3strings[6],room3strings[7],room3strings[8]);
    var rm3ans3array = checkroomanswer(room3strings[5],room3strings[6],room3strings[7],room3strings[8]);
    // end chunked room strings for room 3 - option is [0] and answer is [1]

    // get room 4 strings
    var room4strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomfourbox') {
            room4strings[0] = cardscontent[i].roomtitle
            room4strings[1] = cardscontent[i].roomdescription
            room4strings[2] = cardscontent[i].roompuzzle
            room4strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room4strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room4strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room4strings[6] = cardscontent[i].roompuzzle_ans
            room4strings[7] = cardscontent[i].roompuzzle_ans_message
            room4strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 4 strings
    // chunked string arrays for room 4 
    var rm4descpuzzlearray = makechunks(room4strings[1] + room4strings[2]).concat(array500);
    var rm4ans1array = checkroomanswer(room4strings[3],room4strings[6],room4strings[7],room4strings[8]);
    var rm4ans2array = checkroomanswer(room4strings[4],room4strings[6],room4strings[7],room4strings[8]);
    var rm4ans3array = checkroomanswer(room4strings[5],room4strings[6],room4strings[7],room4strings[8]);
    // end chunked room strings for room 4 - option is [0] and answer is [1]

    // get room 5 strings
    var room5strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomfivebox') {
            room5strings[0] = cardscontent[i].roomtitle
            room5strings[1] = cardscontent[i].roomdescription
            room5strings[2] = cardscontent[i].roompuzzle
            room5strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room5strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room5strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room5strings[6] = cardscontent[i].roompuzzle_ans
            room5strings[7] = cardscontent[i].roompuzzle_ans_message
            room5strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 5 strings
    // chunked string arrays for room 3 
    var rm5descpuzzlearray = makechunks(room5strings[1] + room5strings[2]).concat(array500);
    var rm5ans1array = checkroomanswer(room5strings[3],room5strings[6],room5strings[7],room5strings[8]);
    var rm5ans2array = checkroomanswer(room5strings[4],room5strings[6],room5strings[7],room5strings[8]);
    var rm5ans3array = checkroomanswer(room5strings[5],room5strings[6],room5strings[7],room5strings[8]);
    // end chunked room strings for room 5 - option is [0] and answer is [1]

    // get room 6 strings
    var room6strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomsixbox') {
            room6strings[0] = cardscontent[i].roomtitle
            room6strings[1] = cardscontent[i].roomdescription
            room6strings[2] = cardscontent[i].roompuzzle
            room6strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room6strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room6strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room6strings[6] = cardscontent[i].roompuzzle_ans
            room6strings[7] = cardscontent[i].roompuzzle_ans_message
            room6strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 6 strings
    // chunked string arrays for room 6 
    var rm6descpuzzlearray = makechunks(room6strings[1] + room6strings[2]).concat(array500);
    var rm6ans1array = checkroomanswer(room6strings[3],room6strings[6],room6strings[7],room6strings[8]);
    var rm6ans2array = checkroomanswer(room6strings[4],room6strings[6],room6strings[7],room6strings[8]);
    var rm6ans3array = checkroomanswer(room6strings[5],room6strings[6],room6strings[7],room6strings[8]);
    // end chunked room strings for room 6 - option is [0] and answer is [1]

    // get room 7 strings
    var room7strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomsevenbox') {
            room7strings[0] = cardscontent[i].roomtitle
            room7strings[1] = cardscontent[i].roomdescription
            room7strings[2] = cardscontent[i].roompuzzle
            room7strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room7strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room7strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room7strings[6] = cardscontent[i].roompuzzle_ans
            room7strings[7] = cardscontent[i].roompuzzle_ans_message
            room7strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 7 strings
    // chunked string arrays for room 7 
    var rm7descpuzzlearray = makechunks(room7strings[1] + room7strings[2]).concat(array500);
    var rm7ans1array = checkroomanswer(room7strings[3],room7strings[6],room7strings[7],room7strings[8]);
    var rm7ans2array = checkroomanswer(room7strings[4],room7strings[6],room7strings[7],room7strings[8]);
    var rm7ans3array = checkroomanswer(room7strings[5],room7strings[6],room7strings[7],room7strings[8]);
    // end chunked room strings for room 7 - option is [0] and answer is [1]

    // get room 8 strings
    var room8strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomeightbox') {
            room8strings[0] = cardscontent[i].roomtitle
            room8strings[1] = cardscontent[i].roomdescription
            room8strings[2] = cardscontent[i].roompuzzle
            room8strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room8strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room8strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room8strings[6] = cardscontent[i].roompuzzle_ans
            room8strings[7] = cardscontent[i].roompuzzle_ans_message
            room8strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 8 strings
    // chunked string arrays for room 8 
    var rm8descpuzzlearray = makechunks(room8strings[1] + room8strings[2]).concat(array500);
    var rm8ans1array = checkroomanswer(room8strings[3],room8strings[6],room8strings[7],room8strings[8]);
    var rm8ans2array = checkroomanswer(room8strings[4],room8strings[6],room8strings[7],room8strings[8]);
    var rm8ans3array = checkroomanswer(room8strings[5],room8strings[6],room8strings[7],room8strings[8]);
    // end chunked room strings for room 8 - option is [0] and answer is [1]

    // get room 9 strings
    var room9strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomninebox') {
            room9strings[0] = cardscontent[i].roomtitle
            room9strings[1] = cardscontent[i].roomdescription
            room9strings[2] = cardscontent[i].roompuzzle
            room9strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room9strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room9strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room9strings[6] = cardscontent[i].roompuzzle_ans
            room9strings[7] = cardscontent[i].roompuzzle_ans_message
            room9strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 9 strings
    // chunked string arrays for room 9 
    var rm9descpuzzlearray = makechunks(room9strings[1] + room9strings[2]).concat(array500);
    var rm9ans1array = checkroomanswer(room9strings[3],room9strings[6],room9strings[7],room9strings[8]);
    var rm9ans2array = checkroomanswer(room9strings[4],room9strings[6],room9strings[7],room9strings[8]);
    var rm9ans3array = checkroomanswer(room9strings[5],room9strings[6],room9strings[7],room9strings[8]);
    // end chunked room strings for room 9 - option is [0] and answer is [1]

    // get room 11 strings
    var room11strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomelevenbox') {
            room11strings[0] = cardscontent[i].roomtitle
            room11strings[1] = cardscontent[i].roomdescription
            room11strings[2] = cardscontent[i].roompuzzle
            room11strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room11strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room11strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room11strings[6] = cardscontent[i].roompuzzle_ans
            room11strings[7] = cardscontent[i].roompuzzle_ans_message
            room11strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 11 strings
    // chunked string arrays for room 11 
    var rm11descpuzzlearray = makechunks(room11strings[1] + room11strings[2]).concat(array500);
    var rm11ans1array = checkroomanswer(room11strings[3],room11strings[6],room11strings[7],room11strings[8]);
    var rm11ans2array = checkroomanswer(room11strings[4],room11strings[6],room11strings[7],room11strings[8]);
    var rm11ans3array = checkroomanswer(room11strings[5],room11strings[6],room11strings[7],room11strings[8]);
    // end chunked room strings for room 11 - option is [0] and answer is [1]

    // get room 12 strings
    var room12strings = []
    for (const [i, oneroomchunk] of cardscontent.entries()) {
        if (oneroomchunk.room == 'roomtwelvebox') {
            room12strings[0] = cardscontent[i].roomtitle
            room12strings[1] = cardscontent[i].roomdescription
            room12strings[2] = cardscontent[i].roompuzzle
            room12strings[3] = ['1',cardscontent[i].roompuzzle_opt1]
            room12strings[4] = ['2',cardscontent[i].roompuzzle_opt2]
            room12strings[5] = ['3',cardscontent[i].roompuzzle_opt3]
            room12strings[6] = cardscontent[i].roompuzzle_ans
            room12strings[7] = cardscontent[i].roompuzzle_ans_message
            room12strings[8] = cardscontent[i].roompuzzle_ans_message_wrong
        }
    } // end get room 12 strings
    // chunked string arrays for room 12 
    var rm12descpuzzlearray = makechunks(room12strings[1] + room12strings[2]).concat(array500);
    var rm12ans1array = checkroomanswer(room12strings[3],room12strings[6],room12strings[7],room12strings[8]);
    var rm12ans2array = checkroomanswer(room12strings[4],room12strings[6],room12strings[7],room12strings[8]);
    var rm12ans3array = checkroomanswer(room12strings[5],room12strings[6],room12strings[7],room12strings[8]);
    // end chunked room strings for room 12 - option is [0] and answer is [1]

var doc = new jsPDF();

// set font
// console.log('Show all font in jsPDF',doc.getFontList());
//doc.setFont('myoldrem', 'normal');
//doc.setFont('atwriter', 'normal');
doc.setFont('OldNewspaperTypes', 'normal');

// intro page

doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - main intro
doc.setFontSize(10);
doc.text("00", 6, 10); // top left page number
doc.setFontSize(11);
doc.text(14, 10, "Instructions"); // Instructions one
doc.line(5, 12, 70, 12);
doc.setFontSize(11);
doc.text("Instruction's text", 6, 16);
doc.text("Instructions text", 6, 20);
doc.text("Instructions text", 6, 24);
doc.text("Instructions text", 6, 28);
doc.text("Instructions text", 6, 32);
doc.text("Instructions text", 6, 36);
doc.text("Instructions text", 6, 40);
doc.text("Instructions text", 6, 44);
doc.text("Instructions text", 6, 48);
doc.text("Instructions text", 6, 52);
doc.text("Instructions text", 6, 56);
doc.text("Instructions text", 6, 60);
doc.text("Instructions text", 6, 64);
doc.text("Instructions text", 6, 68);
doc.text("Instructions text", 6, 72);
doc.text("Instructions text", 6, 76);
doc.text("Instructions text", 6, 80);
doc.text("Instructions text", 6, 84);
doc.text("Instructions text", 6, 88);
doc.text("Instructions text", 6, 92);
doc.text("Instructions text", 6, 96);


doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - instructions two
doc.setFontSize(10);
doc.text("00", 74, 10); // top middle page number
doc.setFontSize(11);
doc.text(80, 10, "Instructions");
doc.line(72, 12, 137, 12);
doc.setFontSize(11);
doc.text("Instructions text", 74, 24);
doc.text("Instructions text", 74, 28);
doc.text("Instructions text", 74, 32);
doc.text("Instructions text", 74, 36);
doc.text("Instructions text", 74, 40);
doc.text("Instructions text", 74, 44);
doc.text("Instructions text", 74, 48);
doc.text("Instructions text", 74, 52);
doc.text("Instructions text", 74, 56);
doc.text("Instructions text", 74, 60);
doc.text("Instructions text", 74, 64);
doc.text("Instructions text", 74, 68);
doc.text("Instructions text", 74, 72);
doc.text("Instructions text", 74, 76);
doc.text("Instructions text", 74, 80);
doc.text("Instructions text", 74, 84);
doc.text("Instructions text", 74, 88);
doc.text("Instructions text", 74, 92);
doc.text("Instructions text", 74, 96);

doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - instructions
doc.setFontSize(10);
doc.text("00", 142, 10); // top right page number
doc.setFontSize(11);
doc.text(148, 10, "Instructions");
doc.line(139, 12, 204, 12);
doc.setFontSize(11);
doc.text("Instructions text", 142, 24);
doc.text("Instructions text", 142, 28);
doc.text("Instructions text", 142, 32);
doc.text("Instructions text", 142, 36);
doc.text("Instructions text", 142, 40);
doc.text("Instructions text", 142, 44);
doc.text("Instructions text", 142, 48);
doc.text("Instructions text", 142, 52);
doc.text("Instructions text", 142, 56);
doc.text("Instructions text", 142, 60);
doc.text("Instructions text", 142, 64);
doc.text("Instructions text", 142, 68);
doc.text("Instructions text", 142, 72);
doc.text("Instructions text", 142, 76);
doc.text("Instructions text", 142, 80);
doc.text("Instructions text", 142, 84);
doc.text("Instructions text", 142, 88);
doc.text("Instructions text", 142, 92);
doc.text("Instructions text", 142, 96);

doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - main intro
doc.setFontSize(10);
doc.text("00", 6, 105); // middle left page number
doc.setFontSize(11);
doc.text(14, 105, cardscontent[0].intro); // main intro
doc.line(5, 107, 70, 107);
doc.setFontSize(11);
console.log(cardscontent[0].intro)
doc.text(introstcharray[0], 6, 116);
doc.text(introstcharray[1], 6, 120);
doc.text(introstcharray[2], 6, 124);
doc.text(introstcharray[3], 6, 128);
doc.text(introstcharray[4], 6, 132);
doc.text(introstcharray[5], 6, 136);
doc.text(introstcharray[6], 6, 140);
doc.text(introstcharray[7], 6, 144);
doc.text(introstcharray[8], 6, 148);
doc.text(introstcharray[9], 6, 152);
doc.text(introstcharray[10], 6, 156);
doc.text(introstcharray[11], 6, 160);
doc.text(introstcharray[12], 6, 164);
doc.text(introstcharray[13], 6, 168);
doc.text(introstcharray[14], 6, 172);
doc.text(introstcharray[15], 6, 176);
doc.text(introstcharray[16], 6, 180);
doc.text(introstcharray[17], 6, 184);
if (introstcharray[18] == '') { doc.text('Begin Investigating...', 6, 188); }
if (introstcharray[18] != '') { doc.text(introstcharray[18], 6, 188); }

doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - intro cont
doc.setFontSize(10);
doc.text("00", 74, 105); // middle middle page number
doc.setFontSize(11);
doc.text(80, 105, cardscontent[0].intro);
doc.line(72, 107, 137, 107);
doc.setFontSize(11);
doc.text(introstcharray[19], 74, 116);
doc.text(introstcharray[20], 74, 120);
doc.text(introstcharray[21], 74, 124);
doc.text(introstcharray[22], 74, 128);
doc.text(introstcharray[23], 74, 132);
doc.text(introstcharray[24], 74, 136);
doc.text(introstcharray[25], 74, 140);
doc.text(introstcharray[26], 74, 144);
doc.text(introstcharray[27], 74, 148);
doc.text(introstcharray[28], 74, 152);
doc.text(introstcharray[29], 74, 156);
doc.text(introstcharray[30], 74, 160);
doc.text(introstcharray[31], 74, 164);
doc.text(introstcharray[32], 74, 168);
doc.text(introstcharray[33], 74, 172);
doc.text(introstcharray[34], 74, 176);
doc.text(introstcharray[35], 74, 180);
doc.text(introstcharray[36], 74, 184);
if (introstcharray[37] == '') { doc.text('Begin Investigating...', 74, 188); }
if (introstcharray[37] != '') { doc.text(introstcharray[37], 74, 188); }

doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 10 person answ
doc.setFontSize(10);
doc.text("00", 142, 105); // top right page number
doc.setFontSize(11);
doc.text(148, 105, cardscontent[0].intro);
doc.line(139, 107, 204, 107);
doc.setFontSize(11);
doc.text(introstcharray[38], 142, 116);
doc.text(introstcharray[39], 142, 120);
doc.text(introstcharray[40], 142, 124);
doc.text(introstcharray[41], 142, 128);
doc.text(introstcharray[42], 142, 132);
doc.text(introstcharray[43], 142, 136);
doc.text(introstcharray[44], 142, 140);
doc.text(introstcharray[45], 142, 144);
doc.text(introstcharray[46], 142, 148);
doc.text(introstcharray[47], 142, 152);
doc.text(introstcharray[48], 142, 156);
doc.text(introstcharray[49], 142, 160);
doc.text(introstcharray[50], 142, 164);
doc.text(introstcharray[51], 142, 168);
doc.text(introstcharray[52], 142, 172);
doc.text(introstcharray[53], 142, 176);
doc.text(introstcharray[54], 142, 180);
doc.text(introstcharray[55], 142, 184);
if (introstcharray[56] == '') { doc.text('Begin Investigating...', 142, 188); }
if (introstcharray[56] != '') { doc.text(introstcharray[56], 142, 188); }

doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 10 description cont.
doc.setFontSize(11);
doc.text(14, 206, 'For notes...');


doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle - room 10 wrong answer
doc.setFontSize(11);
doc.text(80, 206, 'For notes...');


doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - person answer 
doc.setFontSize(11);
doc.text(144, 206, 'For notes...');


if (cardscontent[0].stacknumber > 6) {

        doc.addPage(); // add room 1

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 1 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room1strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room1, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 1 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room1strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm1ans1array[0][0]);
        doc.text(80, 30, rm1ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 1 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room1strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm1ans1array[0][0]);
        doc.text(144, 30, rm1ans1array[0][1]);
        doc.text(rm1ans1array[1][0], 142, 36);
        doc.text(rm1ans1array[1][1], 142, 40);
        doc.text(rm1ans1array[1][2], 142, 44);
        doc.text(rm1ans1array[1][3], 142, 48);
        doc.text(rm1ans1array[1][4], 142, 52);
        doc.text(rm1ans1array[1][5], 142, 56);
        doc.text(rm1ans1array[1][6], 142, 60);
        doc.text(rm1ans1array[1][7], 142, 64);
        doc.text(rm1ans1array[1][8], 142, 68);
        doc.text(rm1ans1array[1][9], 142, 72);
        doc.text(rm1ans1array[1][10], 142, 76);
        doc.text(rm1ans1array[1][11], 142, 80);
        doc.text(rm1ans1array[1][12], 142, 84);
        doc.text(rm1ans1array[1][13], 142, 88);
        doc.text(rm1ans1array[1][14], 142, 92);
        doc.text(rm1ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 1 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room1strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm1descpuzzlearray[0], 6, 116);
        doc.text(rm1descpuzzlearray[1], 6, 120);
        doc.text(rm1descpuzzlearray[2], 6, 124);
        doc.text(rm1descpuzzlearray[3], 6, 128);
        doc.text(rm1descpuzzlearray[4], 6, 132);
        doc.text(rm1descpuzzlearray[5], 6, 136);
        doc.text(rm1descpuzzlearray[6], 6, 140);
        doc.text(rm1descpuzzlearray[7], 6, 144);
        doc.text(rm1descpuzzlearray[8], 6, 148);
        doc.text(rm1descpuzzlearray[9], 6, 152);
        doc.text(rm1descpuzzlearray[10], 6, 156);
        doc.text(rm1descpuzzlearray[11], 6, 160);
        doc.text(rm1descpuzzlearray[12], 6, 164);
        doc.text(rm1descpuzzlearray[13], 6, 168);
        doc.text(rm1descpuzzlearray[14], 6, 172);
        doc.text(rm1descpuzzlearray[15], 6, 176);
        doc.text(rm1descpuzzlearray[16], 6, 180);
        doc.text(rm1descpuzzlearray[17], 6, 184);
        doc.text(rm1descpuzzlearray[18], 6, 188);
        doc.text(rm1descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 1 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room1strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm1ans2array[0][0]);
        doc.text(80, 124, rm1ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 1 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room1strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm1ans2array[0][0]);
        doc.text(144, 124, rm1ans2array[0][1]);
        doc.text(rm1ans2array[1][0], 142, 130);
        doc.text(rm1ans2array[1][1], 142, 134);
        doc.text(rm1ans2array[1][2], 142, 138);
        doc.text(rm1ans2array[1][3], 142, 142);
        doc.text(rm1ans2array[1][4], 142, 146);
        doc.text(rm1ans2array[1][5], 142, 150);
        doc.text(rm1ans2array[1][6], 142, 154);
        doc.text(rm1ans2array[1][7], 142, 158);
        doc.text(rm1ans2array[1][8], 142, 162);
        doc.text(rm1ans2array[1][9], 142, 166);
        doc.text(rm1ans2array[1][10], 142, 170);
        doc.text(rm1ans2array[1][11], 142, 174);
        doc.text(rm1ans2array[1][12], 142, 178);
        doc.text(rm1ans2array[1][13], 142, 182);
        doc.text(rm1ans2array[1][14], 142, 186);
        doc.text(rm1ans2array[1][15], 142, 190);
        doc.text(rm1ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 1 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room1strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 1 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room1strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm1ans3array[0][0]);
        doc.text(80, 224, rm1ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 1 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room1strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm1ans3array[0][0]);
        doc.text(144, 224, rm1ans3array[0][1]);
        doc.text(rm1ans3array[1][0], 142, 228);
        doc.text(rm1ans3array[1][1], 142, 232);
        doc.text(rm1ans3array[1][2], 142, 236);
        doc.text(rm1ans3array[1][3], 142, 240);
        doc.text(rm1ans3array[1][4], 142, 244);
        doc.text(rm1ans3array[1][5], 142, 248);
        doc.text(rm1ans3array[1][6], 142, 252);
        doc.text(rm1ans3array[1][7], 142, 256);
        doc.text(rm1ans3array[1][8], 142, 260);
        doc.text(rm1ans3array[1][9], 142, 264);
        doc.text(rm1ans3array[1][10], 142, 268);
        doc.text(rm1ans3array[1][11], 142, 272);
        doc.text(rm1ans3array[1][12], 142, 276);
        doc.text(rm1ans3array[1][13], 142, 280);
        doc.text(rm1ans3array[1][14], 142, 284);
        doc.text(rm1ans3array[1][15], 142, 288);

} // end add room 1

if (cardscontent[0].stacknumber > 4) {

        doc.addPage(); // add room 2

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 2 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room2strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room2, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 2 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room2strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm2ans1array[0][0]);
        doc.text(80, 30, rm2ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 2 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room2strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm2ans1array[0][0]);
        doc.text(144, 30, rm2ans1array[0][1]);
        doc.text(rm2ans1array[1][0], 142, 36);
        doc.text(rm2ans1array[1][1], 142, 40);
        doc.text(rm2ans1array[1][2], 142, 44);
        doc.text(rm2ans1array[1][3], 142, 48);
        doc.text(rm2ans1array[1][4], 142, 52);
        doc.text(rm2ans1array[1][5], 142, 56);
        doc.text(rm2ans1array[1][6], 142, 60);
        doc.text(rm2ans1array[1][7], 142, 64);
        doc.text(rm2ans1array[1][8], 142, 68);
        doc.text(rm2ans1array[1][9], 142, 72);
        doc.text(rm2ans1array[1][10], 142, 76);
        doc.text(rm2ans1array[1][11], 142, 80);
        doc.text(rm2ans1array[1][12], 142, 84);
        doc.text(rm2ans1array[1][13], 142, 88);
        doc.text(rm2ans1array[1][14], 142, 92);
        doc.text(rm2ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 2 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room2strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm2descpuzzlearray[0], 6, 116);
        doc.text(rm2descpuzzlearray[1], 6, 120);
        doc.text(rm2descpuzzlearray[2], 6, 124);
        doc.text(rm2descpuzzlearray[3], 6, 128);
        doc.text(rm2descpuzzlearray[4], 6, 132);
        doc.text(rm2descpuzzlearray[5], 6, 136);
        doc.text(rm2descpuzzlearray[6], 6, 140);
        doc.text(rm2descpuzzlearray[7], 6, 144);
        doc.text(rm2descpuzzlearray[8], 6, 148);
        doc.text(rm2descpuzzlearray[9], 6, 152);
        doc.text(rm2descpuzzlearray[10], 6, 156);
        doc.text(rm2descpuzzlearray[11], 6, 160);
        doc.text(rm2descpuzzlearray[12], 6, 164);
        doc.text(rm2descpuzzlearray[13], 6, 168);
        doc.text(rm2descpuzzlearray[14], 6, 172);
        doc.text(rm2descpuzzlearray[15], 6, 176);
        doc.text(rm2descpuzzlearray[16], 6, 180);
        doc.text(rm2descpuzzlearray[17], 6, 184);
        doc.text(rm2descpuzzlearray[18], 6, 188);
        doc.text(rm2descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 2 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room2strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm2ans2array[0][0]);
        doc.text(80, 124, rm2ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 2 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room2strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm2ans2array[0][0]);
        doc.text(144, 124, rm2ans2array[0][1]);
        doc.text(rm2ans2array[1][0], 142, 130);
        doc.text(rm2ans2array[1][1], 142, 134);
        doc.text(rm2ans2array[1][2], 142, 138);
        doc.text(rm2ans2array[1][3], 142, 142);
        doc.text(rm2ans2array[1][4], 142, 146);
        doc.text(rm2ans2array[1][5], 142, 150);
        doc.text(rm2ans2array[1][6], 142, 154);
        doc.text(rm2ans2array[1][7], 142, 158);
        doc.text(rm2ans2array[1][8], 142, 162);
        doc.text(rm2ans2array[1][9], 142, 166);
        doc.text(rm2ans2array[1][10], 142, 170);
        doc.text(rm2ans2array[1][11], 142, 174);
        doc.text(rm2ans2array[1][12], 142, 178);
        doc.text(rm2ans2array[1][13], 142, 182);
        doc.text(rm2ans2array[1][14], 142, 186);
        doc.text(rm2ans2array[1][15], 142, 190);
        doc.text(rm2ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 2 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room2strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 2 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room2strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm2ans3array[0][0]);
        doc.text(80, 224, rm2ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 2 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room2strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm2ans3array[0][0]);
        doc.text(144, 224, rm2ans3array[0][1]);
        doc.text(rm2ans3array[1][0], 142, 228);
        doc.text(rm2ans3array[1][1], 142, 232);
        doc.text(rm2ans3array[1][2], 142, 236);
        doc.text(rm2ans3array[1][3], 142, 240);
        doc.text(rm2ans3array[1][4], 142, 244);
        doc.text(rm2ans3array[1][5], 142, 248);
        doc.text(rm2ans3array[1][6], 142, 252);
        doc.text(rm2ans3array[1][7], 142, 256);
        doc.text(rm2ans3array[1][8], 142, 260);
        doc.text(rm2ans3array[1][9], 142, 264);
        doc.text(rm2ans3array[1][10], 142, 268);
        doc.text(rm2ans3array[1][11], 142, 272);
        doc.text(rm2ans3array[1][12], 142, 276);
        doc.text(rm2ans3array[1][13], 142, 280);
        doc.text(rm2ans3array[1][14], 142, 284);
        doc.text(rm2ans3array[1][15], 142, 288);

} // end add room 2

if (cardscontent[0].stacknumer > 4) {

        doc.addPage(); // add room 3

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 3 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room3strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room3, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 3 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room3strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm3ans1array[0][0]);
        doc.text(80, 30, rm3ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 3 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room3strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm3ans1array[0][0]);
        doc.text(144, 30, rm3ans1array[0][1]);
        doc.text(rm3ans1array[1][0], 142, 36);
        doc.text(rm3ans1array[1][1], 142, 40);
        doc.text(rm3ans1array[1][2], 142, 44);
        doc.text(rm3ans1array[1][3], 142, 48);
        doc.text(rm3ans1array[1][4], 142, 52);
        doc.text(rm3ans1array[1][5], 142, 56);
        doc.text(rm3ans1array[1][6], 142, 60);
        doc.text(rm3ans1array[1][7], 142, 64);
        doc.text(rm3ans1array[1][8], 142, 68);
        doc.text(rm3ans1array[1][9], 142, 72);
        doc.text(rm3ans1array[1][10], 142, 76);
        doc.text(rm3ans1array[1][11], 142, 80);
        doc.text(rm3ans1array[1][12], 142, 84);
        doc.text(rm3ans1array[1][13], 142, 88);
        doc.text(rm3ans1array[1][14], 142, 92);
        doc.text(rm3ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 3 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room3strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm3descpuzzlearray[0], 6, 116);
        doc.text(rm3descpuzzlearray[1], 6, 120);
        doc.text(rm3descpuzzlearray[2], 6, 124);
        doc.text(rm3descpuzzlearray[3], 6, 128);
        doc.text(rm3descpuzzlearray[4], 6, 132);
        doc.text(rm3descpuzzlearray[5], 6, 136);
        doc.text(rm3descpuzzlearray[6], 6, 140);
        doc.text(rm3descpuzzlearray[7], 6, 144);
        doc.text(rm3descpuzzlearray[8], 6, 148);
        doc.text(rm3descpuzzlearray[9], 6, 152);
        doc.text(rm3descpuzzlearray[10], 6, 156);
        doc.text(rm3descpuzzlearray[11], 6, 160);
        doc.text(rm3descpuzzlearray[12], 6, 164);
        doc.text(rm3descpuzzlearray[13], 6, 168);
        doc.text(rm3descpuzzlearray[14], 6, 172);
        doc.text(rm3descpuzzlearray[15], 6, 176);
        doc.text(rm3descpuzzlearray[16], 6, 180);
        doc.text(rm3descpuzzlearray[17], 6, 184);
        doc.text(rm3descpuzzlearray[18], 6, 188);
        doc.text(rm3descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 3 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room3strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm3ans2array[0][0]);
        doc.text(80, 124, rm3ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 3 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room3strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm3ans2array[0][0]);
        doc.text(144, 124, rm3ans2array[0][1]);
        doc.text(rm3ans2array[1][0], 142, 130);
        doc.text(rm3ans2array[1][1], 142, 134);
        doc.text(rm3ans2array[1][2], 142, 138);
        doc.text(rm3ans2array[1][3], 142, 142);
        doc.text(rm3ans2array[1][4], 142, 146);
        doc.text(rm3ans2array[1][5], 142, 150);
        doc.text(rm3ans2array[1][6], 142, 154);
        doc.text(rm3ans2array[1][7], 142, 158);
        doc.text(rm3ans2array[1][8], 142, 162);
        doc.text(rm3ans2array[1][9], 142, 166);
        doc.text(rm3ans2array[1][10], 142, 170);
        doc.text(rm3ans2array[1][11], 142, 174);
        doc.text(rm3ans2array[1][12], 142, 178);
        doc.text(rm3ans2array[1][13], 142, 182);
        doc.text(rm3ans2array[1][14], 142, 186);
        doc.text(rm3ans2array[1][15], 142, 190);
        doc.text(rm3ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 3 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room3strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 3 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room3strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm3ans3array[0][0]);
        doc.text(80, 224, rm3ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 3 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room3strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm3ans3array[0][0]);
        doc.text(144, 224, rm3ans3array[0][1]);
        doc.text(rm3ans3array[1][0], 142, 228);
        doc.text(rm3ans3array[1][1], 142, 232);
        doc.text(rm3ans3array[1][2], 142, 236);
        doc.text(rm3ans3array[1][3], 142, 240);
        doc.text(rm3ans3array[1][4], 142, 244);
        doc.text(rm3ans3array[1][5], 142, 248);
        doc.text(rm3ans3array[1][6], 142, 252);
        doc.text(rm3ans3array[1][7], 142, 256);
        doc.text(rm3ans3array[1][8], 142, 260);
        doc.text(rm3ans3array[1][9], 142, 264);
        doc.text(rm3ans3array[1][10], 142, 268);
        doc.text(rm3ans3array[1][11], 142, 272);
        doc.text(rm3ans3array[1][12], 142, 276);
        doc.text(rm3ans3array[1][13], 142, 280);
        doc.text(rm3ans3array[1][14], 142, 284);
        doc.text(rm3ans3array[1][15], 142, 288);
} // end add room 3

if (cardscontent[0].stacknumber > 6) {

        doc.addPage(); // add room 4

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 4 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room4strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room4, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 4 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room4strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm4ans1array[0][0]);
        doc.text(80, 30, rm4ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 4 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room4strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm4ans1array[0][0]);
        doc.text(144, 30, rm4ans1array[0][1]);
        doc.text(rm4ans1array[1][0], 142, 36);
        doc.text(rm4ans1array[1][1], 142, 40);
        doc.text(rm4ans1array[1][2], 142, 44);
        doc.text(rm4ans1array[1][3], 142, 48);
        doc.text(rm4ans1array[1][4], 142, 52);
        doc.text(rm4ans1array[1][5], 142, 56);
        doc.text(rm4ans1array[1][6], 142, 60);
        doc.text(rm4ans1array[1][7], 142, 64);
        doc.text(rm4ans1array[1][8], 142, 68);
        doc.text(rm4ans1array[1][9], 142, 72);
        doc.text(rm4ans1array[1][10], 142, 76);
        doc.text(rm4ans1array[1][11], 142, 80);
        doc.text(rm4ans1array[1][12], 142, 84);
        doc.text(rm4ans1array[1][13], 142, 88);
        doc.text(rm4ans1array[1][14], 142, 92);
        doc.text(rm4ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 4 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room4strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm4descpuzzlearray[0], 6, 116);
        doc.text(rm4descpuzzlearray[1], 6, 120);
        doc.text(rm4descpuzzlearray[2], 6, 124);
        doc.text(rm4descpuzzlearray[3], 6, 128);
        doc.text(rm4descpuzzlearray[4], 6, 132);
        doc.text(rm4descpuzzlearray[5], 6, 136);
        doc.text(rm4descpuzzlearray[6], 6, 140);
        doc.text(rm4descpuzzlearray[7], 6, 144);
        doc.text(rm4descpuzzlearray[8], 6, 148);
        doc.text(rm4descpuzzlearray[9], 6, 152);
        doc.text(rm4descpuzzlearray[10], 6, 156);
        doc.text(rm4descpuzzlearray[11], 6, 160);
        doc.text(rm4descpuzzlearray[12], 6, 164);
        doc.text(rm4descpuzzlearray[13], 6, 168);
        doc.text(rm4descpuzzlearray[14], 6, 172);
        doc.text(rm4descpuzzlearray[15], 6, 176);
        doc.text(rm4descpuzzlearray[16], 6, 180);
        doc.text(rm4descpuzzlearray[17], 6, 184);
        doc.text(rm4descpuzzlearray[18], 6, 188);
        doc.text(rm4descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 4 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room4strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm4ans2array[0][0]);
        doc.text(80, 124, rm4ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 4 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room4strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm4ans2array[0][0]);
        doc.text(144, 124, rm4ans2array[0][1]);
        doc.text(rm4ans2array[1][0], 142, 130);
        doc.text(rm4ans2array[1][1], 142, 134);
        doc.text(rm4ans2array[1][2], 142, 138);
        doc.text(rm4ans2array[1][3], 142, 142);
        doc.text(rm4ans2array[1][4], 142, 146);
        doc.text(rm4ans2array[1][5], 142, 150);
        doc.text(rm4ans2array[1][6], 142, 154);
        doc.text(rm4ans2array[1][7], 142, 158);
        doc.text(rm4ans2array[1][8], 142, 162);
        doc.text(rm4ans2array[1][9], 142, 166);
        doc.text(rm4ans2array[1][10], 142, 170);
        doc.text(rm4ans2array[1][11], 142, 174);
        doc.text(rm4ans2array[1][12], 142, 178);
        doc.text(rm4ans2array[1][13], 142, 182);
        doc.text(rm4ans2array[1][14], 142, 186);
        doc.text(rm4ans2array[1][15], 142, 190);
        doc.text(rm4ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 4 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room4strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 4 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room4strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm4ans3array[0][0]);
        doc.text(80, 224, rm4ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 4 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room4strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm4ans3array[0][0]);
        doc.text(144, 224, rm4ans3array[0][1]);
        doc.text(rm4ans3array[1][0], 142, 228);
        doc.text(rm4ans3array[1][1], 142, 232);
        doc.text(rm4ans3array[1][2], 142, 236);
        doc.text(rm4ans3array[1][3], 142, 240);
        doc.text(rm4ans3array[1][4], 142, 244);
        doc.text(rm4ans3array[1][5], 142, 248);
        doc.text(rm4ans3array[1][6], 142, 252);
        doc.text(rm4ans3array[1][7], 142, 256);
        doc.text(rm4ans3array[1][8], 142, 260);
        doc.text(rm4ans3array[1][9], 142, 264);
        doc.text(rm4ans3array[1][10], 142, 268);
        doc.text(rm4ans3array[1][11], 142, 272);
        doc.text(rm4ans3array[1][12], 142, 276);
        doc.text(rm4ans3array[1][13], 142, 280);
        doc.text(rm4ans3array[1][14], 142, 284);
        doc.text(rm4ans3array[1][15], 142, 288);

} // end add room 4

if (cardscontent[0].stacknumber > 6) {
        doc.addPage(); // add room 5

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 5 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room5strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room5, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 5 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room5strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm5ans1array[0][0]);
        doc.text(80, 30, rm5ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 5 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room5strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm5ans1array[0][0]);
        doc.text(144, 30, rm5ans1array[0][1]);
        doc.text(rm5ans1array[1][0], 142, 36);
        doc.text(rm5ans1array[1][1], 142, 40);
        doc.text(rm5ans1array[1][2], 142, 44);
        doc.text(rm5ans1array[1][3], 142, 48);
        doc.text(rm5ans1array[1][4], 142, 52);
        doc.text(rm5ans1array[1][5], 142, 56);
        doc.text(rm5ans1array[1][6], 142, 60);
        doc.text(rm5ans1array[1][7], 142, 64);
        doc.text(rm5ans1array[1][8], 142, 68);
        doc.text(rm5ans1array[1][9], 142, 72);
        doc.text(rm5ans1array[1][10], 142, 76);
        doc.text(rm5ans1array[1][11], 142, 80);
        doc.text(rm5ans1array[1][12], 142, 84);
        doc.text(rm5ans1array[1][13], 142, 88);
        doc.text(rm5ans1array[1][14], 142, 92);
        doc.text(rm5ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 5 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room5strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm5descpuzzlearray[0], 6, 116);
        doc.text(rm5descpuzzlearray[1], 6, 120);
        doc.text(rm5descpuzzlearray[2], 6, 124);
        doc.text(rm5descpuzzlearray[3], 6, 128);
        doc.text(rm5descpuzzlearray[4], 6, 132);
        doc.text(rm5descpuzzlearray[5], 6, 136);
        doc.text(rm5descpuzzlearray[6], 6, 140);
        doc.text(rm5descpuzzlearray[7], 6, 144);
        doc.text(rm5descpuzzlearray[8], 6, 148);
        doc.text(rm5descpuzzlearray[9], 6, 152);
        doc.text(rm5descpuzzlearray[10], 6, 156);
        doc.text(rm5descpuzzlearray[11], 6, 160);
        doc.text(rm5descpuzzlearray[12], 6, 164);
        doc.text(rm5descpuzzlearray[13], 6, 168);
        doc.text(rm5descpuzzlearray[14], 6, 172);
        doc.text(rm5descpuzzlearray[15], 6, 176);
        doc.text(rm5descpuzzlearray[16], 6, 180);
        doc.text(rm5descpuzzlearray[17], 6, 184);
        doc.text(rm5descpuzzlearray[18], 6, 188);
        doc.text(rm5descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 5 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room5strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm5ans2array[0][0]);
        doc.text(80, 124, rm5ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 5 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room5strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm5ans2array[0][0]);
        doc.text(144, 124, rm5ans2array[0][1]);
        doc.text(rm5ans2array[1][0], 142, 130);
        doc.text(rm5ans2array[1][1], 142, 134);
        doc.text(rm5ans2array[1][2], 142, 138);
        doc.text(rm5ans2array[1][3], 142, 142);
        doc.text(rm5ans2array[1][4], 142, 146);
        doc.text(rm5ans2array[1][5], 142, 150);
        doc.text(rm5ans2array[1][6], 142, 154);
        doc.text(rm5ans2array[1][7], 142, 158);
        doc.text(rm5ans2array[1][8], 142, 162);
        doc.text(rm5ans2array[1][9], 142, 166);
        doc.text(rm5ans2array[1][10], 142, 170);
        doc.text(rm5ans2array[1][11], 142, 174);
        doc.text(rm5ans2array[1][12], 142, 178);
        doc.text(rm5ans2array[1][13], 142, 182);
        doc.text(rm5ans2array[1][14], 142, 186);
        doc.text(rm5ans2array[1][15], 142, 190);
        doc.text(rm5ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 5 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room5strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 5 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room5strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm5ans3array[0][0]);
        doc.text(80, 224, rm5ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 5 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room5strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm5ans3array[0][0]);
        doc.text(144, 224, rm5ans3array[0][1]);
        doc.text(rm5ans3array[1][0], 142, 228);
        doc.text(rm5ans3array[1][1], 142, 232);
        doc.text(rm5ans3array[1][2], 142, 236);
        doc.text(rm5ans3array[1][3], 142, 240);
        doc.text(rm5ans3array[1][4], 142, 244);
        doc.text(rm5ans3array[1][5], 142, 248);
        doc.text(rm5ans3array[1][6], 142, 252);
        doc.text(rm5ans3array[1][7], 142, 256);
        doc.text(rm5ans3array[1][8], 142, 260);
        doc.text(rm5ans3array[1][9], 142, 264);
        doc.text(rm5ans3array[1][10], 142, 268);
        doc.text(rm5ans3array[1][11], 142, 272);
        doc.text(rm5ans3array[1][12], 142, 276);
        doc.text(rm5ans3array[1][13], 142, 280);
        doc.text(rm5ans3array[1][14], 142, 284);
        doc.text(rm5ans3array[1][15], 142, 288);
}// end add room 5

doc.addPage(); // add room 6

doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 6 picture
doc.setFontSize(10);
doc.text("00", 6, 10); // top left page number
doc.setFontSize(11);
doc.text(14, 10, room6strings[0]);
doc.line(5, 12, 70, 12);
doc.setFontSize(11);
doc.addImage(cd_room6, "PNG", 10, 25, 55, 70);

doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 6 answer 1
doc.setFontSize(10);
doc.text("00", 74, 10); // top middle page number
doc.setFontSize(11);
doc.text(80, 10, room6strings[0] + ' opt. 1');
doc.line(72, 12, 137, 12);
doc.setFontSize(11);
doc.text(80, 26, rm6ans1array[0][0]);
doc.text(80, 30, rm6ans1array[0][1]);


doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 6 answer 1 cover
doc.setFontSize(10);
doc.text("00", 142, 10); // top right page number
doc.setFontSize(11);
doc.text(148, 10, room6strings[0] + ' ans. 1');
doc.line(139, 12, 204, 12);
doc.setFontSize(11);
doc.text(144, 26, rm6ans1array[0][0]);
doc.text(144, 30, rm6ans1array[0][1]);
doc.text(rm6ans1array[1][0], 142, 36);
doc.text(rm6ans1array[1][1], 142, 40);
doc.text(rm6ans1array[1][2], 142, 44);
doc.text(rm6ans1array[1][3], 142, 48);
doc.text(rm6ans1array[1][4], 142, 52);
doc.text(rm6ans1array[1][5], 142, 56);
doc.text(rm6ans1array[1][6], 142, 60);
doc.text(rm6ans1array[1][7], 142, 64);
doc.text(rm6ans1array[1][8], 142, 68);
doc.text(rm6ans1array[1][9], 142, 72);
doc.text(rm6ans1array[1][10], 142, 76);
doc.text(rm6ans1array[1][11], 142, 80);
doc.text(rm6ans1array[1][12], 142, 84);
doc.text(rm6ans1array[1][13], 142, 88);
doc.text(rm6ans1array[1][14], 142, 92);
doc.text(rm6ans1array[1][15], 142, 96);

doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 6 intro
doc.setFontSize(10);
doc.text("00", 6, 105); // middle left page number
doc.setFontSize(11);
doc.text(12, 105, room6strings[0] + ' Intro');
doc.line(5, 107, 70, 107);
doc.setFontSize(11);
doc.text(rm6descpuzzlearray[0], 6, 116);
doc.text(rm6descpuzzlearray[1], 6, 120);
doc.text(rm6descpuzzlearray[2], 6, 124);
doc.text(rm6descpuzzlearray[3], 6, 128);
doc.text(rm6descpuzzlearray[4], 6, 132);
doc.text(rm6descpuzzlearray[5], 6, 136);
doc.text(rm6descpuzzlearray[6], 6, 140);
doc.text(rm6descpuzzlearray[7], 6, 144);
doc.text(rm6descpuzzlearray[8], 6, 148);
doc.text(rm6descpuzzlearray[9], 6, 152);
doc.text(rm6descpuzzlearray[10], 6, 156);
doc.text(rm6descpuzzlearray[11], 6, 160);
doc.text(rm6descpuzzlearray[12], 6, 164);
doc.text(rm6descpuzzlearray[13], 6, 168);
doc.text(rm6descpuzzlearray[14], 6, 172);
doc.text(rm6descpuzzlearray[15], 6, 176);
doc.text(rm6descpuzzlearray[16], 6, 180);
doc.text(rm6descpuzzlearray[17], 6, 184);
doc.text(rm6descpuzzlearray[18], 6, 188);
doc.text(rm6descpuzzlearray[19], 6, 192);

doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 6 answer 2 
doc.setFontSize(10);
doc.text("00", 74, 105); // middle middle page number
doc.setFontSize(11);
doc.text(80, 105, room6strings[0] + ' opt. 2');
doc.line(72, 107, 137, 107);
doc.setFontSize(11);
doc.text(80, 122, rm6ans2array[0][0]);
doc.text(80, 124, rm6ans2array[0][1]);


doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 6 answ 2 cover
doc.setFontSize(10);
doc.text("00", 142, 105); // middle right page number
doc.setFontSize(11);
doc.text(148, 105, room6strings[0] + ' ans. 2');
doc.line(139, 107, 204, 107);
doc.setFontSize(11);
doc.text(144, 122, rm6ans2array[0][0]);
doc.text(144, 124, rm6ans2array[0][1]);
doc.text(rm6ans2array[1][0], 142, 130);
doc.text(rm6ans2array[1][1], 142, 134);
doc.text(rm6ans2array[1][2], 142, 138);
doc.text(rm6ans2array[1][3], 142, 142);
doc.text(rm6ans2array[1][4], 142, 146);
doc.text(rm6ans2array[1][5], 142, 150);
doc.text(rm6ans2array[1][6], 142, 154);
doc.text(rm6ans2array[1][7], 142, 158);
doc.text(rm6ans2array[1][8], 142, 162);
doc.text(rm6ans2array[1][9], 142, 166);
doc.text(rm6ans2array[1][10], 142, 170);
doc.text(rm6ans2array[1][11], 142, 174);
doc.text(rm6ans2array[1][12], 142, 178);
doc.text(rm6ans2array[1][13], 142, 182);
doc.text(rm6ans2array[1][14], 142, 186);
doc.text(rm6ans2array[1][15], 142, 190);
doc.text(rm6ans2array[1][16], 142, 194);

doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 6 encounter 
doc.setFontSize(10);
doc.text("00", 6, 202); // bottom left page number
doc.setFontSize(11);
doc.text(12, 202, room6strings[0]);
doc.line(5, 204, 70, 204);
doc.setFontSize(11);
doc.text(person2_6strings[0], 6, 212);
doc.text(encounterfirstarray2_6[0], 6, 216);
doc.text(encounterfirstarray2_6[1], 6, 220);
doc.text(encounterfirstarray2_6[2], 6, 224);
doc.text(encounterfirstarray2_6[3], 6, 228);
doc.text(encounterfirstarray2_6[4], 6, 232);
doc.text(encounterfirstarray2_6[5], 6, 236);
doc.text(encounterfirstarray2_6[6], 6, 240);
doc.text(encounterfirstarray2_6[7], 6, 244);
doc.text(encounterfirstarray2_6[8], 6, 248);
doc.text(encounterfirstarray2_6[9], 6, 252);
doc.text(encounterfirstarray2_6[10], 6, 256);
doc.text(encounterfirstarray2_6[11], 6, 260);
doc.text(encounterfirstarray2_6[12], 6, 264);
doc.text(encounterfirstarray2_6[13], 6, 268);
doc.text(encounterfirstarray2_6[14], 6, 272);
doc.text(encounterfirstarray2_6[15], 6, 276);
doc.text(encounterfirstarray2_6[16], 6, 280);
doc.text(encounterfirstarray2_6[17], 6, 284);
doc.text(encounterfirstarray2_6[18], 6, 288);

doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 6 answer 3 
doc.setFontSize(10);
doc.text("00", 74, 202); // bottom middle page number
doc.setFontSize(11);
doc.text(80, 202, room6strings[0] + ' opt. 3');
doc.line(72, 204, 137, 204);
doc.setFontSize(11);
doc.text(80, 218, rm6ans3array[0][0]);
doc.text(80, 224, rm6ans3array[0][1]);


doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 6 answer cover
doc.setFontSize(10);
doc.text("00", 142, 202); // bottom right page number
doc.setFontSize(11);
doc.text(148, 202, room6strings[0] + ' ans. 3');
doc.line(139, 204, 204, 204);
doc.setFontSize(11);
doc.text(144, 218, rm6ans3array[0][0]);
doc.text(144, 224, rm6ans3array[0][1]);
doc.text(rm6ans3array[1][0], 142, 228);
doc.text(rm6ans3array[1][1], 142, 232);
doc.text(rm6ans3array[1][2], 142, 236);
doc.text(rm6ans3array[1][3], 142, 240);
doc.text(rm6ans3array[1][4], 142, 244);
doc.text(rm6ans3array[1][5], 142, 248);
doc.text(rm6ans3array[1][6], 142, 252);
doc.text(rm6ans3array[1][7], 142, 256);
doc.text(rm6ans3array[1][8], 142, 260);
doc.text(rm6ans3array[1][9], 142, 264);
doc.text(rm6ans3array[1][10], 142, 268);
doc.text(rm6ans3array[1][11], 142, 272);
doc.text(rm6ans3array[1][12], 142, 276);
doc.text(rm6ans3array[1][13], 142, 280);
doc.text(rm6ans3array[1][14], 142, 284);
doc.text(rm6ans3array[1][15], 142, 288);


doc.addPage(); // add room 7

doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 7 picture
doc.setFontSize(10);
doc.text("00", 6, 10); // top left page number
doc.setFontSize(11);
doc.text(14, 10, room7strings[0]);
doc.line(5, 12, 70, 12);
doc.setFontSize(11);
doc.addImage(cd_room7, "PNG", 10, 25, 55, 70);

doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 7 answer 1
doc.setFontSize(10);
doc.text("00", 74, 10); // top middle page number
doc.setFontSize(11);
doc.text(80, 10, room7strings[0] + ' opt. 1');
doc.line(72, 12, 137, 12);
doc.setFontSize(11);
doc.text(80, 26, rm7ans1array[0][0]);
doc.text(80, 30, rm7ans1array[0][1]);


doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 7 answer 1 cover
doc.setFontSize(10);
doc.text("00", 142, 10); // top right page number
doc.setFontSize(11);
doc.text(148, 10, room7strings[0] + ' ans. 1');
doc.line(139, 12, 204, 12);
doc.setFontSize(11);
doc.text(144, 26, rm7ans1array[0][0]);
doc.text(144, 30, rm7ans1array[0][1]);
doc.text(rm7ans1array[1][0], 142, 36);
doc.text(rm7ans1array[1][1], 142, 40);
doc.text(rm7ans1array[1][2], 142, 44);
doc.text(rm7ans1array[1][3], 142, 48);
doc.text(rm7ans1array[1][4], 142, 52);
doc.text(rm7ans1array[1][5], 142, 56);
doc.text(rm7ans1array[1][6], 142, 60);
doc.text(rm7ans1array[1][7], 142, 64);
doc.text(rm7ans1array[1][8], 142, 68);
doc.text(rm7ans1array[1][9], 142, 72);
doc.text(rm7ans1array[1][10], 142, 76);
doc.text(rm7ans1array[1][11], 142, 80);
doc.text(rm7ans1array[1][12], 142, 84);
doc.text(rm7ans1array[1][13], 142, 88);
doc.text(rm7ans1array[1][14], 142, 92);
doc.text(rm7ans1array[1][15], 142, 96);

doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 7 intro
doc.setFontSize(10);
doc.text("00", 6, 105); // middle left page number
doc.setFontSize(11);
doc.text(12, 105, room7strings[0] + ' Intro');
doc.line(5, 107, 70, 107);
doc.setFontSize(11);
doc.text(rm7descpuzzlearray[0], 6, 116);
doc.text(rm7descpuzzlearray[1], 6, 120);
doc.text(rm7descpuzzlearray[2], 6, 124);
doc.text(rm7descpuzzlearray[3], 6, 128);
doc.text(rm7descpuzzlearray[4], 6, 132);
doc.text(rm7descpuzzlearray[5], 6, 136);
doc.text(rm7descpuzzlearray[6], 6, 140);
doc.text(rm7descpuzzlearray[7], 6, 144);
doc.text(rm7descpuzzlearray[8], 6, 148);
doc.text(rm7descpuzzlearray[9], 6, 152);
doc.text(rm7descpuzzlearray[10], 6, 156);
doc.text(rm7descpuzzlearray[11], 6, 160);
doc.text(rm7descpuzzlearray[12], 6, 164);
doc.text(rm7descpuzzlearray[13], 6, 168);
doc.text(rm7descpuzzlearray[14], 6, 172);
doc.text(rm7descpuzzlearray[15], 6, 176);
doc.text(rm7descpuzzlearray[16], 6, 180);
doc.text(rm7descpuzzlearray[17], 6, 184);
doc.text(rm7descpuzzlearray[18], 6, 188);
doc.text(rm7descpuzzlearray[19], 6, 192);

doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 7 answer 2 
doc.setFontSize(10);
doc.text("00", 74, 105); // middle middle page number
doc.setFontSize(11);
doc.text(80, 105, room7strings[0] + ' opt. 2');
doc.line(72, 107, 137, 107);
doc.setFontSize(11);
doc.text(80, 122, rm7ans2array[0][0]);
doc.text(80, 124, rm7ans2array[0][1]);


doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 7 answ 2 cover
doc.setFontSize(10);
doc.text("00", 142, 105); // middle right page number
doc.setFontSize(11);
doc.text(148, 105, room7strings[0] + ' ans. 2');
doc.line(139, 107, 204, 107);
doc.setFontSize(11);
doc.text(144, 122, rm7ans2array[0][0]);
doc.text(144, 124, rm7ans2array[0][1]);
doc.text(rm7ans2array[1][0], 142, 130);
doc.text(rm7ans2array[1][1], 142, 134);
doc.text(rm7ans2array[1][2], 142, 138);
doc.text(rm7ans2array[1][3], 142, 142);
doc.text(rm7ans2array[1][4], 142, 146);
doc.text(rm7ans2array[1][5], 142, 150);
doc.text(rm7ans2array[1][6], 142, 154);
doc.text(rm7ans2array[1][7], 142, 158);
doc.text(rm7ans2array[1][8], 142, 162);
doc.text(rm7ans2array[1][9], 142, 166);
doc.text(rm7ans2array[1][10], 142, 170);
doc.text(rm7ans2array[1][11], 142, 174);
doc.text(rm7ans2array[1][12], 142, 178);
doc.text(rm7ans2array[1][13], 142, 182);
doc.text(rm7ans2array[1][14], 142, 186);
doc.text(rm7ans2array[1][15], 142, 190);
doc.text(rm7ans2array[1][16], 142, 194);

doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 7 encounter 
doc.setFontSize(10);
doc.text("00", 6, 202); // bottom left page number
doc.setFontSize(11);
doc.text(12, 202, room7strings[0]);
doc.line(5, 204, 70, 204);
doc.setFontSize(11);
doc.text(person2_6strings[0], 6, 212);
doc.text(encounterfirstarray2_6[0], 6, 216);
doc.text(encounterfirstarray2_6[1], 6, 220);
doc.text(encounterfirstarray2_6[2], 6, 224);
doc.text(encounterfirstarray2_6[3], 6, 228);
doc.text(encounterfirstarray2_6[4], 6, 232);
doc.text(encounterfirstarray2_6[5], 6, 236);
doc.text(encounterfirstarray2_6[6], 6, 240);
doc.text(encounterfirstarray2_6[7], 6, 244);
doc.text(encounterfirstarray2_6[8], 6, 248);
doc.text(encounterfirstarray2_6[9], 6, 252);
doc.text(encounterfirstarray2_6[10], 6, 256);
doc.text(encounterfirstarray2_6[11], 6, 260);
doc.text(encounterfirstarray2_6[12], 6, 264);
doc.text(encounterfirstarray2_6[13], 6, 268);
doc.text(encounterfirstarray2_6[14], 6, 272);
doc.text(encounterfirstarray2_6[15], 6, 276);
doc.text(encounterfirstarray2_6[16], 6, 280);
doc.text(encounterfirstarray2_6[17], 6, 284);
doc.text(encounterfirstarray2_6[18], 6, 288);

doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 7 answer 3 
doc.setFontSize(10);
doc.text("00", 74, 202); // bottom middle page number
doc.setFontSize(11);
doc.text(80, 202, room7strings[0] + ' opt. 3');
doc.line(72, 204, 137, 204);
doc.setFontSize(11);
doc.text(80, 218, rm7ans3array[0][0]);
doc.text(80, 224, rm7ans3array[0][1]);


doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 7 answer cover
doc.setFontSize(10);
doc.text("00", 142, 202); // bottom right page number
doc.setFontSize(11);
doc.text(148, 202, room7strings[0] + ' ans. 3');
doc.line(139, 204, 204, 204);
doc.setFontSize(11);
doc.text(144, 218, rm7ans3array[0][0]);
doc.text(144, 224, rm7ans3array[0][1]);
doc.text(rm7ans3array[1][0], 142, 228);
doc.text(rm7ans3array[1][1], 142, 232);
doc.text(rm7ans3array[1][2], 142, 236);
doc.text(rm7ans3array[1][3], 142, 240);
doc.text(rm7ans3array[1][4], 142, 244);
doc.text(rm7ans3array[1][5], 142, 248);
doc.text(rm7ans3array[1][6], 142, 252);
doc.text(rm7ans3array[1][7], 142, 256);
doc.text(rm7ans3array[1][8], 142, 260);
doc.text(rm7ans3array[1][9], 142, 264);
doc.text(rm7ans3array[1][10], 142, 268);
doc.text(rm7ans3array[1][11], 142, 272);
doc.text(rm7ans3array[1][12], 142, 276);
doc.text(rm7ans3array[1][13], 142, 280);
doc.text(rm7ans3array[1][14], 142, 284);
doc.text(rm7ans3array[1][15], 142, 288);


if (cardscontent[0].stacknumber > 6) {
        doc.addPage(); // add room 8

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 8 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room8strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room8, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 8 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room8strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm8ans1array[0][0]);
        doc.text(80, 30, rm8ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 8 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room8strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm8ans1array[0][0]);
        doc.text(144, 30, rm8ans1array[0][1]);
        doc.text(rm8ans1array[1][0], 142, 36);
        doc.text(rm8ans1array[1][1], 142, 40);
        doc.text(rm8ans1array[1][2], 142, 44);
        doc.text(rm8ans1array[1][3], 142, 48);
        doc.text(rm8ans1array[1][4], 142, 52);
        doc.text(rm8ans1array[1][5], 142, 56);
        doc.text(rm8ans1array[1][6], 142, 60);
        doc.text(rm8ans1array[1][7], 142, 64);
        doc.text(rm8ans1array[1][8], 142, 68);
        doc.text(rm8ans1array[1][9], 142, 72);
        doc.text(rm8ans1array[1][10], 142, 76);
        doc.text(rm8ans1array[1][11], 142, 80);
        doc.text(rm8ans1array[1][12], 142, 84);
        doc.text(rm8ans1array[1][13], 142, 88);
        doc.text(rm8ans1array[1][14], 142, 92);
        doc.text(rm8ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 8 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room8strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm8descpuzzlearray[0], 6, 116);
        doc.text(rm8descpuzzlearray[1], 6, 120);
        doc.text(rm8descpuzzlearray[2], 6, 124);
        doc.text(rm8descpuzzlearray[3], 6, 128);
        doc.text(rm8descpuzzlearray[4], 6, 132);
        doc.text(rm8descpuzzlearray[5], 6, 136);
        doc.text(rm8descpuzzlearray[6], 6, 140);
        doc.text(rm8descpuzzlearray[7], 6, 144);
        doc.text(rm8descpuzzlearray[8], 6, 148);
        doc.text(rm8descpuzzlearray[9], 6, 152);
        doc.text(rm8descpuzzlearray[10], 6, 156);
        doc.text(rm8descpuzzlearray[11], 6, 160);
        doc.text(rm8descpuzzlearray[12], 6, 164);
        doc.text(rm8descpuzzlearray[13], 6, 168);
        doc.text(rm8descpuzzlearray[14], 6, 172);
        doc.text(rm8descpuzzlearray[15], 6, 176);
        doc.text(rm8descpuzzlearray[16], 6, 180);
        doc.text(rm8descpuzzlearray[17], 6, 184);
        doc.text(rm8descpuzzlearray[18], 6, 188);
        doc.text(rm8descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 8 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room8strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm8ans2array[0][0]);
        doc.text(80, 124, rm8ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 8 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room8strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm8ans2array[0][0]);
        doc.text(144, 124, rm8ans2array[0][1]);
        doc.text(rm8ans2array[1][0], 142, 130);
        doc.text(rm8ans2array[1][1], 142, 134);
        doc.text(rm8ans2array[1][2], 142, 138);
        doc.text(rm8ans2array[1][3], 142, 142);
        doc.text(rm8ans2array[1][4], 142, 146);
        doc.text(rm8ans2array[1][5], 142, 150);
        doc.text(rm8ans2array[1][6], 142, 154);
        doc.text(rm8ans2array[1][7], 142, 158);
        doc.text(rm8ans2array[1][8], 142, 162);
        doc.text(rm8ans2array[1][9], 142, 166);
        doc.text(rm8ans2array[1][10], 142, 170);
        doc.text(rm8ans2array[1][11], 142, 174);
        doc.text(rm8ans2array[1][12], 142, 178);
        doc.text(rm8ans2array[1][13], 142, 182);
        doc.text(rm8ans2array[1][14], 142, 186);
        doc.text(rm8ans2array[1][15], 142, 190);
        doc.text(rm8ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 8 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room8strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 8 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room8strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm8ans3array[0][0]);
        doc.text(80, 224, rm8ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 8 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room8strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm8ans3array[0][0]);
        doc.text(144, 224, rm8ans3array[0][1]);
        doc.text(rm8ans3array[1][0], 142, 228);
        doc.text(rm8ans3array[1][1], 142, 232);
        doc.text(rm8ans3array[1][2], 142, 236);
        doc.text(rm8ans3array[1][3], 142, 240);
        doc.text(rm8ans3array[1][4], 142, 244);
        doc.text(rm8ans3array[1][5], 142, 248);
        doc.text(rm8ans3array[1][6], 142, 252);
        doc.text(rm8ans3array[1][7], 142, 256);
        doc.text(rm8ans3array[1][8], 142, 260);
        doc.text(rm8ans3array[1][9], 142, 264);
        doc.text(rm8ans3array[1][10], 142, 268);
        doc.text(rm8ans3array[1][11], 142, 272);
        doc.text(rm8ans3array[1][12], 142, 276);
        doc.text(rm8ans3array[1][13], 142, 280);
        doc.text(rm8ans3array[1][14], 142, 284);
        doc.text(rm8ans3array[1][15], 142, 288);
}// end add room 8


if (cardscontent[0].stacknumber > 6) {
        doc.addPage(); // add room 9

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 9 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room9strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room9, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 9 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room9strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm9ans1array[0][0]);
        doc.text(80, 30, rm9ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 9 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room9strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm9ans1array[0][0]);
        doc.text(144, 30, rm9ans1array[0][1]);
        doc.text(rm9ans1array[1][0], 142, 36);
        doc.text(rm9ans1array[1][1], 142, 40);
        doc.text(rm9ans1array[1][2], 142, 44);
        doc.text(rm9ans1array[1][3], 142, 48);
        doc.text(rm9ans1array[1][4], 142, 52);
        doc.text(rm9ans1array[1][5], 142, 56);
        doc.text(rm9ans1array[1][6], 142, 60);
        doc.text(rm9ans1array[1][7], 142, 64);
        doc.text(rm9ans1array[1][8], 142, 68);
        doc.text(rm9ans1array[1][9], 142, 72);
        doc.text(rm9ans1array[1][10], 142, 76);
        doc.text(rm9ans1array[1][11], 142, 80);
        doc.text(rm9ans1array[1][12], 142, 84);
        doc.text(rm9ans1array[1][13], 142, 88);
        doc.text(rm9ans1array[1][14], 142, 92);
        doc.text(rm9ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 9 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room9strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm9descpuzzlearray[0], 6, 116);
        doc.text(rm9descpuzzlearray[1], 6, 120);
        doc.text(rm9descpuzzlearray[2], 6, 124);
        doc.text(rm9descpuzzlearray[3], 6, 128);
        doc.text(rm9descpuzzlearray[4], 6, 132);
        doc.text(rm9descpuzzlearray[5], 6, 136);
        doc.text(rm9descpuzzlearray[6], 6, 140);
        doc.text(rm9descpuzzlearray[7], 6, 144);
        doc.text(rm9descpuzzlearray[8], 6, 148);
        doc.text(rm9descpuzzlearray[9], 6, 152);
        doc.text(rm9descpuzzlearray[10], 6, 156);
        doc.text(rm9descpuzzlearray[11], 6, 160);
        doc.text(rm9descpuzzlearray[12], 6, 164);
        doc.text(rm9descpuzzlearray[13], 6, 168);
        doc.text(rm9descpuzzlearray[14], 6, 172);
        doc.text(rm9descpuzzlearray[15], 6, 176);
        doc.text(rm9descpuzzlearray[16], 6, 180);
        doc.text(rm9descpuzzlearray[17], 6, 184);
        doc.text(rm9descpuzzlearray[18], 6, 188);
        doc.text(rm9descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 9 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room9strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm9ans2array[0][0]);
        doc.text(80, 124, rm9ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 9 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room9strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm9ans2array[0][0]);
        doc.text(144, 124, rm9ans2array[0][1]);
        doc.text(rm9ans2array[1][0], 142, 130);
        doc.text(rm9ans2array[1][1], 142, 134);
        doc.text(rm9ans2array[1][2], 142, 138);
        doc.text(rm9ans2array[1][3], 142, 142);
        doc.text(rm9ans2array[1][4], 142, 146);
        doc.text(rm9ans2array[1][5], 142, 150);
        doc.text(rm9ans2array[1][6], 142, 154);
        doc.text(rm9ans2array[1][7], 142, 158);
        doc.text(rm9ans2array[1][8], 142, 162);
        doc.text(rm9ans2array[1][9], 142, 166);
        doc.text(rm9ans2array[1][10], 142, 170);
        doc.text(rm9ans2array[1][11], 142, 174);
        doc.text(rm9ans2array[1][12], 142, 178);
        doc.text(rm9ans2array[1][13], 142, 182);
        doc.text(rm9ans2array[1][14], 142, 186);
        doc.text(rm9ans2array[1][15], 142, 190);
        doc.text(rm9ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 9 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room9strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 9 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room9strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm9ans3array[0][0]);
        doc.text(80, 224, rm9ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 9 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room9strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm9ans3array[0][0]);
        doc.text(144, 224, rm9ans3array[0][1]);
        doc.text(rm9ans3array[1][0], 142, 228);
        doc.text(rm9ans3array[1][1], 142, 232);
        doc.text(rm9ans3array[1][2], 142, 236);
        doc.text(rm9ans3array[1][3], 142, 240);
        doc.text(rm9ans3array[1][4], 142, 244);
        doc.text(rm9ans3array[1][5], 142, 248);
        doc.text(rm9ans3array[1][6], 142, 252);
        doc.text(rm9ans3array[1][7], 142, 256);
        doc.text(rm9ans3array[1][8], 142, 260);
        doc.text(rm9ans3array[1][9], 142, 264);
        doc.text(rm9ans3array[1][10], 142, 268);
        doc.text(rm9ans3array[1][11], 142, 272);
        doc.text(rm9ans3array[1][12], 142, 276);
        doc.text(rm9ans3array[1][13], 142, 280);
        doc.text(rm9ans3array[1][14], 142, 284);
        doc.text(rm9ans3array[1][15], 142, 288);
} // end add room 9


doc.addPage(); // add room 11

doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 11 picture
doc.setFontSize(10);
doc.text("00", 6, 10); // top left page number
doc.setFontSize(11);
doc.text(14, 10, room11strings[0]);
doc.line(5, 12, 70, 12);
doc.setFontSize(11);
doc.addImage(cd_room11, "PNG", 10, 25, 55, 70);

doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 11 answer 1
doc.setFontSize(10);
doc.text("00", 74, 10); // top middle page number
doc.setFontSize(11);
doc.text(80, 10, room11strings[0] + ' opt. 1');
doc.line(72, 12, 137, 12);
doc.setFontSize(11);
doc.text(80, 26, rm11ans1array[0][0]);
doc.text(80, 30, rm11ans1array[0][1]);


doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 11 answer 1 cover
doc.setFontSize(10);
doc.text("00", 142, 10); // top right page number
doc.setFontSize(11);
doc.text(148, 10, room11strings[0] + ' ans. 1');
doc.line(139, 12, 204, 12);
doc.setFontSize(11);
doc.text(144, 26, rm11ans1array[0][0]);
doc.text(144, 30, rm11ans1array[0][1]);
doc.text(rm11ans1array[1][0], 142, 36);
doc.text(rm11ans1array[1][1], 142, 40);
doc.text(rm11ans1array[1][2], 142, 44);
doc.text(rm11ans1array[1][3], 142, 48);
doc.text(rm11ans1array[1][4], 142, 52);
doc.text(rm11ans1array[1][5], 142, 56);
doc.text(rm11ans1array[1][6], 142, 60);
doc.text(rm11ans1array[1][7], 142, 64);
doc.text(rm11ans1array[1][8], 142, 68);
doc.text(rm11ans1array[1][9], 142, 72);
doc.text(rm11ans1array[1][10], 142, 76);
doc.text(rm11ans1array[1][11], 142, 80);
doc.text(rm11ans1array[1][12], 142, 84);
doc.text(rm11ans1array[1][13], 142, 88);
doc.text(rm11ans1array[1][14], 142, 92);
doc.text(rm11ans1array[1][15], 142, 96);

doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 11 intro
doc.setFontSize(10);
doc.text("00", 6, 105); // middle left page number
doc.setFontSize(11);
doc.text(12, 105, room11strings[0] + ' Intro');
doc.line(5, 107, 70, 107);
doc.setFontSize(11);
doc.text(rm11descpuzzlearray[0], 6, 116);
doc.text(rm11descpuzzlearray[1], 6, 120);
doc.text(rm11descpuzzlearray[2], 6, 124);
doc.text(rm11descpuzzlearray[3], 6, 128);
doc.text(rm11descpuzzlearray[4], 6, 132);
doc.text(rm11descpuzzlearray[5], 6, 136);
doc.text(rm11descpuzzlearray[6], 6, 140);
doc.text(rm11descpuzzlearray[7], 6, 144);
doc.text(rm11descpuzzlearray[8], 6, 148);
doc.text(rm11descpuzzlearray[9], 6, 152);
doc.text(rm11descpuzzlearray[10], 6, 156);
doc.text(rm11descpuzzlearray[11], 6, 160);
doc.text(rm11descpuzzlearray[12], 6, 164);
doc.text(rm11descpuzzlearray[13], 6, 168);
doc.text(rm11descpuzzlearray[14], 6, 172);
doc.text(rm11descpuzzlearray[15], 6, 176);
doc.text(rm11descpuzzlearray[16], 6, 180);
doc.text(rm11descpuzzlearray[17], 6, 184);
doc.text(rm11descpuzzlearray[18], 6, 188);
doc.text(rm11descpuzzlearray[19], 6, 192);

doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 11 answer 2 
doc.setFontSize(10);
doc.text("00", 74, 105); // middle middle page number
doc.setFontSize(11);
doc.text(80, 105, room11strings[0] + ' opt. 2');
doc.line(72, 107, 137, 107);
doc.setFontSize(11);
doc.text(80, 122, rm11ans2array[0][0]);
doc.text(80, 124, rm11ans2array[0][1]);


doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 11 answ 2 cover
doc.setFontSize(10);
doc.text("00", 142, 105); // middle right page number
doc.setFontSize(11);
doc.text(148, 105, room11strings[0] + ' ans. 2');
doc.line(139, 107, 204, 107);
doc.setFontSize(11);
doc.text(144, 122, rm11ans2array[0][0]);
doc.text(144, 124, rm11ans2array[0][1]);
doc.text(rm11ans2array[1][0], 142, 130);
doc.text(rm11ans2array[1][1], 142, 134);
doc.text(rm11ans2array[1][2], 142, 138);
doc.text(rm11ans2array[1][3], 142, 142);
doc.text(rm11ans2array[1][4], 142, 146);
doc.text(rm11ans2array[1][5], 142, 150);
doc.text(rm11ans2array[1][6], 142, 154);
doc.text(rm11ans2array[1][7], 142, 158);
doc.text(rm11ans2array[1][8], 142, 162);
doc.text(rm11ans2array[1][9], 142, 166);
doc.text(rm11ans2array[1][10], 142, 170);
doc.text(rm11ans2array[1][11], 142, 174);
doc.text(rm11ans2array[1][12], 142, 178);
doc.text(rm11ans2array[1][13], 142, 182);
doc.text(rm11ans2array[1][14], 142, 186);
doc.text(rm11ans2array[1][15], 142, 190);
doc.text(rm11ans2array[1][16], 142, 194);

doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 11 encounter 
doc.setFontSize(10);
doc.text("00", 6, 202); // bottom left page number
doc.setFontSize(11);
doc.text(12, 202, room11strings[0]);
doc.line(5, 204, 70, 204);
doc.setFontSize(11);
doc.text(person2_6strings[0], 6, 212);
doc.text(encounterfirstarray2_6[0], 6, 216);
doc.text(encounterfirstarray2_6[1], 6, 220);
doc.text(encounterfirstarray2_6[2], 6, 224);
doc.text(encounterfirstarray2_6[3], 6, 228);
doc.text(encounterfirstarray2_6[4], 6, 232);
doc.text(encounterfirstarray2_6[5], 6, 236);
doc.text(encounterfirstarray2_6[6], 6, 240);
doc.text(encounterfirstarray2_6[7], 6, 244);
doc.text(encounterfirstarray2_6[8], 6, 248);
doc.text(encounterfirstarray2_6[9], 6, 252);
doc.text(encounterfirstarray2_6[10], 6, 256);
doc.text(encounterfirstarray2_6[11], 6, 260);
doc.text(encounterfirstarray2_6[12], 6, 264);
doc.text(encounterfirstarray2_6[13], 6, 268);
doc.text(encounterfirstarray2_6[14], 6, 272);
doc.text(encounterfirstarray2_6[15], 6, 276);
doc.text(encounterfirstarray2_6[16], 6, 280);
doc.text(encounterfirstarray2_6[17], 6, 284);
doc.text(encounterfirstarray2_6[18], 6, 288);

doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 11 answer 3 
doc.setFontSize(10);
doc.text("00", 74, 202); // bottom middle page number
doc.setFontSize(11);
doc.text(80, 202, room11strings[0] + ' opt. 3');
doc.line(72, 204, 137, 204);
doc.setFontSize(11);
doc.text(80, 218, rm11ans3array[0][0]);
doc.text(80, 224, rm11ans3array[0][1]);


doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 11 answer cover
doc.setFontSize(10);
doc.text("00", 142, 202); // bottom right page number
doc.setFontSize(11);
doc.text(148, 202, room11strings[0] + ' ans. 3');
doc.line(139, 204, 204, 204);
doc.setFontSize(11);
doc.text(144, 218, rm11ans3array[0][0]);
doc.text(144, 224, rm11ans3array[0][1]);
doc.text(rm11ans3array[1][0], 142, 228);
doc.text(rm11ans3array[1][1], 142, 232);
doc.text(rm11ans3array[1][2], 142, 236);
doc.text(rm11ans3array[1][3], 142, 240);
doc.text(rm11ans3array[1][4], 142, 244);
doc.text(rm11ans3array[1][5], 142, 248);
doc.text(rm11ans3array[1][6], 142, 252);
doc.text(rm11ans3array[1][7], 142, 256);
doc.text(rm11ans3array[1][8], 142, 260);
doc.text(rm11ans3array[1][9], 142, 264);
doc.text(rm11ans3array[1][10], 142, 268);
doc.text(rm11ans3array[1][11], 142, 272);
doc.text(rm11ans3array[1][12], 142, 276);
doc.text(rm11ans3array[1][13], 142, 280);
doc.text(rm11ans3array[1][14], 142, 284);
doc.text(rm11ans3array[1][15], 142, 288);


if (cardscontent[0].stacknumber > 6) {
        doc.addPage(); // add room 12

        doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - room 12 picture
        doc.setFontSize(10);
        doc.text("00", 6, 10); // top left page number
        doc.setFontSize(11);
        doc.text(14, 10, room12strings[0]);
        doc.line(5, 12, 70, 12);
        doc.setFontSize(11);
        doc.addImage(cd_room12, "PNG", 10, 25, 55, 70);

        doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - room 12 answer 1
        doc.setFontSize(10);
        doc.text("00", 74, 10); // top middle page number
        doc.setFontSize(11);
        doc.text(80, 10, room12strings[0] + ' opt. 1');
        doc.line(72, 12, 137, 12);
        doc.setFontSize(11);
        doc.text(80, 26, rm12ans1array[0][0]);
        doc.text(80, 30, rm12ans1array[0][1]);


        doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 12 answer 1 cover
        doc.setFontSize(10);
        doc.text("00", 142, 10); // top right page number
        doc.setFontSize(11);
        doc.text(148, 10, room12strings[0] + ' ans. 1');
        doc.line(139, 12, 204, 12);
        doc.setFontSize(11);
        doc.text(144, 26, rm12ans1array[0][0]);
        doc.text(144, 30, rm12ans1array[0][1]);
        doc.text(rm12ans1array[1][0], 142, 36);
        doc.text(rm12ans1array[1][1], 142, 40);
        doc.text(rm12ans1array[1][2], 142, 44);
        doc.text(rm12ans1array[1][3], 142, 48);
        doc.text(rm12ans1array[1][4], 142, 52);
        doc.text(rm12ans1array[1][5], 142, 56);
        doc.text(rm12ans1array[1][6], 142, 60);
        doc.text(rm12ans1array[1][7], 142, 64);
        doc.text(rm12ans1array[1][8], 142, 68);
        doc.text(rm12ans1array[1][9], 142, 72);
        doc.text(rm12ans1array[1][10], 142, 76);
        doc.text(rm12ans1array[1][11], 142, 80);
        doc.text(rm12ans1array[1][12], 142, 84);
        doc.text(rm12ans1array[1][13], 142, 88);
        doc.text(rm12ans1array[1][14], 142, 92);
        doc.text(rm12ans1array[1][15], 142, 96);

        doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room 12 intro
        doc.setFontSize(10);
        doc.text("00", 6, 105); // middle left page number
        doc.setFontSize(11);
        doc.text(12, 105, room12strings[0] + ' Intro');
        doc.line(5, 107, 70, 107);
        doc.setFontSize(11);
        doc.text(rm12descpuzzlearray[0], 6, 116);
        doc.text(rm12descpuzzlearray[1], 6, 120);
        doc.text(rm12descpuzzlearray[2], 6, 124);
        doc.text(rm12descpuzzlearray[3], 6, 128);
        doc.text(rm12descpuzzlearray[4], 6, 132);
        doc.text(rm12descpuzzlearray[5], 6, 136);
        doc.text(rm12descpuzzlearray[6], 6, 140);
        doc.text(rm12descpuzzlearray[7], 6, 144);
        doc.text(rm12descpuzzlearray[8], 6, 148);
        doc.text(rm12descpuzzlearray[9], 6, 152);
        doc.text(rm12descpuzzlearray[10], 6, 156);
        doc.text(rm12descpuzzlearray[11], 6, 160);
        doc.text(rm12descpuzzlearray[12], 6, 164);
        doc.text(rm12descpuzzlearray[13], 6, 168);
        doc.text(rm12descpuzzlearray[14], 6, 172);
        doc.text(rm12descpuzzlearray[15], 6, 176);
        doc.text(rm12descpuzzlearray[16], 6, 180);
        doc.text(rm12descpuzzlearray[17], 6, 184);
        doc.text(rm12descpuzzlearray[18], 6, 188);
        doc.text(rm12descpuzzlearray[19], 6, 192);

        doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - room 12 answer 2 
        doc.setFontSize(10);
        doc.text("00", 74, 105); // middle middle page number
        doc.setFontSize(11);
        doc.text(80, 105, room12strings[0] + ' opt. 2');
        doc.line(72, 107, 137, 107);
        doc.setFontSize(11);
        doc.text(80, 122, rm12ans2array[0][0]);
        doc.text(80, 124, rm12ans2array[0][1]);


        doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 12 answ 2 cover
        doc.setFontSize(10);
        doc.text("00", 142, 105); // middle right page number
        doc.setFontSize(11);
        doc.text(148, 105, room12strings[0] + ' ans. 2');
        doc.line(139, 107, 204, 107);
        doc.setFontSize(11);
        doc.text(144, 122, rm12ans2array[0][0]);
        doc.text(144, 124, rm12ans2array[0][1]);
        doc.text(rm12ans2array[1][0], 142, 130);
        doc.text(rm12ans2array[1][1], 142, 134);
        doc.text(rm12ans2array[1][2], 142, 138);
        doc.text(rm12ans2array[1][3], 142, 142);
        doc.text(rm12ans2array[1][4], 142, 146);
        doc.text(rm12ans2array[1][5], 142, 150);
        doc.text(rm12ans2array[1][6], 142, 154);
        doc.text(rm12ans2array[1][7], 142, 158);
        doc.text(rm12ans2array[1][8], 142, 162);
        doc.text(rm12ans2array[1][9], 142, 166);
        doc.text(rm12ans2array[1][10], 142, 170);
        doc.text(rm12ans2array[1][11], 142, 174);
        doc.text(rm12ans2array[1][12], 142, 178);
        doc.text(rm12ans2array[1][13], 142, 182);
        doc.text(rm12ans2array[1][14], 142, 186);
        doc.text(rm12ans2array[1][15], 142, 190);
        doc.text(rm12ans2array[1][16], 142, 194);

        doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 12 encounter 
        doc.setFontSize(10);
        doc.text("00", 6, 202); // bottom left page number
        doc.setFontSize(11);
        doc.text(12, 202, room12strings[0]);
        doc.line(5, 204, 70, 204);
        doc.setFontSize(11);
        doc.text(person2_6strings[0], 6, 212);
        doc.text(encounterfirstarray2_6[0], 6, 216);
        doc.text(encounterfirstarray2_6[1], 6, 220);
        doc.text(encounterfirstarray2_6[2], 6, 224);
        doc.text(encounterfirstarray2_6[3], 6, 228);
        doc.text(encounterfirstarray2_6[4], 6, 232);
        doc.text(encounterfirstarray2_6[5], 6, 236);
        doc.text(encounterfirstarray2_6[6], 6, 240);
        doc.text(encounterfirstarray2_6[7], 6, 244);
        doc.text(encounterfirstarray2_6[8], 6, 248);
        doc.text(encounterfirstarray2_6[9], 6, 252);
        doc.text(encounterfirstarray2_6[10], 6, 256);
        doc.text(encounterfirstarray2_6[11], 6, 260);
        doc.text(encounterfirstarray2_6[12], 6, 264);
        doc.text(encounterfirstarray2_6[13], 6, 268);
        doc.text(encounterfirstarray2_6[14], 6, 272);
        doc.text(encounterfirstarray2_6[15], 6, 276);
        doc.text(encounterfirstarray2_6[16], 6, 280);
        doc.text(encounterfirstarray2_6[17], 6, 284);
        doc.text(encounterfirstarray2_6[18], 6, 288);

        doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle room 12 answer 3 
        doc.setFontSize(10);
        doc.text("00", 74, 202); // bottom middle page number
        doc.setFontSize(11);
        doc.text(80, 202, room12strings[0] + ' opt. 3');
        doc.line(72, 204, 137, 204);
        doc.setFontSize(11);
        doc.text(80, 218, rm12ans3array[0][0]);
        doc.text(80, 224, rm12ans3array[0][1]);


        doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - room 12 answer cover
        doc.setFontSize(10);
        doc.text("00", 142, 202); // bottom right page number
        doc.setFontSize(11);
        doc.text(148, 202, room12strings[0] + ' ans. 3');
        doc.line(139, 204, 204, 204);
        doc.setFontSize(11);
        doc.text(144, 218, rm12ans3array[0][0]);
        doc.text(144, 224, rm12ans3array[0][1]);
        doc.text(rm12ans3array[1][0], 142, 228);
        doc.text(rm12ans3array[1][1], 142, 232);
        doc.text(rm12ans3array[1][2], 142, 236);
        doc.text(rm12ans3array[1][3], 142, 240);
        doc.text(rm12ans3array[1][4], 142, 244);
        doc.text(rm12ans3array[1][5], 142, 248);
        doc.text(rm12ans3array[1][6], 142, 252);
        doc.text(rm12ans3array[1][7], 142, 256);
        doc.text(rm12ans3array[1][8], 142, 260);
        doc.text(rm12ans3array[1][9], 142, 264);
        doc.text(rm12ans3array[1][10], 142, 268);
        doc.text(rm12ans3array[1][11], 142, 272);
        doc.text(rm12ans3array[1][12], 142, 276);
        doc.text(rm12ans3array[1][13], 142, 280);
        doc.text(rm12ans3array[1][14], 142, 284);
        doc.text(rm12ans3array[1][15], 142, 288);
} // end add room 12

doc.addPage(); // add main hall page

doc.roundedRect(5, 5, 65, 94, 3, 3); // card top left - main intro
doc.setFontSize(10);
doc.text("00", 6, 10); // top left page number
doc.setFontSize(11);
doc.text(14, 10, room10strings[0]);
doc.line(5, 12, 70, 12);
doc.setFontSize(11);
doc.text("Explore this space last.", 8, 20);
doc.addImage(cd_room10, "PNG", 8, 25, 55, 70);


doc.roundedRect(72, 5, 65, 94, 3, 3); // card top middle - main intro
doc.setFontSize(10);
doc.text("00", 74, 10); // top middle page number
doc.setFontSize(11);
doc.text(80, 10, room10strings[0]);
doc.line(72, 12, 137, 12);
doc.setFontSize(11);
doc.text(rm10descpuzzlearray[0], 74, 16);
doc.text(rm10descpuzzlearray[1], 74, 20);
doc.text(rm10descpuzzlearray[2], 74, 24);
doc.text(rm10descpuzzlearray[3], 74, 28);
doc.text(rm10descpuzzlearray[4], 74, 32);
doc.text(rm10descpuzzlearray[5], 74, 36);
doc.text(rm10descpuzzlearray[6], 74, 40);
doc.text(rm10descpuzzlearray[7], 74, 44);
doc.text(rm10descpuzzlearray[8], 74, 48);
doc.text(rm10descpuzzlearray[9], 74, 52);
doc.text(rm10descpuzzlearray[10], 74, 56);
doc.text(rm10descpuzzlearray[11], 74, 60);
doc.text(rm10descpuzzlearray[12], 74, 64);
doc.text(rm10descpuzzlearray[13], 74, 68);
doc.text(rm10descpuzzlearray[14], 74, 72);
doc.text(rm10descpuzzlearray[15], 74, 76);
doc.text(rm10descpuzzlearray[16], 74, 80);
doc.text(rm10descpuzzlearray[17], 74, 84);
doc.text(rm10descpuzzlearray[18], 74, 88);
doc.text(rm10descpuzzlearray[19], 74, 92);
doc.text(rm10descpuzzlearray[20], 74, 96);

doc.roundedRect(139, 5, 65, 94, 3, 3); // card top right - room 10
doc.setFontSize(10);
doc.text("00", 142, 10); // top right page number
doc.setFontSize(11);
doc.text(148, 10, room10strings[0] + ' Cont.');
doc.line(139, 12, 204, 12);
doc.setFontSize(11);
doc.text(rm10descpuzzlearray[21], 142, 16);
doc.text(rm10descpuzzlearray[22], 142, 20);
doc.text(rm10descpuzzlearray[23], 142, 24);
doc.text(rm10descpuzzlearray[24], 142, 28);
doc.text(rm10descpuzzlearray[25], 142, 32);
doc.text(rm10descpuzzlearray[26], 142, 36);
doc.text(rm10descpuzzlearray[27], 142, 40);
doc.text(rm10descpuzzlearray[28], 142, 44);
doc.text(rm10descpuzzlearray[29], 142, 48);
doc.text(rm10descpuzzlearray[30], 142, 52);
doc.text(rm10descpuzzlearray[31], 142, 56);
doc.text(rm10descpuzzlearray[32], 142, 60);
doc.text(rm10descpuzzlearray[33], 142, 64);
doc.text(rm10descpuzzlearray[34], 142, 68);
doc.text(rm10descpuzzlearray[35], 142, 72);
doc.text(rm10descpuzzlearray[36], 142, 76);
doc.text(rm10descpuzzlearray[37], 142, 80);
doc.text(rm10descpuzzlearray[38], 142, 84);
doc.text(rm10descpuzzlearray[39], 142, 88);
doc.text(rm10descpuzzlearray[40], 142, 92);
doc.text(rm10descpuzzlearray[41], 142, 96);

doc.roundedRect(5, 101, 65, 94, 3, 3); // card middle left - room solve instructions
doc.setFontSize(10);
doc.text("00", 6, 106); // middle left page number
doc.setFontSize(11);
doc.text(14, 106, room10strings[0]);
doc.line(5, 107, 70, 107);
doc.setFontSize(11);
doc.text("1. Identify the main solution", 8, 120);
doc.text('and', 14, 124);
doc.text("2. Select and option:", 8, 128);
doc.text('', 8, 132);
doc.text(person2_6strings[0], 14, 136);
doc.text('or', 18, 140);
doc.text(person3_7strings[0], 14, 144);
doc.text("", 8, 148);
doc.text("", 8, 152);
doc.text("Then view the solution...", 8, 156);
doc.text("If you are incorrect", 8, 164);
doc.text("read the incorrect card", 8, 170);
doc.text("and also select the card", 8, 176);
doc.text("for the option you chose.", 8, 180);

doc.roundedRect(72, 101, 65, 94, 3, 3); // card middle middle - solve instructions
doc.setFontSize(10);
doc.text("00", 74, 106); // middle middle page number
doc.setFontSize(11);
doc.text(80, 106, room10strings[0] + ' Solution');
doc.line(72, 107, 137, 107);
doc.setFontSize(11);
doc.text("Upside-down to check answer.", 76, 112);
doc.text(rm10answerarray[0], 74, 120);
doc.text(rm10answerarray[1], 74, 124);
doc.text(rm10answerarray[2], 74, 128);
doc.text(rm10answerarray[3], 74, 132);
doc.text(rm10answerarray[4], 74, 136);
doc.text(rm10answerarray[5], 74, 140);
doc.text(rm10answerarray[6], 74, 144);
doc.text(rm10answerarray[7], 74, 148);
doc.text(rm10answerarray[8], 74, 152);
doc.text('answer: ' + room10strings[3], 130, 154, null, 180); // answer here upside down
doc.text(rm10answerarray[9], 74, 160);
doc.text(rm10answerarray[10], 74, 164);
doc.text(rm10answerarray[11], 74, 168);
doc.text(rm10answerarray[12], 74, 172);
doc.text(rm10answerarray[13], 74, 176);
doc.text(rm10answerarray[14], 74, 180);
doc.text(rm10answerarray[15], 74, 184);
doc.text(rm10answerarray[16], 74, 188);
doc.text(rm10answerarray[17], 74, 192);


doc.roundedRect(139, 101, 65, 94, 3, 3); // card middle right - room 10 first answer page
doc.setFontSize(10);
doc.text("00", 142, 106); // middle right page number
doc.setFontSize(11);
doc.text(148, 106, room10strings[0] + ' Solution');
doc.line(139, 107, 204, 107);
doc.setFontSize(11);
doc.text("Page 2.", 142, 112);
doc.text(rm10answerarray[18], 142, 122);
doc.text(rm10answerarray[19], 142, 126);
doc.text(rm10answerarray[20], 142, 130);
doc.text(rm10answerarray[21], 142, 134);
doc.text(rm10answerarray[22], 142, 138);
doc.text(rm10answerarray[23], 142, 142);
doc.text(rm10answerarray[24], 142, 146);
doc.text(rm10answerarray[25], 142, 150);
doc.text(rm10answerarray[26], 142, 154);
doc.text(rm10answerarray[27], 142, 158);
doc.text(rm10answerarray[28], 142, 162);
doc.text(rm10answerarray[29], 142, 166);
doc.text(rm10answerarray[30], 142, 170);
doc.text(rm10answerarray[31], 142, 174);
doc.text(rm10answerarray[32], 142, 178);
doc.text(rm10answerarray[33], 142, 182);
doc.text(rm10answerarray[34], 142, 186);
doc.text(rm10answerarray[35], 142, 190);
doc.text(rm10answerarray[36], 142, 194);


doc.roundedRect(5, 197, 65, 94, 3, 3); // card bottom left - room 10 incorrect.
doc.setFontSize(10);
doc.text("00", 6, 202); // bottom left page number
doc.setFontSize(11);
doc.text(14, 202, room10strings[0] + ' Incorrect');
doc.line(5, 204, 70, 204);
doc.setFontSize(11);
doc.text(rm10wrongarray[0], 6, 212);
doc.text(rm10wrongarray[1], 6, 216);
doc.text(rm10wrongarray[2], 6, 220);
doc.text(rm10wrongarray[3], 6, 224);
doc.text(rm10wrongarray[4], 6, 228);
doc.text(rm10wrongarray[5], 6, 232);
doc.text(rm10wrongarray[6], 6, 236);
doc.text(rm10wrongarray[7], 6, 240);
doc.text(rm10wrongarray[8], 6, 244);
doc.text(rm10wrongarray[9], 6, 248);
doc.text(rm10wrongarray[10], 6, 252);
doc.text(rm10wrongarray[11], 6, 256);
doc.text(rm10wrongarray[12], 6, 260);
doc.text(rm10wrongarray[13], 6, 264);
doc.text(rm10wrongarray[14], 6, 268);
doc.text(rm10wrongarray[15], 6, 272);
doc.text(rm10wrongarray[16], 6, 276);
doc.text(rm10wrongarray[17], 6, 280);
doc.text(rm10wrongarray[18], 6, 284);
doc.text(rm10wrongarray[19], 6, 288);

doc.roundedRect(72, 197, 65, 94, 3, 3); // card bottom middle - room 10 option 2_6
doc.setFontSize(10);
doc.text("00", 74, 202); // bottom middle page number
doc.setFontSize(11);
doc.text(80, 202, room10strings[0] + ' Option');
doc.line(72, 204, 137, 204);
doc.setFontSize(11);
doc.text(74, 208, person2_6strings[0]);
doc.text(encounterendarray2_6[0], 74, 216);
doc.text(encounterendarray2_6[1], 74, 220);
doc.text(encounterendarray2_6[2], 74, 224);
doc.text(encounterendarray2_6[3], 74, 228);
doc.text(encounterendarray2_6[4], 74, 232);
doc.text(encounterendarray2_6[5], 74, 236);
doc.text(encounterendarray2_6[6], 74, 240);
doc.text(encounterendarray2_6[7], 74, 244);
doc.text(encounterendarray2_6[8], 74, 248);
doc.text(encounterendarray2_6[9], 74, 252);
doc.text(encounterendarray2_6[10], 74, 256);
doc.text(encounterendarray2_6[11], 74, 260);
doc.text(encounterendarray2_6[12], 74, 264);
doc.text(encounterendarray2_6[13], 74, 268);
doc.text(encounterendarray2_6[14], 74, 272);
doc.text(encounterendarray2_6[15], 74, 276);
doc.text(encounterendarray2_6[16], 74, 280);
doc.text(encounterendarray2_6[17], 74, 284);
doc.text(encounterendarray2_6[18], 74, 288);

doc.roundedRect(139, 197, 65, 94, 3, 3); // card bottom right - person answer 2_6 - 
doc.setFontSize(10);
doc.text("00", 142, 202); // bottom right page number
doc.setFontSize(11);
doc.text(148, 202, room10strings[0] + ' Option');
doc.line(139, 204, 204, 204);
doc.setFontSize(11);
doc.text(144, 208, person3_7strings[0]);
doc.text(encounterendarray3_7[0], 142, 216);
doc.text(encounterendarray3_7[1], 142, 220);
doc.text(encounterendarray3_7[2], 142, 224);
doc.text(encounterendarray3_7[3], 142, 228);
doc.text(encounterendarray3_7[4], 142, 232);
doc.text(encounterendarray3_7[5], 142, 236);
doc.text(encounterendarray3_7[6], 142, 240);
doc.text(encounterendarray3_7[7], 142, 244);
doc.text(encounterendarray3_7[8], 142, 248);
doc.text(encounterendarray3_7[9], 142, 252);
doc.text(encounterendarray3_7[10], 142, 256);
doc.text(encounterendarray3_7[11], 142, 260);
doc.text(encounterendarray3_7[12], 142, 264);
doc.text(encounterendarray3_7[13], 142, 268);
doc.text(encounterendarray3_7[14], 142, 272);
doc.text(encounterendarray3_7[15], 142, 276);
doc.text(encounterendarray3_7[16], 142, 280);
doc.text(encounterendarray3_7[17], 142, 284);
doc.text(encounterendarray3_7[18], 142, 288);

// end main hall page

                // create the page
                doc.save('TestCards.pdf');
                }