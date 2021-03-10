import { Component } from '@angular/core';
import { trigger,
         transition,
         state,
         style,
         animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './chat.css',
              './benefit.css',
              './gridStyling.css'],
  animations:[
   trigger('fluidInput',[
    state('normal',
     style({width:'50vw'})),
    state('expanded',
     style({width:'60vw'})),
                    
    state('contracted',
     style({width:'40vw'})),
    transition('*=>*',[
     animate(2000)
    ])
   ]),
   trigger('brainPosition',[
    state('tiltedRight',
     style({width:'90%',
            transform:'rotate(30deg)'})),
    state('tiltedLeft',
     style({width:'90%',
            transform:'rotate(-30deg)'})),
    state('tiltedCenter',
     style({width:'70%',
            transform:'rotate(0deg)'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),
   trigger('lungsGrow',[
    state('large',
     style({width:'70%'})),
    state('small',
     style({width:'50%'})),
    transition('small=>large',[
     animate(4000)
    ]),
    transition('large=>small',[
     animate(8000)
    ])
   ]),
   trigger('listGrow',[
    state('expanded',
     style({'font-size':'140%',
            'color':'red'})),
    state('contracted',
     style({'font-size':'100%',
            'color':'black'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),
   trigger('fadeInOut',[
    transition('void=>*',[
     style({opacity:0,
            height:'0px',
            color:'transparent'}),
     animate(2000)
    ]),
    transition('*=>void',[
     style({opacity:1}),
     animate(2000,style({opacity:0,
                         color:'transparent',
                         height:'0px'}))
    ])
   ]),

   trigger('fadeUpDown',[
    transition('void=>*',[
     style({opacity:0,
            height:'0px',
            color:'transparent'}),
     animate(500)
    ]),
    transition('*=>void',[
     style({opacity:0.8}),
     animate(500,style({opacity:0,
                        color:'transparent',
                        height:'0px'}))
    ])
   ]),
   trigger('headerAnim',[
    state('one',
     style({transform:'translateX(0%)'})),
    state('two',
     style({transform:'translateX(-100%)'})),
    state('three',
     style({transform:'translateX(-200%)'})),
    state('four',
     style({transform:'translateX(-300%)'})),
    state('five',
     style({transform:'translateX(-400%)'})),
    transition('*=>*',[
     animate(1000)
    ])
   ]),
   trigger('ham',[
    state('hidden',
     style({'clip-path':'circle(0% at 90% 10%)'})),
    state('visible',
     style({'clip-path':'circle(130% at 90% 10%)'})),
    transition('*=>*',[
     animate(2000)
    ])
   ])

  ]
})
export class AppComponent {
  title = 'my-app';
  myState:string='hidden';
  headerState:string='two';
  headerStateNumber:number=5;
  headerStateOrder:number=0;
  list1a:number=1;
  list1b:number=1;
  list1c:number=1;
  list2a:number=0;
  list2b:number=0;
  list2c:number=0;
  list3a:number=0;
  list3b:number=0;
  list3c:number=0;
  list4a:number=0;
  list4b:number=0;
  list4c:number=0;
  list5a:number=0;
  list5b:number=0;
  list5c:number=0;
  list1state:string='contracted';
  list2state:string='contracted';
  list3state:string='contracted';
  lungsCounter:number=0;
  inhaleSeconds:number=4;
  holdSeconds:number=7;
  exhaleSeconds:number=8;
  lungsState:string='small';
  brainState:string='tiltedCenter';
  benefitSelect:number=-1;
  growOnHover:number=1;
  leftTextState:string='normal';
  rightTextState:string='normal';
  happyThoughts=[];

  sadThoughts=[];
  happyThought:string;
  sadThought:string;
  
    constructor(){
    
   setInterval(()=>{
    if(this.headerStateOrder==0)
     this.headerStateNumber=this.headerStateNumber+0.5;
    else
     this.headerStateNumber=this.headerStateNumber-0.5;

    if(this.headerStateNumber==45)
     this.headerStateOrder=1;
    else if(this.headerStateNumber==5)
     this.headerStateOrder=0;
    if(this.headerStateNumber>=0 &&
       this.headerStateNumber<10)
     this.headerState='one';
    else if(this.headerStateNumber>=10 &&
            this.headerStateNumber<20)
     this.headerState='two';
    else if(this.headerStateNumber>=20 &&
            this.headerStateNumber<30)
     this.headerState='three';
    else if(this.headerStateNumber>=30 &&
            this.headerStateNumber<40)
     this.headerState='four';
    else if(this.headerStateNumber>=40 &&
            this.headerStateNumber<50)
     this.headerState="five";

    if(this.headerStateOrder==0 &&
       this.headerStateNumber==8.5)
     this.list1a=0;
    else if(this.headerStateOrder==0 && 
            this.headerStateNumber==9)
     this.list1b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==9.5)
     this.list1c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==11)
     this.list2c=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==11.5)
     this.list2b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==12)
     this.list2a=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==18.5)
     this.list2a=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==19)
     this.list2b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==19.5)
     this.list2c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==21)
     this.list3c=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==21.5)
     this.list3b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==22)
     this.list3a=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==28.5)
                                     
     this.list3a=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==29)
     this.list3b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==29.5)
     this.list3c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==31)
     this.list4c=1;
                
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==31.5)
     this.list4b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==32)
     this.list4a=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==38.5)
     this.list4a=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==39)
     this.list4b=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==39.5)
     this.list4c=0;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==41)
     this.list5c=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==41.5)
     this.list5b=1;
    else if(this.headerStateOrder==0 &&
            this.headerStateNumber==42)
     this.list5a=1;
    else{
     if(this.headerStateNumber==41)
      this.list5a=0;
     else if(this.headerStateNumber==40.5)
      this.list5b=0;
     else if(this.headerStateNumber==40)
      this.list5c=0;
     else if(this.headerStateNumber==38.5)
      this.list4c=1;
     else if(this.headerStateNumber==38)
      this.list4b=1;
     else if(this.headerStateNumber==37.5)
      this.list4a=1;
     else if(this.headerStateNumber==31)
      this.list4a=0;
     else if(this.headerStateNumber==30.5)
      this.list4b=0;
     else if(this.headerStateNumber==30)
      this.list4c=0;
     else if(this.headerStateNumber==28.5)
      this.list3c=1;
     else if(this.headerStateNumber==28)
      this.list3b=1;
     else if(this.headerStateNumber==27.5)
      this.list3a=1;
     else if(this.headerStateNumber==21)
      this.list3a=0;
     else if(this.headerStateNumber==20.5)
      this.list3b=0;
     else if(this.headerStateNumber==20)
      this.list3c=0;
     else if(this.headerStateNumber==18.5)
      this.list2c=1;
     else if(this.headerStateNumber==18)
      this.list2b=1;
     else if(this.headerStateNumber==17.5)
      this.list2a=1;
     else if(this.headerStateNumber==11)
      this.list2a=0;
     else if(this.headerStateNumber==10.5)
      this.list2b=0;
     else if(this.headerStateNumber==10)
      this.list2c=0;
     else if(this.headerStateNumber==8.5)
      this.list1c=1;
     else if(this.headerStateNumber==8)
      this.list1b=1;
     else if(this.headerStateNumber==7.5)
      this.list1a=1;
    }
   },500);
   setInterval(()=>{
    this.lungsCounter=(this.lungsCounter+1)%19;
    this.list1state='contracted';
    this.list2state='contracted';
    this.list3state='contracted';
     if(this.lungsCounter>=0 &&
        this.lungsCounter<=3){
      this.lungsState='large';
      this.exhaleSeconds=8;
      if(this.lungsCounter==0)
       this.inhaleSeconds=5;
      this.inhaleSeconds=(this.inhaleSeconds-1);
      this.list1state='expanded';
     }
     else if(this.lungsCounter>=4 &&
             this.lungsCounter<=10){
      this.inhaleSeconds=4;
      if(this.lungsCounter==4)
       this.holdSeconds=8;
      this.holdSeconds=(this.holdSeconds-1);
      this.list2state='expanded';
     }
     else{
      this.lungsState='small';
      this.holdSeconds=7;
      if(this.lungsCounter==11)
       this.exhaleSeconds=9;
      this.exhaleSeconds=this.exhaleSeconds-1;
      this.list3state='expanded';
     }
   },1000);  
  }

  show(){
   this.myState='visible';
  }
  hide(){
   this.myState='hidden';
  }
  left(){
   this.brainState='tiltedLeft';
  }
  right(){
   this.brainState='tiltedRight';
  }
  center(){
   this.brainState='tiltedCenter';
  }
  leftTextExpand(){
   this.leftTextState='expanded';
   this.rightTextState='contracted';
  }
  rightTextExpand(){
   this.leftTextState='contracted';
   this.rightTextState='expanded';
  }
  randomHappyResponse(a,b):string{
   let abs:number=Math.floor(Math.random()*(b-a+1))+a;
   let response:string;
   if(abs==0)
    response='That sounds really heartfelt and nice, maybe you should remind yourself how this made you feel more often.';
   if(abs==1)
    response='I hope you are taking a step back, pausing for a second just to consume all this joy and excitement';
   return(response);
  }
  randomSadResponse(a,b):string{
   let abs:number=Math.floor(Math.random()*(b-a+1))+a;
   let response:string;
   if(abs==0)
    response='There seems to be so much unnecessary burden on your mind, there will alyways be better circumstances.';
   if(abs==1)
    response='Perhaps you should make an attempt to let go of all these intense emotions. There is peace in closure.';
   return(response);
  }
  appendHappy(){
   let myResponse:string=this.randomHappyResponse(0,1);
   this.happyThoughts.push({'resp':myResponse,
                            'thought':this.happyThought});
  }
  appendSad(){
   let myResponse:string=this.randomSadResponse(0,1);
   this.sadThoughts.push({'resp':myResponse,
                          'thought':this.sadThought});
  }
}
