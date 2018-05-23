sap.ui.jsview("train_project.TrainProject", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf train_project.TrainProject
	*/ 
	getControllerName : function() {
		return "train_project.TrainProject";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf train_project.TrainProject
	*/ 
	createContent : function(oController) {
 		var oPage = sap.m.Page({
			title: "Train Project"
		});
 		
 		 var oBtnUpd = new sap.m.Button("Update", {
 			                                    text: "Update",
 			                                    tap: [ oController.Update, oController ]
 			          });

 			                        var oBtnDel = new sap.m.Button("Delete", {
 			                                    text: "Delete",
 			                                    tap: [ oController.Delete, oController ]
 			                                    });                                 
 			                        var oBtnCan = new sap.m.Button("Cancel", {
 			                                    text: "Cancel",
 			                                    tap: [ oController.Cancel, oController ]
 			                                    });
 			                        var oBtnSub = new sap.m.Button("Submit", {
 			                                    text: "Create New Bookings",
 			                                    press: oController.NewEntry, 
 			                                    });
 									var oBtnAdminBooking = new sap.m.Button("AdminBooking", {
 	 			                                text: "Bookings",
 	 			                                press: oController.ShowBooking, 
 	 			                                });
 									var oBtnAdminTrain = new sap.m.Button("AdminTrain", {
 						 	 			        text: "Trains",
 						 	 			        press: oController.ShowTrain, 
 						 	 			        });
 			                    
 			                        var oBtnSav = new sap.m.Button("Save", {
 			                                    text: "Save",
 			                                    tap: [ oController.Save, oController ]
 			                                    });
 			  var oDialog = new sap.m.Dialog("Dialog",{
 				                                    title:"Add Bookings",
 				                                    modal: true,
 				                                    contentWidth:"1em",

 				                                    content:[
 				                                    new sap.m.Label({text:"Enter Origin"}),
 				                                    new sap.m.Input({                                       
 				                                    maxLength: 20,  
 				                                    id: "Origin"
 				                                    }),                                 
 				                                    new sap.m.Label({text:"Enter Destination"}),
 				                                    new sap.m.Input({                                       
 				                                    maxLength: 20,
 				                                    id: "Destination"
 				                                    }),
 													new sap.m.Label({text:"Enter Departure Date (dd-mm-yyyy)"}),
 				                                    new sap.m.Input({                                       
 				                                    maxLength: 20,
 				                                    id: "Deptdate"
 				                                    }),
 													new sap.m.Label({text:"Enter Quantity"}),
 				                                    new sap.m.Input({                                       
 				                                    maxLength: 20,
 				                                    id: "Quantity"
 				                                    }),
 													new sap.m.Label({text:"Enter Customer Name"}),
 				                                    new sap.m.Input({                                       
 				                                    maxLength: 20,
 				                                    id: "Customername"
 				                                    }),oBtnUpd, oBtnDel, oBtnCan, oBtnSav
 				                                    ]
 				                                    });
 		 var oTable = new sap.m.Table({
 			                                    id: "Bookings",
 			                                    itemPress : [ oController.ItemPress,oController ],
 			                                    columns: [
 			                                    new sap.m.Column({
 			                                    width: "1em",
 			                                    header: new sap.m.Label({
 			                                    text: "Booking ID"  }) }),
 			                                    new sap.m.Column({
 			                                    width: "1em", 
 			                                    header: new sap.m.Label({
 			                                    text: "Train ID" })
 			                                    }),
 			                                    new sap.m.Column({
 			                                    width: "1em", 
 			                                    header: new sap.m.Label({
 			                                    text: "Origin"
 			                                    })
 			                                    }),
 			                                    new sap.m.Column({   
 			                                    width: "1em",
 			                                    header: new sap.m.Label({
 			                                    text: "Destination"
 			                                    })
 			                                    }),
												new sap.m.Column({
 			                                    width: "1em",
 			                                    header: new sap.m.Label({
 			                                    text: "Deptdate"  }) }),
 												new sap.m.Column({
 			                                    width: "1em",
 			                                    header: new sap.m.Label({
 			                                    text: "Price"  }) }),
 												new sap.m.Column({
 			                                    width: "1em",
 			                                    header: new sap.m.Label({
 			                                    text: "Inumber"  }) }),
 			 									new sap.m.Column({
 			                                    width: "1em",
 			                                    header: new sap.m.Label({
 			                                    text: "Quantity"  }) }),
 			 									new sap.m.Column({
 			                                    width: "1em",
 			                                    header: new sap.m.Label({
 			                                    text: "Customername"  }) }),
 			                                    ]  
 			                        });
 		var template = new sap.m.ColumnListItem({
 			
 			id: "first_template",
 			type: "Navigation",
 			visible: true,
 			cells: [
 				
 				new sap.m.Label("ID", {text: "{Bookingid}"}),
 				new sap.m.Label({text: "{Trainid}"}),
 				new sap.m.Label({text: "{Origin}"}),
 				new sap.m.Label({text: "{Destination}"}),
 				new sap.m.Label({text: "{Deptdate}"}),
 				new sap.m.Label({text: "{Price}"}),
 				new sap.m.Label({text: "{Inumber}"}),
 				new sap.m.Label({text: "{Quantity}"}),
 				new sap.m.Label({text: "{Customername}"})
 			]
 		}); 
	
 		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 		
 			var oTableTrain = new sap.m.Table({
			
			id: "Trains",
			itemPress : [ oController.ItemPressTrain,oController ],
			columns: [
				
				new sap.m.Column({ width: "1em", header: new sap.m.Label({										
						text: "Train ID"
				}) }),
				
				new sap.m.Column({ width: "1em", header: new sap.m.Label({										
						text: "Capacity"
				}) }),
								
				new sap.m.Column({ width: "1em", header: new sap.m.Label({										
						text: "Type"
				}) }),
				
				new sap.m.Column({ width: "1em", header: new sap.m.Label({										
					text: "Origin"
				}) }),	
				
				new sap.m.Column({ width: "1em", header: new sap.m.Label({		
					text: "Destination"
				}) })							
			]
		
		});
 		
 		var templateTrain = new sap.m.ColumnListItem({
			id: "Train_template",
			type: "Navigation",
			visible: true,
			cells: [
				new sap.m.Label("IDTrain",{
					text: "{Trainid}"
				}),
				new sap.m.Label({
					text: "{Capacity}"
				}),
				new sap.m.Label({
					text: "{Type}"
				}),
				new sap.m.Label({
					text: "{Origin}"
				}),
				new sap.m.Label({
					text: "{Destination}"
				})
			]			
		});
		
		var oBtnUpdTrain = new sap.m.Button("UpdateTrain",{
			text: "Update",
			tap: [ oController.UpdateTrain, oController]
		});
		
		var oBtnDelTrain = new sap.m.Button("DeleteTrain",{
			text: "Delete",
			tap: [ oController.DeleteTrain, oController]
		});
		
		var oBtnCanTrain = new sap.m.Button("CancelTrain",{
			text: "Cancel",
			tap: [ oController.CancelTrain, oController]
		});
		
		var oBtnSubTrain = new sap.m.Button("SubmitTrain", {
			text: "Create New Train",
			press: oController.NewEntryTrain,
		});
		
		var oBtnSavTrain = new sap.m.Button("SaveTrain", {
			text: "Save",
			tap: [ oController.SaveTrain, oController]
		});
		
		var oDialogTrain = new sap.m.Dialog("DialogTrain",{
			title: "Add/Modify Train",
			modal: true,
			contentWidth:"1em",
			content: [
				new sap.m.Label({text:"Capacity"}),
				new sap.m.Input({
					maxLength: 20,
					id: "Capacity"
				}),
				new sap.m.Label({text:"Type"}),
				new sap.m.Input({
					maxLength: 20,
					id: "Type"
				}),
				new sap.m.Label({text:"Origin"}),
				new sap.m.Input({
					maxLength: 20,
					id: "TrainOrigin"
				}),
				new sap.m.Label({text:"Enter Destination"}),
				new sap.m.Input({
					maxLength: 20,
					id: "TrainDestination"
				}),oBtnUpdTrain, oBtnDelTrain, oBtnCanTrain, oBtnSavTrain				
			]
		});
				
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
 		
 		

 		var  oFilters = null;
 		oPage.addContent(oBtnAdminBooking);
 		oPage.addContent(oBtnAdminTrain);
 		oTable.bindItems( "/results",template, null, oFilters);
 		oTableTrain.bindItems( "/results",templateTrain, null, oFilters);      
 		oPage.addContent(oTable);
 		oPage.addContent(oTableTrain);
 		oPage.addContent(oBtnSubTrain);
 		oPage.addContent(oBtnSub);
 		
 		return oPage;
	}

});