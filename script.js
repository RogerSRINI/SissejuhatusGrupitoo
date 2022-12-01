// funktsioon https://youtu.be/MCRV9ajSfoc?t=321
// kui funktsioon välja kutsutakse, siis kerib lehe sujuvalt üles.
const toTop = () => window.scrollTo({top: 0, behavior: "smooth"});

function validation(emailField) //funktsioon, mis kontrollib e-maili kuju. https://stackoverflow.com/questions/7635533/validate-email-address-textbox-using-javascript
{
    var muster = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //e-maili "muster", ehk lubatud järjekord ja sümbolid.

    if (muster.test(emailField.value) == false) //kontrollib, kas funktsiooni parameeter on vastavuses mustriga.
    {
        alert("Kontrolli e-maili aadressi"); //kui pole, siis väljastab teate.
        return false;
    }

    return true;
}

