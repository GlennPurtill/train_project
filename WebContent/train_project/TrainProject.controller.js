sap.ui.controller("train_project.TrainProject", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf train_project.TrainProject
*/
	 onInit: function() {
		                
		                         var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/";
		                         var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
		 					     var y = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/bc/ui2/start_up";
		                         var oJsonModel = new sap.ui.model.json.JSONModel();
//		 						 var oJsonUser = new sap.ui.model.json.JSONModel("http://dewdfgwp01325.wdf.sap.corp:8000/sap/bc/ui2/start_up");
//		 						 console.log(oModel.getProperty("/"));
//		 						 console.log(oJsonUser);
								
								 
		 						 sap.ui.getCore().setModel(oJsonModel);
		 						 var oSelectedItem;
		                         var sBookingId;
		                         var sTrainId;
		                         var sOrigin;
		                         var sDestination;
								 var sDeptDate;
								 var sInumber;
								 var sPrice;
								 var sQuantity;
								 var sCustomerName;
								 var sID;
						         var sCap;
						         var sType;
						         var sTrainOrigin;
						         var sDest;
								 sap.ui.getCore().byId("Bookings").setVisible(false); //bookings table
								 sap.ui.getCore().byId("Submit").setVisible(false); //create new booking btn
								 var userinum = 'i34867';
								 var oUserData;
								 var xmlHttp = null;
								 xmlHttp = new XMLHttpRequest();
								 xmlHttp.onreadystatechange = function() {
								 if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
								         oUserData = JSON.parse(xmlHttp.responseText);
								         console.log(oUserData.id);
								 if(oUserData.id == 'I34867' || oUserData.id == 'I348492'){
									 oModel.read("/zTP_BookingAllSet",null,null,true,function(oData,repsonse){
									 oJsonModel.setData(oData);
									 }); 
									 sap.ui.getCore().byId("Bookings").setVisible(true);
									 sap.ui.getCore().byId("AdminBooking").setVisible(true);
								     sap.ui.getCore().byId("AdminTrain").setVisible(true);
								     sap.ui.getCore().byId("Submit").setVisible(true);
								     sap.ui.getCore().byId("Trains").setVisible(false);
								     sap.ui.getCore().byId("SubmitTrain").setVisible(false);
								 }
								 else{
									 oModel.read("/zTP_BookingSet",null,null,true,function(oData,repsonse){
									 oJsonModel.setData(oData);
								     }); 
									 sap.ui.getCore().byId("Bookings").setVisible(true); //bookings table
									 sap.ui.getCore().byId("Submit").setVisible(true); //create new booking btn
									 sap.ui.getCore().byId("AdminBooking").setVisible(false);
									 sap.ui.getCore().byId("AdminTrain").setVisible(false);
									 sap.ui.getCore().byId("Trains").setVisible(false);
									 sap.ui.getCore().byId("SubmitTrain").setVisible(false);
								 	}
								 	}
								 };
								 xmlHttp.open("GET", y, false);
								 xmlHttp.send(null);
								 
								 
								 
								 
								 
	 } ,

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf train_project.TrainProject
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf train_project.TrainProject
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf train_project.TrainProject
*/
//	onExit: function() {
//,
//	}
	 ShowBooking: function(){
		 sap.ui.getCore().byId("Bookings").setVisible(true);
		 sap.ui.getCore().byId("Trains").setVisible(false);
		 sap.ui.getCore().byId("Submit").setVisible(true);
		 sap.ui.getCore().byId("SubmitTrain").setVisible(false);
		 var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/";
		 var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
		 var oJsonModel = new sap.ui.model.json.JSONModel();
		  oModel.read("/zTP_BookingAllSet",null,null,true,function(oData,repsonse){
		    	oJsonModel.setData(oData);
		    });   
		 sap.ui.getCore().setModel(oJsonModel);
	 },
	 ShowTrain: function(){
		 sap.ui.getCore().byId("Bookings").setVisible(false);
		 sap.ui.getCore().byId("Trains").setVisible(true);
		 sap.ui.getCore().byId("Submit").setVisible(false);
		 sap.ui.getCore().byId("SubmitTrain").setVisible(true);
		 var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/";
		 var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,true);
		 var oJsonModel = new sap.ui.model.json.JSONModel();
		  oModel.read("/ZTP_TRAINSet",null,null,true,function(oData,repsonse){
		    	oJsonModel.setData(oData);
		    });   
		 sap.ui.getCore().setModel(oJsonModel);
		
	 },
	     					
	 ItemPress: function(evt) {
		                         sap.ui.getCore().byId("Dialog").open();                     
		                         sap.ui.getCore().byId("Update").setVisible(true);
		                         sap.ui.getCore().byId("Delete").setVisible(true);

		         
		                         oSelectedItem = evt.getParameter("listItem");
		                         sBookingId = oSelectedItem.getBindingContext().getProperty("Bookingid");
		                         sTrainId = oSelectedItem.getBindingContext().getProperty("Trainid");
		                         sOrigin = oSelectedItem.getBindingContext().getProperty("Origin");
		                         sDestination = oSelectedItem.getBindingContext().getProperty("Destination");
								 sDeptDate = oSelectedItem.getBindingContext().getProperty("Deptdate");
								 sInumber = oSelectedItem.getBindingContext().getProperty("Inumber");
								 sPrice = oSelectedItem.getBindingContext().getProperty("Price");
								 sQuantity = oSelectedItem.getBindingContext().getProperty("Quantity");
								 sCustomerName = oSelectedItem.getBindingContext().getProperty("Customername");
								
		         
		                         
		                         sap.ui.getCore().byId("Origin").setValue(sOrigin);
		                         sap.ui.getCore().byId("Destination").setValue(sDestination);
		                         sap.ui.getCore().byId("Deptdate").setValue(sDeptDate);
								// sap.ui.getCore().byId("Price").setValue(sPrice);
								 sap.ui.getCore().byId("Quantity").setValue(sQuantity);
								 sap.ui.getCore().byId("Customername").setValue(sCustomerName);
								// sap.ui.getCore().byId("Bookingid").setEnabled(false);
		                         },
		         
		                         NewEntry: function() {
		                         sap.ui.getCore().byId("Dialog").open();
		                         sap.ui.getCore().byId("Save").setVisible(true);
		                         sap.ui.getCore().byId("Update").setVisible(false);
		                         sap.ui.getCore().byId("Delete").setVisible(false);
		                         sap.ui.getCore().byId("Origin").setValue("");
		                         sap.ui.getCore().byId("Destination").setValue("");
		                         sap.ui.getCore().byId("Deptdate").setValue("");
							//	 sap.ui.getCore().byId("Price").setValue("");
								 sap.ui.getCore().byId("Quantity").setValue("");
								 sap.ui.getCore().byId("Customername").setValue("");
		                         },                      
		         
		 Save: function() {
		              
		             var oEntry = {};
		 
		 			 oEntry.Origin = sap.ui.getCore().byId("Origin").getValue();
		 			oEntry.Destination = sap.ui.getCore().byId("Destination").getValue();    
		 			oEntry.Deptdate = sap.ui.getCore().byId("Deptdate").getValue();    
		 		//	oEntry.Price = Number(sap.ui.getCore().byId("Price").getValue());
		 			oEntry.Quantity = Number(sap.ui.getCore().byId("Quantity").getValue());    
		 			oEntry.Customername = sap.ui.getCore().byId("Customername").getValue(); 

		             OData.request({
		                         requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/zTP_BookingSet",
		                         method : "GET",
		                         headers : {
		                                                 "X-Requested-With" : "XMLHttpRequest",
		                                                 "Content-Type" : "application/atom+xml",
		                                                 "DataServiceVersion" : "2.0",
		                                                 "X-CSRF-Token" : "Fetch"
		                                                 }
		                                     },
		                                     function(data, response) {
		                                                 header_xcsrf_token = response.headers['x-csrf-token'];
		                                                 var oHeaders = {
		                                                             "x-csrf-token" : header_xcsrf_token,
		                                                             'Accept' : 'application/json',
		                                     };

		                         OData.request({
		                                                 requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/zTP_BookingSet",

		                                                 method : "POST",
		                                                 headers : oHeaders,
		                                                 data:oEntry
		                                     },
		                                                 function(data,request) {
		                                                 alert("Booking Created Successfully");         
		                                                 location.reload(true);
		                                     },          function(err) {
		                                                 alert("Booking Creation Failed");
		                                     });
		                         }, function(err) {
		                                                 var request = err.request;
		                                                 var response = err.response;
		                                                 alert("Error in Get — Request " + request + " Response " + response);
		                                     });                                               
		                                                             },
		 Update: function() {
		                         var oEntry = {};
		                         oEntry.Bookingid = sBookingId;
			 					 oEntry.Trainid = sTrainId;
			 					 oEntry.Origin = sap.ui.getCore().byId("Origin").getValue();
			 					 oEntry.Destination = sap.ui.getCore().byId("Destination").getValue();    
			 					 oEntry.Deptdate = sap.ui.getCore().byId("Deptdate").getValue();    
			 					    
			 					 oEntry.Inumber = sInumber;    
			 					 oEntry.Quantity = Number(sap.ui.getCore().byId("Quantity").getValue());   
			 					oEntry.Price =oEntry.Quantity* 5; 
			 					 oEntry.Customername = sap.ui.getCore().byId("Customername").getValue();   
		         
		                         OData.request({
		                                     requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/zTP_BookingSet",
		                                     method : "GET",
		                                     headers : {
		                                                             "X-Requested-With" : "XMLHttpRequest",
		                                                             "Content-Type" : "application/atom+xml",
		                                                             "DataServiceVersion" : "2.0",
		                                                             "X-CSRF-Token" : "Fetch"
		                                                             }
		                                                 },
		                                                 function(data, response) {
		                                                             header_xcsrf_token = response.headers['x-csrf-token'];
		                                                             var oHeaders = {
		                                                                         "x-csrf-token" : header_xcsrf_token,
		                                                                         'Accept' : 'application/json',
		                                                 };

		                                     OData.request({
		                                                             requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/zTP_BookingSet("+oEntry.Bookingid+")",

		                                                             method : "PUT",
		                                                             headers : oHeaders,
		                                                             data:oEntry
		                                                 },
		                                                             function(data,request) {
		                                                             alert("Update Success");            
		                                                             location.reload(true);
		                                                 },          function(err) {
		                                                             alert("Update Failed");
		                                                 });
		                                     }, function(err) {
		                                                             var request = err.request;
		                                                             var response = err.response;
		                                                             alert("Error in Get — Request " + request + " Response " + response);
		                                                 });         
		                                                 },
		 
		 ShowBookingTable: function() {
			 sap.ui.getCore().byId("Bookings").setVisible(false);
			 sap.ui.getCore().byId("Submit").setVisible(false);
		},             
		 
		 // Delete Action                                            
		 Delete: function() {
		             var oEntry = {};
		             oEntry.Bookingid= sBookingId;

		             OData.request({
		                         requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/zTP_BookingSet(" + oEntry.Bookingid + ")",
		                         method : "GET",
		                         headers : {
		                                                 "X-Requested-With" : "XMLHttpRequest",
		                                                 "Content-Type" : "application/atom+xml",
		                                                 "DataServiceVersion" : "2.0",
		                                                 "X-CSRF-Token" : "Fetch"
		                                                 }
		                                     },
		                                     function(data, response) {
		                                                 header_xcsrf_token = response.headers['x-csrf-token'];
		                                                 var oHeaders = {
		                                                             "x-csrf-token" : header_xcsrf_token,
		                                                             'Accept' : 'application/json',
		                                     };

		                         OData.request({
		                                                 requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/zTP_BookingSet("+oEntry.Bookingid+")",

		                                                 method : "DELETE",
		                                                 headers : oHeaders,
		                                                 data:oEntry
		                                     },
		                                                 function(data,request) {
		                                                 alert("Delete Success");            
		                                                 location.reload(true);
		                                     },          function(err) {
		                                                 alert("Delete Failed");
		                                     });
		                         }, function(err) {
		                                                 var request = err.request;
		                                                 var response = err.response;
		                                                 alert("Error in Get — Request " + request + " Response " + response);
		                                     });         
		          
		                               },
