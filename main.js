document.getElementById("Calculate-Formula").addEventListener("click", MissingSide);

function MissingSide() {
    let FormulaPartA = +document.getElementById("FormulaPartA").value;
    let FormulaPartB = +document.getElementById("FormulaPartB").value;
    let FormulaPartC = +document.getElementById("FormulaPartC").value;

    let MissingSide = 0;
    if(FormulaPartA == 0){
        MissingSide = Math.sqrt( (FormulaPartC ** 2) - (FormulaPartB ** 2));
    }
    if(FormulaPartB == 0){
        MissingSide = Math.sqrt((FormulaPartC ** 2) - (FormulaPartA ** 2));
    }
    if(FormulaPartC == 0){
        MissingSide = Math.sqrt((FormulaPartA ** 2) + (FormulaPartB ** 2));
    }

    document.getElementById("Missing-Side").innerHTML = MissingSide;
    FeildsFilled();
}

function FeildsFilled() {
    let FormulaPartA = +document.getElementById("FormulaPartA").value;
    let FormulaPartB = +document.getElementById("FormulaPartB").value;
    let FormulaPartC = +document.getElementById("FormulaPartC").value;

    let FilledFeilds = 0;

    if (FormulaPartA != 0){
        FilledFeilds = FilledFeilds + 1;
    } else {
        FilledFeilds = FilledFeilds - 1;
    }
    if (FormulaPartB != 0){
        FilledFeilds = FilledFeilds + 1;
    } else {
    FilledFeilds = FilledFeilds - 1;
    }
    if (FormulaPartC != 0){
        FilledFeilds = FilledFeilds + 1;
    } else {
        FilledFeilds = FilledFeilds - 1;
    }

    if (document.getElementById("ERROR_form-feilds").innerHTML == "" && FilledFeilds != 1){
        document.getElementById("ERROR_form-feilds").innerHTML = "*2 out of 3 feilds required*"
        document.getElementById("Missing-Side").innerHTML = "ERROR:Feild_Missing";
    } else if (document.getElementById("ERROR_form-feilds").innerHTML == "*2 out of 3 feilds required*" && FilledFeilds == 1){
        document.getElementById("ERROR_form-feilds").innerHTML = ""
    }
}
