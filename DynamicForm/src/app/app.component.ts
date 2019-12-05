import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicForm';
  testData1=[
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

 testData = this.testData1.filter(val=>{return val.gId===1});

}
