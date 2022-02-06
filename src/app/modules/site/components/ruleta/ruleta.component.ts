import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css'],
  // template:`
  //   <input type="button" value="spin" style="float:left;" id='spin'>
  //   <canvas #canvas id="canvas" width="500" height="500"></canvas>
  // `,
})
export class RuletaComponent implements OnInit {

  BetForm = new FormGroup({
    bet: new FormControl(''),
    number: new FormControl(''),
    colour: new FormControl(''),
    EvenOrOdd: new FormControl(''),
    CheckedEvenOrOdd: new FormControl(''),
    CheckedPrecise : new FormControl(''),
    CheckedColour: new FormControl(''),
  })
  // @ViewChild('canvas')
  // canvas!: ElementRef<HTMLCanvasElement>;

  // private ctx: CanvasRenderingContext2D | undefined;
  
  public balance : any;
  public earnings : any;
  public id : any;
 

  constructor(private http: HttpClient) {
    var spin = 0;
    
   }

  ngOnInit(): void {
    // this.ctx = this.canvas.nativeElement.getContext('2d');
   // var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
    //var ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    this.http.get<any>("http://localhost:3000/comments")
   .subscribe(res => {
      const user = res.find((a:any)=>{
        if(a.username === localStorage.getItem('username')){
          this.balance = a.balance;
          this.earnings = a.earnings;
          this.id = a.id;
          return true;
        }
        else return false;
      })
   })

    this.drawRouletteWheel();
  }


