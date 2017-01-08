

//initial state
export const initialTabIndex  = 1 ;

//how to change the initial state of the CURRENT STATE KEY
function tabIndex (crtTabIndex = initialTabIndex , action){

	switch(action.type) {
		case "switchTab" : 
			crtTabIndex = action.nextTabIndex;
		break;
	};

	return crtTabIndex;
};


export const tabIndexReducer = tabIndex;