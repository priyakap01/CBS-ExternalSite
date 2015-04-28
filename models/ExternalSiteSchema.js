var mongoose = require('mongoose');

var externalSchema = new mongoose.Schema({
  proname : String,

  Ticker : String,
  Project_Name : String,
  Project_Manager : String,

  welcomePageSchema :  {

    Banner :String,
    We_Are_Here : {
      as_of_date: String,
      Phases : [{
        Stage : String,
        Phase_detail : [{ 
          Description : [String],
          Class : String
        }]
      }]
    },
    Key_Dates_Watch : [{
      Phases : [{
        Phase : [{ 
          Phase_No : String,
          Milestone : [String],
          Target_Date : [String],
          Status : [String],
          Comments : [String]
        }]
      }]
    }],

    Keys_Success_Left :{ 
      as_of_date : String,

      Stakeholders : String,
      Business_Benefits : String,
      Work_Schedule : String,
      Team :String,
      Scope_Managed :String,
      Risks :String,
      Organization_Benefits :String,
      Overall_Status : String
    },
    Keys_Success_Right: {
      Stakeholders : { 
        Comments : String , 
        Colour_Forecast : String 
      },
      Business_Benefits : {
        Comments : String ,
        Colour_Forecast : String
      },
      Work_Schedule : { 
        Comments : String , 
        Colour_Forecast : String
      },
      Team :{ 
        Comments : String , 
        Colour_Forecast : String
      },
      Scope_Managed :{ 
        Comments : String , 
        Colour_Forecast : String
      },
      Risks :{ 
        Comments : String , 
        Colour_Forecast : String
      },
      Organization_Benefits :{ 
        Comments : String , 
        Colour_Forecast : String
      }
    },
  
  Operational_Stability : [{
    As_of_date_op_stability : String,
    Total_down_time_month_fig : String,
    Total_down_time_month_fig_class:String,
    Total_down_time_month_note : [String],
    Total_down_time_Q_fig : String,
    Total_down_time_Q_fig_class :String,
    Total_down_time_Q_note : [String],
    Avg_MTTR_fig1 : String,
    Avg_MTTR_note1 :[String],
    Avg_MTTR_fig1_class :String,
    Red_High_Priority_Incid_fig : String,
    Red_High_Priority_Incid_fig_class :String,
    Red_High_Priority_Incid_note : [String],
    Red_High_Priority_Incid_3and4_fig : String,
    Red_High_Priority_Incid_3and4_fig_class :String,
    Red_High_Priority_Incid_3and4_note : [String],
    Avg_MTTR_fig2 : String,
    Avg_MTTR_fig2_class:String,
    Avg_MTTR_note2 : [String]
  }],

    Upcoming_Events : [{
      Event : String,
      date : String,
      Event_Desc : [String]
    }],
  },

aboutPageSchema : {
  Banner : String,
  Page_Description : [String],
  Approach_Timeline :String,
  Methodology : String,
  Scope : {
    Image1 : String,
    Image2 :String,
    Image3 : String
  },
  Core_Team : [{
    Photo :String,
    Title : String,
    Designation :String,
    Description :String
  }]
},

dashboardPageSchema : {
  Banner :String,
  Quality_Metrics :{
    Image1 :String,
    Image2 :String,
    Image3 : String,
    Image4 :String
  },
  Agile_Metrics :{
    Image1 :String,
    Image2 :String,
    Image3 : String,
    Image4 :String
  },
  Operations:{
    Image1 :String,
    Image2 :String,
    Image3 : String,
    Image4 :String
  },
  Service :{
    Image1 :String,
    Image2 :String,
    Image3 : String,
    Image4 :String
  },
  Key_Dates_Watch : [{
    Phases : [{
      Phase : [{ 
        Phase_No : String,
        Milestone : [String],
        Target_Date : [String],
        Status : [String],
        Comments : [String]
      }]
    }]
  }],
},

Message_Board : [{
    Post : [{
        Content : String,
        date : String,
        Login_id : String,
        Reply : [{
          Content : String,
          date : String,
          Login_id : String
        }]
     }]
  }]  
});
module.exports = mongoose.model('ExternalModel',externalSchema);