//		 // Cancel Action                          
		   Cancel:function() {
		                             sap.ui.getCore().byId("Dialog").close();
		                                        },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		 
		 ItemPressTrain: function(evt) {
	         sap.ui.getCore().byId("DialogTrain").open();                    
	         sap.ui.getCore().byId("UpdateTrain").setVisible(true);
	         sap.ui.getCore().byId("DeleteTrain").setVisible(true);


	         oSelectedItem = evt.getParameter("listItem");
	         sID = oSelectedItem.getBindingContext().getProperty("Trainid");
	         sCap = oSelectedItem.getBindingContext().getProperty("Capacity");
	         sType = oSelectedItem.getBindingContext().getProperty("Type");
	         sTrainOrigin = oSelectedItem.getBindingContext().getProperty("Origin");
	         sDest = oSelectedItem.getBindingContext().getProperty("Destination");

//	         sap.ui.getCore().byId("Id").setValue(sID);
	         sap.ui.getCore().byId("Capacity").setValue(sCap);
	         sap.ui.getCore().byId("Type").setValue(sType);
	         sap.ui.getCore().byId("TrainOrigin").setValue(sTrainOrigin);
	         sap.ui.getCore().byId("TrainDestination").setValue(sDest);
//	         sap.ui.getCore().byId("Id").setEnabled(false);
	         },

	         NewEntryTrain: function() {
	         sap.ui.getCore().byId("DialogTrain").open();
	         sap.ui.getCore().byId("SaveTrain").setVisible(true);
	         sap.ui.getCore().byId("UpdateTrain").setVisible(false);
	         sap.ui.getCore().byId("DeleteTrain").setVisible(false);
	         sap.ui.getCore().byId("Capacity").setValue("");
	         sap.ui.getCore().byId("Type").setValue("");
	         sap.ui.getCore().byId("TrainOrigin").setValue("");
	         sap.ui.getCore().byId("TrainDestination").setValue("");
//	         sap.ui.getCore().byId("Id").setEnabled(true);
	         },   
	         
	         SaveTrain: function() {
	             
		            var oEntry = {};
		            oEntry.Capacity= Number(sap.ui.getCore().byId("Capacity").getValue());
		            oEntry.Type= sap.ui.getCore().byId("Type").getValue();
		            oEntry.Origin= sap.ui.getCore().byId("TrainOrigin").getValue();
		            oEntry.Destination= sap.ui.getCore().byId("TrainDestination").getValue();
		 
		            OData.request({
		                        requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/ZTP_TRAINSet/",
		                        method : "GET",
		                        headers : {
		                                                "X-Requested-With" : "XMLHttpRequest",
		                                                "Content-Type" : "application/atom+xml",
		                                                "DataServiceVersion" : "2.0",
		                                                "X-CSRF-Token" : "Fetch"
		                                                }
		                                    },
		                                    function(data, response) {
		                                                header_xcsrf_token = response.headers['x-csrf-token'];
		                                                var oHeaders = {
		                                                            "x-csrf-token" : header_xcsrf_token,
		                                                            'Accept' : 'application/json',
		                                    };
		 
		                        OData.request({
		                                                requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/ZTP_TRAINSet/",
		 
		                                                method : "POST",
		                                                headers : oHeaders,
		                                                data:oEntry
		                                    },
		                                                function(data,request) {
		                                                alert("Train Created Successfully");        
		                                                location.reload(true);
		                                    },          function(err) {
		                                                alert("Train Creation Failed");
		                                    });
		                        }, function(err) {
		                                                var request = err.request;
		                                                var response = err.response;
		                                                alert("Error in Get -- Request " + request + " Response " + response);
		                                    });                                              
		                                                            },	
		
	                    UpdateTrain: function() {
	                    	var oEntry = {};
	                        oEntry.Trainid= sID;
	                        oEntry.Capacity= Number(sap.ui.getCore().byId("Capacity").getValue());
	                        oEntry.Type= sap.ui.getCore().byId("Type").getValue();
	                        oEntry.Origin= sap.ui.getCore().byId("TrainOrigin").getValue();
	                        oEntry.Destination= sap.ui.getCore().byId("TrainDestination").getValue();
	        
	                        OData.request({
	                                    requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/ZTP_TRAINSet",
	                                    method : "GET",
	                                    headers : {
	                                                            "X-Requested-With" : "XMLHttpRequest",
	                                                            "Content-Type" : "application/atom+xml",
	                                                            "DataServiceVersion" : "2.0",
	                                                            "X-CSRF-Token" : "Fetch"
	                                                            }
	                                                },
	                                                function(data, response) {
	                                                            header_xcsrf_token = response.headers['x-csrf-token'];
	                                                            var oHeaders = {
	                                                                        "x-csrf-token" : header_xcsrf_token,
	                                                                        'Accept' : 'application/json',
	                                                };
	 
	                                    OData.request({
	                                                            requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/ZTP_TRAINSet(" +oEntry.Trainid + ")",
	 
	                                                            method : "PUT",
	                                                            headers : oHeaders,
	                                                            data:oEntry
	                                                },
	                                                            function(data,request) {
	                                                            alert("Update Success");           
	                                                            location.reload(true);
	                                                },          function(err) {
	                                                            alert("Update Failed");
	                                                });
	                                    }, function(err) {
	                                                            var request = err.request;
	                                                            var response = err.response;
	                                                            alert("Error in Get -- Request " + request + " Response " + response);
	                                                });        
	                                                },
	// Delete Action                                           
	DeleteTrain: function() {
	            var oEntry = {};
	            oEntry.Trainid= sID;
	 
	            OData.request({
	                        requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/ZTP_TRAINSet(" + oEntry.Trainid + ")",
	                        method : "GET",
	                        headers : {
	                                                "X-Requested-With" : "XMLHttpRequest",
	                                                "Content-Type" : "application/atom+xml",
	                                                "DataServiceVersion" : "2.0",
	                                                "X-CSRF-Token" : "Fetch"
	                                                }
	                                    },
	                                    function(data, response) {
	                                                header_xcsrf_token = response.headers['x-csrf-token'];
	                                                var oHeaders = {
	                                                            "x-csrf-token" : header_xcsrf_token,
	                                                            'Accept' : 'application/json',
	                                    };
	 
	                        OData.request({
	                                                requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZGS_TRAIN_PROJECT_SRV_02/ZTP_TRAINSet("+oEntry.Trainid+")",
	 
	                                                method : "DELETE",
	                                                headers : oHeaders,
	                                                data:oEntry
	                                    },
	                                                function(data,request) {
	                                                alert("Delete Success");           
	                                                location.reload(true);
	                                    },          function(err) {
	                                                alert("Delete Failed");
	                                    });
	                        }, function(err) {
	                                                var request = err.request;
	                                                var response = err.response;
	                                                alert("Error in Get -- Request " + request + " Response " + response);
	                                    });        
	         
	                              },
	// Cancel Action                         
	  CancelTrain:function() {
	                            sap.ui.getCore().byId("DialogTrain").close();
	                                       }
	 
	
		 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});