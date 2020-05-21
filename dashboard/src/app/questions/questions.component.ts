import { Component, OnInit,ViewChild } from '@angular/core';
import { DbapiService } from './../dbapi.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTable } from '@angular/material';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  title = 'DynamicForm';
  public formData=[];
  public dropt=[];
  public testData=[];
  public testData2=[];
  public formData1=[];
  public nextGId;
  public nextQId;
  public batchId;
  public groupId;
  public totalq;
  public totala;
  public uuid;
  public data;
  public norecords;
  public answers=[];
  @ViewChild('table', {static: false})table: MatTable<Element>;
  displayedColumns: string[] = ['question', 'answer', 'comments'];
  //public answers1={};
  //public answers1: { qId: number, question: string, answer: string };
  public commentsData=[];
  public ansId =[];
  show1 =true;
  show2 =false;
  show3 =false;
  selectedValue="";
  showComment01;
  Survey:any =[];
  Survey1:any =[];
  filter1:any =[];
  filter2:any =[];
  progresswidth: any;
  constructor(private apiService: DbapiService, private route: ActivatedRoute) {
    this.readData();
  }

  ngOnInit() {
    this.progresswidth =0;
  }

  readData()
  {
    console.log("before call");
    this.norecords = false;
   this.uuid =this.route.snapshot.params['id'];
    //this._route.queryParams.subscribe(params => {this.uuid =params['uuid']});
    console.log('id '+this.uuid);

   this.apiService.getTransData(this.uuid).subscribe((data)=>
   {

      this.Survey1=data;
     let status = data.status;
     this.Survey  = data.questionSet.questions;
     this.filter1 = data.questionSet.questions;
      console.log(this.Survey);
      console.log(this.Survey.length);
      this.totalq = this.Survey[this.Survey.length-1].questionId;

      if(status === 'N' || status == 'I')
      {
      this.filter1 = this.filter1.filter(val=>{return val.isQuestionSelected==='N'});
      this.filter2 = this.Survey.filter(val=>{return val.isThisAnswer==='Y'});

      console.log(this.filter1);
      if(this.filter1.length !== 0)
      {
        this.groupId = this.filter1[0].groupId;
        console.log(this.groupId);
      //this.testData = this.testData1.filter(val=>{return val.gId===1});
      this.testData = this.Survey.filter(val=>{return val.groupId===this.groupId});
      }
      else
      {
        this.testData = this.Survey.filter(val=>{return val.groupId===1});

      }


      for(let i=0;i<this.filter2.length;i++)
      {
        var answers1: {[k: string]: any} = {};
        answers1.qId =this.filter2[i].questionId;
        answers1.qaId =this.filter2[i].answerId;
        answers1.question =this.filter2[i].question;
        answers1.answer =this.filter2[i].answer;

        this.answers.push(answers1);

      }
    }
      console.log(this.testData);
    })



  }



   onDropDown = function()
   {
     console.log(this.formData1);

     this.formData1.forEach((item,index) =>{
      console.log(item);
      console.log(index);
      console.log(this.testData);
      this.dropt = this.Survey.filter(val1 => {return val1.answerId === +item });
      console.log(this.dropt);
      if(this.dropt[0].nextGroupID)
      {
         this.nextGId = this.dropt[0].nextGroupID;
      }
     else
      {
        this.nextQId = this.dropt[0].nextQuestionId;
      }
      });
   }

   doStart()
   {
     this.testData = [];
     this.testData = this.Survey.filter(val=>{return val.groupId===1});
     //this.idx = 0;
     this.answers=[];
     this.formData1=[];
     this.formData=[];
     this.commentsData=[];


   }

   save()
   {
     //let answern={};

     //this.answers =[{"Question":1,"Anaswer":"Answer1","comments":"comment1"},{"Question":2,"Anaswer":"Answer2","comments":"comment2"}];
     console.log(this.answers);
     this.Survey1.status ='I';
     for(let i=0; i<this.answers.length;i++)
     {
        for(let j=0; j<this.Survey1.questionSet.questions.length;j++)
        {
           if(this.answers[i].qId === this.Survey1.questionSet.questions[j].questionId)
           {
             this.Survey1.questionSet.questions[j].isQuestionSelected = "Y";

           }
           if(this.answers[i].qaId === this.Survey1.questionSet.questions[j].answerId)
           {
             this.Survey1.questionSet.questions[j].isThisAnswer = "Y";
             this.Survey1.questionSet.questions[j].answer =this.answers[i].answer;

           }

        }

     }

    console.log(this.Survey1);
    //let answern = this.answers[0];

   /* this.apiService.updateTransData(this.uuid,this.Survey1).subscribe(
      (res) => {
        console.log('Update called successfully');
      }, (error) => {
        console.log(error);
      }); */


   }




   getNext(val)
    {
      console.log(val);
      this.showComment01 = !this.showComment01;
      if(val.answerId ===13 ||val.answerId ===8)
       {
         this.showComment01 =true;
       }
       else
       {
         this.showComment01 =false;
       }
       if(val.nextGroupID)
       {
         this.nextGId = val.nextGroupID;
       }
       else
       {
         this.nextQId = val.nextQuestionId;
       }
    }

    doNext()
    {
      console.log('test');
      console.log(this.dropt);
      console.log(this.commentsData);
      console.log(this.nextGId);
      console.log(this.nextQId);
      console.log(this.formData);

      if(this.formData.length>0)
      {
       this.formData.forEach((item,index) =>{

          var answers1: {[k: string]: any} = {};

          this.ansId = this.Survey.filter(val=>{return val.answerId === +index});
          console.log(this.ansId);
          if(this.ansId.length>0)
          {
          answers1.qId =this.ansId[0].questionId;
          answers1.qaId =this.ansId[0].answerId;
          answers1.question =this.ansId[0].question;
          answers1.answer =this.ansId[0].answer;
          }
           if(this.ansId[0].answer)
            {
              answers1.answer =this.ansId[0].answer;
            }
            else
            {
              answers1.answer =item;
            }

            if(this.commentsData.length >0)
            {

              this.commentsData.forEach((item,index) =>{

                if(index === this.ansId[0].answerId)
                {
                    answers1.comments =item;
                }

              });

            }
            else
            {
              answers1.comments ="";
            }

            this.answers.push(answers1);
            console.log(this.answers);

       });

      }

      if(this.formData1.length>0)
      {
        this.formData1.forEach((item,index) =>{

          var answers1: {[k: string]: any} = {};

          this.ansId = this.Survey.filter(val=>{return val.answerId === +item});
          console.log(this.ansId);
          answers1.qId =this.ansId[0].questionId;
          answers1.qaId =this.ansId[0].answerId;
          answers1.question =this.ansId[0].question;
          answers1.answer =this.ansId[0].answer;
          answers1.comments ="";
          this.answers.push(answers1);

         });
      }

       console.log(this.answers);
       this.totala = this.answers[this.answers.length-1].qId;
       this.progresswidth = Math.round((this.totala/this.totalq)*100);
       this.table.dataSource=this.answers;
       this.table.renderRows();

      if(this.nextGId)
      {
        this.testData2 = this.Survey.filter(val=>{return val.groupId===this.nextGId});
      }
      else
      {
        this.testData2 = this.Survey.filter(val=>{return val.questionId===this.nextQId});
      }

      if(!this.nextGId && !this.nextQId)
      {
        this.norecords = true;
      }

      this.testData =[];
      for(let i=0;i<this.testData2.length;i++)
      {
       this.testData.push(this.testData2[i]);
       this.batchId = this.testData2[i].batchId;
      }
        console.log(this.testData);
        this.formData=[];
        this.formData1=[];
        this.commentsData=[];
        this.nextGId="";
        this.nextQId="";



    }

}
