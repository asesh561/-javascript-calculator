# -javascript-calculator
Simple JavaScript Calculator by Asesh raj
<!DOCTYPE html>
<html lang="en">
    <head>

        <title>New calculator</title>
        <style>
            .main-container{
                height: 700px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .calcy{
                display: grid;
                grid-template-columns: repeat(4,70px);
                padding: 15px;
                background-color:rgb(2, 7, 25);
                border-radius: 30px;

            }
            #ipt{
                grid-column: span 4;
                height: 70px;
                width: 260px;
                border: none;
                border-radius: 30px;
                font-size: 50px;
                text-align: end;
                margin-top: 40px;
                margin-bottom: 32px;
                padding: 10px;
            }
            button{
                height: 45px;
                width: 45px;
                border-radius: 50%;
                background-color: rgb(173, 230, 216);
                border: none;
                font-size: 15px;
                margin: 10px;
            }
            #eq{
                width: 120px;
            }
            
        </style>
    </head>
<body>
    <div class="main-container">
        <div class="calcy">
            <input type="text"placeholder="0"id="ipt">
            <button>clear</button>
            <button>del</button>
            <button>%</button>
            <button>/</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>.</button>
            <button>0</button>
            <button id="eq">=</button>

        </div>
    </div>
    <script src="calc.js"></script>
</body>
