import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DbapiService } from './dbapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  public uuid;
  public answers=[];
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
  public testData1=[
    {
       "gId":1,
       "qId":1,
       "qaId":1,
       "bId":1,
       "qType":"DropDown",
       "question":"What you going to buy? Select the category that most closely applies.",
       "answer":"Market Research",
       "nextGId":2,
       "comments":""
     },
     {
       "gId":1,
       "qId":1,
       "qaId":2,
       "bId":1,
       "qType":"DropDown",
       "question":"What Category of Questions to choose?",
       "answer":"Software/SaaS",
       "nextGId":7,
       "comments":""
     },
         {
       "gId":1,
       "qId":1,
       "qaId":28,
       "bId":1,
       "qType":"DropDown",
       "question":"What Category of Questions to choose?",
       "answer":"Other",
       "nextGId":7,
       "comments":""
     },
     {
       "gId":1,
       "qId":30,
       "qaId":30,
       "bId":2,
       "qType":"FreeText",
       "question":"Provide a breif description of what you are buying.",
       "answer":"",
       "nextQId":8,
       "comments":""
     },
     {
       "gId":2,
       "qId":2,
       "qaId":3,
       "bId":2,
       "qType":"FreeText",
       "question":"Detailed description of the market research services.",
       "answer":"",
       "nextQId":8,
       "comments":""
     },
     {
       "gId":2,
       "qId":3,
       "qaId":4,
       "bId":2,
       "qType":"CheckBox",
       "question":"Will Supplier access, receive, or collect from Twitter? (select all that apply)",
       "answer":"sensitive information",
       "nextQId":8,
       "comments":""
    },
    {
       "gId":2,
       "qId":3,
       "qaId":5,
     "bId":2,
       "qType":"CheckBox",
       "question":"Will Supplier access, receive, or collect from Twitter? (select all that apply)",
       "answer":"Confidential Information",
       "nextQId":8,
       "comments":""
    },
    {
       "gId":2,
       "qId":3,
       "qaId":6,
       "bId":2,
       "qType":"CheckBox",
       "question":"Will Supplier access, receive, or collect from Twitter? (select all that apply)",
       "answer":"Personal Information of its users, customers/advertisers, employees/contingent workers, business partners or service providers",
       "nextQId":8,
       "comments":""
    },
    {
       "gId":2,
       "qId":3,
       "qaId":7,
       "bId":2,
       "qType":"CheckBox",
       "question":"Will Supplier access, receive, or collect from Twitter? (select all that apply)",
       "answer":"Personal Information from the European Union, UK or Switzerland?",
       "nextQId":8,
       "comments":""
    },
    {
       "gId":2,
       "qId":4,
       "qaId":8,
       "bId":2,
       "qType":"RadioButton",
       "question":"If surveys are being conducted, who will recruit respondents?",
       "answer":"Twitter",
       "nextQId":8,
       "comments":""
     },
     {
       "gId":2,
       "qId":4,
       "qaId":9,
       "bId":2,
       "qType":"RadioButton",
       "question":"If surveys are being conducted, who will recruit respondents?",
       "answer":"Supplier",
       "nextQId":8,
       "comments":""
     },
     {
       "gId":2,
       "qId":5,
       "qaId":10,
       "bId":2,
       "qType":"FreeText",
       "question":"How many respondents will be recruited?",
       "answer":"",
       "nextQId":8,
       "comments":""
     },
     {
       "gId":2,
       "qId":6,
       "qaId":11,
       "bId":2,
       "qType":"FreeText",
       "question":"What parameters define the respondents (eg. demographics)?",
       "answer":"",
       "nextQId":8,
       "comments":""
     },
     {
       "gId":2,
       "qId":7,
       "qaId":12,
       "bId":2,
       "qType":"FreeText",
       "question":"What information are we collecting on the respondents?",
       "answer":"",
       "nextQId":8,
       "comments":""
     },
     {
       "gId":3,
       "qId":8,
       "qaId":13,
       "bId":2,
       "qType":"RadioButton",
       "question":"Will Supplier need access to any Twitter systems, software or tools (i.e. Twitter API, SDK, JIRA, corporate Gmail, Salesforce, Oracle)?",
       "answer":"Yes",
       "nextGId":4,
       "comments":""
     },
     {
       "gId":3,
       "qId":8,
       "qaId":14,
       "bId":2,
       "qType":"RadioButton",
       "question":"Will Supplier need access to any Twitter systems, software or tools (i.e. Twitter API, SDK, JIRA, corporate Gmail, Salesforce, Oracle)?",
       "answer":"No",
       "nextGId":5,
       "comments":""
     },
     {
       "gId":4,
       "qId":9,
       "qaId":15,
       "bId":2,
       "qType":"FreeText",
       "question":"What countries/regions will research be conducted in?",
       "answer":"",
       "nextQId":13,
       "comments":""
     },
     {
       "gId":4,
       "qId":10,
       "qaId":16,
       "bId":2,
       "qType":"FreeText",
       "question":"Location(s) where the services will be delivered.",
       "answer":"",
       "nextQId":13,
       "comments":""
     },
     {
       "gId":5,
       "qId":11,
       "qaId":17,
       "bId":2,
       "qType":"RadioButton",
       "question":"Will the end deliverable/research report be shared externally? If yes, who will it be shared with and why?",
       "answer":"Yes",
       "nextQId":13,
       "comments":""
     },
     {
       "gId":5,
       "qId":11,
       "qaId":18,
       "bId":2,
       "qType":"RadioButton",
       "question":"Will the end deliverable/research report be shared externally? If yes, who will it be shared with and why?",
       "answer":"No",
       "nextQId":13,
       "comments":""
     },
     {
       "gId":5,
       "qId":12,
       "qaId":19,
       "bId":2,
       "qType":"DropDown",
       "question":"Name of Twitter signatory (Director level or above, per Legal Policy at go/sign)",
       "answer":"Director",
       "nextQId":13,
       "comments":""
     },
     {
       "gId":5,
       "qId":12,
       "qaId":20,
       "bId":2,
       "qType":"DropDown",
       "question":"Name of Twitter signatory (Director level or above, per Legal Policy at go/sign)",
       "answer":"Sr Director",
       "nextQId":13,
       "comments":""
     },
     {
       "gId":5,
       "qId":12,
       "qaId":21,
       "bId":2,
       "qType":"DropDown",
       "question":"Name of Twitter signatory (Director level or above, per Legal Policy at go/sign)",
       "answer":"Vice President",
       "nextQId":13,
       "comments":""
     },
     {
       "gId":6,
       "qId":13,
       "qaId":22,
       "bId":2,
       "qType":"FreeText",
       "question":"Project lead (person who will own the PO and approve invoices, if different from requester)",
       "answer":"",
       "nextGId":9,
       "comments":""
     },
     {
       "gId":7,
       "qId":14,
       "qaId":23,
       "bId":2,
       "qType":"DropDown",
       "question":"Software SAAS Question1",
       "answer":"Sr Director",
       "nextQId":16,
       "comments":""
     },
     {
       "gId":7,
       "qId":14,
       "qaId":24,
       "bId":2,
       "qType":"DropDown",
       "question":"Software SAAS Question1",
       "answer":"Vice President",
       "nextQId":16,
       "comments":""
     },
     {
       "gId":7,
       "qId":15,
       "qaId":25,
       "bId":2,
       "qType":"FreeText",
       "question":"Software SAAS Question2",
       "answer":"",
       "nextQId":16,
       "comments":""
     },
     {
       "gId":8,
       "qId":16,
       "qaId":26,
       "bId":2,
       "qType":"FreeText",
       "question":"Software SAAS Question3",
       "answer":"",
       "nextQId":0,
       "comments":""
     },
     {
       "gId":9,
       "qId":31,
       "qaId":31,
       "bId":1,
       "qType":"FreeText",
       "question":"Spend  / Budget Estimated",
       "answer":"",
       "nextGId":7,
       "comments":""
     },
     {
       "gId":9,
       "qId":32,
       "qaId":32,
       "bId":1,
       "qType":"DropDown",
       "question":"Currency",
       "answer":"USD",
       "nextGId":7,
       "comments":""
     },
     {
       "gId":9,
       "qId":32,
       "qaId":33,
       "bId":1,
       "qType":"DropDown",
       "question":"Currency",
       "answer":"EUR",
       "nextGId":7,
       "comments":""
     },
     {
       "gId":9,
       "qId":32,
       "qaId":34,
       "bId":1,
       "qType":"DropDown",
       "question":"Currency",
       "answer":"SGD",
       "nextGId":7,
       "comments":""
     }

 ];

 constructor(private apiService: DbapiService, private route: ActivatedRoute) {
  this.readData();
}

ngOnit()
{
   let id =this.route.snapshot.paramMap.get('id');
   console.log(id);
}

readData()
{
  console.log("before call");
  //this._route.queryParams.subscribe(params => {this.uuid =params['uuid']});
  console.log('uuid');
  this.apiService.getTransData("5e7aa96770a39b530ebe67f3").subscribe((data)=>
  {this.Survey1=data;
   let status = data.status;
   this.Survey  = data.questionSet.questions;
   this.filter1 = data.questionSet.questions;
    console.log(this.Survey);

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

 /*ngOnInit()
 {




 } */



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

  this.apiService.updateTransData("5e7aa96770a39b530ebe67f3",this.Survey1).subscribe(
    (res) => {
      console.log('Update called successfully');
    }, (error) => {
      console.log(error);
    });


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

    if(this.nextGId)
    {
      this.testData2 = this.Survey.filter(val=>{return val.groupId===this.nextGId});
    }
    else
    {
      this.testData2 = this.Survey.filter(val=>{return val.questionId===this.nextQId});
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