   drawRouletteWheel() {

     var options = ['0','32','15','19','4','21','2','25','17','34','6','27','13','36','11','30','8','32','10','5','24','16','33','1','20','14','31','9','22','18','29','7','28','12','35','3','26'];
    //var options = ['1','2','3','5','8','9','10'];
    var startAngle = 0;
    var spinTimeout = null;
    //modif
    var arc = Math.PI / (options.length / 2);
    
    var spinArcStart = 10;
    var spinTime = 0;
    var spinTimeTotal = 0;

    //var ctx;

    //document.getElementById("spin").addEventListener("click",spin);
    
      var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
      if(canvas.getContext){
          var outsideRadius = 200;
          var textRadius = 160;
          var insideRadius = 150;

          var ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
          ctx.clearRect(0,0,500,500);
          ctx.strokeStyle = "black";
          ctx.lineWidth = 2;

          ctx.font = 'bold 12px Helvetica, Arial';

          for(var i = 0; i < options.length; i++){
              var angle = startAngle + i * arc;
              if(i == 0){
                  ctx.fillStyle ="#008000";
              }
              else {
                  if(i%2 == 0){
                  ctx.fillStyle = "#000000";
                  }
                  else {
                      ctx.fillStyle = "#FF0000";
                  }
              
              }
              ctx.beginPath();
              ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
              ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
              ctx.stroke();
              ctx.fill();

              ctx.save();
              ctx.shadowOffsetX = -1;
              ctx.shadowOffsetY = -1;
              ctx.shadowBlur    = 0;
              ctx.shadowColor   = "rgb(220,220,220)";
              ctx.fillStyle = "black";
              ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                              250 + Math.sin(angle + arc / 2) * textRadius);
              ctx.rotate(angle + arc / 2 + Math.PI / 2);
              var text = options[i];
              ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
              ctx.restore(); 
          }

          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
          ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
          ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
          ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
          ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
          ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
          ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
          ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
          ctx.fill();
          

      
    }
    
  }

  spin(){

    var TestBalance : number = + this.balance;
    var TestBet : number = + this.BetForm.value.bet;
    if ( TestBet <= TestBalance/2){
    var options = ['0','32','15','19','4','21','2','25','17','34','6','27','13','36','11','30','8','32','10','5','24','16','33','1','20','14','31','9','22','18','29','7','28','12','35','3','26'];
    //var options = ['1','2','3','5','8','9','10'];
    var startAngle = 0;
    var spinTimeout = null;
    //modif
    var arc = Math.PI / (options.length / 2);
    
    var spinArcStart = 10;
    var spinTime = 0;
    var spinTimeTotal = 0;

    var temp: string ;
    var indexX = 0;

    console.log('Da');

    function drawRouletteWheel2()
    {
      
      var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');
      if(canvas.getContext){
          var outsideRadius = 200;
          var textRadius = 160;
          var insideRadius = 150;

          var ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
          ctx.clearRect(0,0,500,500);
          ctx.strokeStyle = "black";
          ctx.lineWidth = 2;

          ctx.font = 'bold 12px Helvetica, Arial';

          for(var i = 0; i < options.length; i++){
              var angle = startAngle + i * arc;
              if(i == 0){
                  ctx.fillStyle ="#008000";
              }
              else {
                  if(i%2 == 0){
                  ctx.fillStyle = "#000000";
                  }
                  else {
                      ctx.fillStyle = "#FF0000";
                  }
              
              }
              ctx.beginPath();
              ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
              ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
              ctx.stroke();
              ctx.fill();

              ctx.save();
              ctx.shadowOffsetX = -1;
              ctx.shadowOffsetY = -1;
              ctx.shadowBlur    = 0;
              ctx.shadowColor   = "rgb(220,220,220)";
              ctx.fillStyle = "black";
              ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                              250 + Math.sin(angle + arc / 2) * textRadius);
              ctx.rotate(angle + arc / 2 + Math.PI / 2);
              var text = options[i];
              ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
              ctx.restore(); 
          }

          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
          ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
          ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
          ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
          ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
          ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
          ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
          ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
          ctx.fill();   
      }
    }

    var spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;

    rotateWheel();
    function rotateWheel() {
      spinTime += 30;
      if(spinTime >= spinTimeTotal) {
          stopRotateWheel();
          return;
      }
      var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
      startAngle += (spinAngle * Math.PI / 180);
      drawRouletteWheel2();
      //let spinTimeout: ReturnType<typeof setTimeout>;
      spinTimeout = setTimeout(rotateWheel, 30);
      
      }
    
      function stopRotateWheel() {
        //clearTimeout(spinTimeout);
        var degrees = startAngle * 180 / Math.PI + 90;
        var arcd = arc * 180 / Math.PI;
        var index = Math.floor((360 - degrees % 360) / arcd);
        console.log(options[index]);
        temp = options[index];
        indexX = index;
        console.log(indexX);
        
        }
    
        function easeOut(t: number, b: number, c: number, d: number) {
          var ts = (t/=d)*t;
          var tc = ts*t;
          return b+c*(tc + -3*ts + 3*t);
          }
      
    drawRouletteWheel2();

    function sleep(milliseconds: number) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }
    
   // sleep(2000);
    
    
    // console.log(this.balance);
    // console.log(this.BetForm.value.bet)
    // console.log(this.BetForm.value.CheckedColour)
    // console.log(this.BetForm.value.CheckedPrecise)
    //betting system

    //this.BetForm.value.bet;
    //this.balance
    //this.earnings
    setTimeout( () => {  

      var magicBet : number = + this.BetForm.value.bet;
      var newBalance : number = + this.balance;
      var newEarnings : number = + this.earnings;
    if(this.BetForm.value.number != ''){
      console.log("bet accepted")
      //avem un pariu all in pe numar la rata 35:1
      if(this.BetForm.value.number === temp)
      {
        console.log("you win (straight up)")
        newBalance = newBalance + magicBet * 35 ;
        newEarnings = newEarnings + magicBet * 35;
      } 
      else {
        console.log("you lose (straight up)")
        newBalance = newBalance - magicBet;
        console.log("balanta noua " + newBalance)
      }
    }
    else {
      //nu avem bet all in pe numar
      //bet pe culoare 1:1
      if (this.BetForm.value.colour != ''){
        //console.log("bet pe culori")
        var x : number = + indexX;
        //console.log("indicele" + x);
        //console.log(temp);
        if(x == 0){
          var placeholder = "green";
        }
        else {
          if(x % 2 == 0)
          {
            var placeholder = "black";
          }
          else {
            var placeholder = "red";
          }
        }
        //console.log(this.BetForm.value.colour);
        //console.log(placeholder);
        if(this.BetForm.value.colour === placeholder){
          console.log("you win (colour)");
          newBalance = newBalance + magicBet;
          newEarnings = newEarnings + magicBet;
          if (placeholder === 'green'){
            newBalance = newBalance + magicBet * 34;
            newEarnings = newEarnings + magicBet * 34;
          }
        }
        else {
          console.log("you lost (colour)");
          newBalance = newBalance - magicBet;
        }
      }

      //putem avea si bet pe odd 1:1
      if(this.BetForm.value.EvenOrOdd != ''){
        var x : number = + temp;
        if ( x % 2 == 0){
          var placeholder = "even";
        }
        else {
          var placeholder = "odd";
        }

        if(this.BetForm.value.EvenOrOdd === placeholder){
          console.log("you win (OddOrEven)");
          newBalance = newBalance + magicBet;
          newEarnings = newEarnings + magicBet;
        }
        else {
          console.log("you lose (OddOrEven)");
          newBalance = newBalance - magicBet;
        }
      }
    }

    //aici dau un quick patch la db
    var adress = "http://localhost:3000/comments" + '/' + this.id;
    console.log(adress);
    this.http.patch(adress,{"balance": newBalance,}).subscribe(
      (val) => {
        console.log("PATCH call successful value returned in body", 
                    val);
    },
    response => {
        console.log("PATCH call in error", response);
    },
    () => {
        console.log("The PATCH observable is now completed.");
    });

    //facem update si la total earnings
    this.http.patch(adress,{"earnings": newEarnings,}).subscribe(
      (val) => {
        console.log("PATCH call successful value returned in body", 
                    val);
    },
    response => {
        console.log("PATCH call in error", response);
    },
    () => {
        console.log("The PATCH observable is now completed.");
    });

    console.log(this.id);

    setTimeout( () => {
    window.location.reload();
  }, 2000 );
  
  }, 5000 ); //timeout

}
else {
  console.log("Not enough money")
}
  }

  
  

  
  



  

}


