$(document).ready(function () {
    // task One
    let alertButton = $("<button></button>");
    alertButton.text("Smile Button");
    $("body").append(alertButton);

    $(alertButton).click(function () {
        alert("you are so cool:)")
    });

    // task Two 
    $("#exTwoBtn").click(function () {
        alert($("what up.").val())
    });

    // task Three
    $("#exThreeDiv").css({
        "width": "100em",
        "height": "10em",
    });

    $("#exThreeDiv").mouseover(function () {
        $("#exThreeDiv").css({
            "width": "100em",
            "height": "10em",
            "background-color": "darkseagreen"
        });
    });
    $("#exThreeDiv").mouseout(function () {
        $("#exThreeDiv").css({
            "width": "100em",
            "height": "10em",
            "background-color": "white"
        });
    });

    // task Four
    let newPar = $("<p></p>")
    newPar.text("“Sometimes Ill start a sentence and I don’t even know where it’s going. I just hope I find it along the way.” —Michael Scott");
    $("body").append(newPar);

    $(newPar).click(function () {
        newPar.css("color", changeColor());
    });

    function changeColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // task Five
    let newDiv = $("<div></div>");
    $("body").append(newDiv);

    let nameButton = $("<button></button>");
    nameButton.text("Add Name");
    $(newDiv).append(nameButton);

    $(nameButton).click(function () {
        let newSpan = $("<span></span>");
        newSpan.text("Taylor B. ")
        $(newDiv).append(newSpan);
    });

    // task Six
    let counter = 0;

    $("#friendButton").click(function () {
        const friends = ["Mac", "Lisa", "Star", "Hb", "Kyle", "Kelly", "Scott", "Row", "Caysen", "Debbie"]
        if (counter == 10) {
            return;
        } else {
            let friend = friends[counter];
            let newItem = $("<li></li>");
            newItem.text(friend);
            $("#friendList").append(newItem);
            counter++;
        };
    });
});